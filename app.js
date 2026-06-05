// app.js - Con selección múltiple y detección de conflictos
// CORREGIDO: El menú SOLO se abre/cierra con el botón FAB o el botón cerrar

let currentState = {
    facultad: null,
    facultadPath: null,
    carrera: null,
    carreraData: null,
    nivel: null,
    materia: null
};

// Almacenamiento de selecciones: cada item = { id, carreraNombre, nivelId, nivelNombre, materiaNombre, docenteId, docenteNombre, horario, materiaId, materiaNombreLarga }
let selectedItems = [];

// Datos mock de facultades
const FACULTADES = [
    { id: "tecnologia", nombre: "Facultad de Tecnología", path: "tecnologia" },
    { id: "ciencias_puras", nombre: "Facultad de Ciencias Puras", path: "ciencias_puras" },
];

const CARRERAS_POR_FACULTAD = {
    "tecnologia": [
        { id: "sistemas", nombre: "Licenciatura en Sistemas" },
        { id: "alimentos", nombre: "Licenciatura en Alimentos" },
        { id: "biologia", nombre: "Licenciatura en Biología" },
        { id: "civil", nombre: "Licenciatura en Civil" }
    ],
    "ciencias_puras": [
        { id: "matematica", nombre: "Licenciatura en Matemática (LIC)" },
        { id: "fisica", nombre: "Licenciatura en Física (LIC)" }
    ],
};

async function loadCarreraData(facultadId, carreraId) {
    return new Promise((resolve, reject) => {
        const scriptPath = `facultades/${facultadId}/${carreraId}/carrera.js`;
        const script = document.createElement('script');
        script.src = scriptPath;
        script.onload = () => {
            const globalVar = `carreraData_${carreraId}`;
            if (window[globalVar]) {
                resolve(window[globalVar]);
            } else {
                reject(new Error(`No se encontró datos en ${globalVar}`));
            }
            script.remove();
        };
        script.onerror = () => {
            reject(new Error(`No se pudo cargar ${scriptPath}`));
        };
        document.head.appendChild(script);
    });
}

const navContainer = document.getElementById('nav-container');
const breadcrumbDiv = document.getElementById('breadcrumb-buttons');
const scheduleTitle = document.getElementById('schedule-title');
const horarioWrapper = document.getElementById('horario-wrapper');
const selectionsListDiv = document.getElementById('selections-list');
const scheduleCountSpan = document.getElementById('schedule-count');

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const HORAS = ["06:45", "07:30", "08:15", "09:00", "09:45", "10:30", "11:15", "12:00", 
               "12:45", "13:30", "14:00", "14:45", "15:30", "16:15", "17:00", "17:45", 
               "18:30", "19:15", "20:00", "20:45", "21:30"];

// Guardar selecciones en localStorage
function saveSelections() {
    localStorage.setItem('selectedHorarios', JSON.stringify(selectedItems));
}

function loadSelectionsFromStorage() {
    const saved = localStorage.getItem('selectedHorarios');
    if (saved) {
        try {
            selectedItems = JSON.parse(saved);
            renderSelectionsList();
            renderHorario();
        } catch(e) {}
    }
}

// Renderiza las burbujas de selecciones
function renderSelectionsList() {
    if (!selectionsListDiv) return;
    if (selectedItems.length === 0) {
        selectionsListDiv.innerHTML = 'Ninguna materia seleccionada aún.';
        if (scheduleCountSpan) scheduleCountSpan.innerText = '0 materias';
        return;
    }
    selectionsListDiv.innerHTML = selectedItems.map((item, idx) => `
        <div class="selection-badge" data-idx="${idx}">
            <strong>📘 ${item.materiaNombre}</strong> - 👨‍🏫 ${item.docenteNombre}
            <small>(${item.carreraNombre} - ${item.nivelNombre})</small>
            <button class="remove-selection" data-idx="${idx}">✕</button>
        </div>
    `).join('');
    
    document.querySelectorAll('.remove-selection').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.idx);
            if (!isNaN(idx)) {
                selectedItems.splice(idx, 1);
                saveSelections();
                renderSelectionsList();
                renderHorario();
                renderBreadcrumbButtons();
            }
            e.stopPropagation();
        });
    });
    
    const clearBtn = document.getElementById('clear-all-selections');
    if (clearBtn) {
        clearBtn.onclick = () => {
            selectedItems = [];
            saveSelections();
            renderSelectionsList();
            renderHorario();
        };
    }
    
    if (scheduleCountSpan) scheduleCountSpan.innerText = `${selectedItems.length} materia(s)`;
}

// Agregar selección (materia + docente)
function addSelection(carreraData, nivelId, nivelNombre, materiaId, materiaObj, docente) {
    // Verificar si ya existe la misma combinación materia+docente
    const exists = selectedItems.some(item => 
        item.materiaId === materiaId && item.docenteId === docente.id
    );
    
    if (exists) {
        alert('Esta materia con el mismo docente ya ha sido agregada');
        return;
    }
    
    const newItem = {
        id: `${Date.now()}-${Math.random()}`,
        carreraNombre: carreraData.nombre,
        nivelId: nivelId,
        nivelNombre: nivelNombre,
        materiaId: materiaId,
        materiaNombre: materiaObj.nombre,
        docenteId: docente.id,
        docenteNombre: docente.nombre,
        horario: docente.horario || {},
        materiaNombreLarga: materiaObj.nombre
    };
    selectedItems.push(newItem);
    saveSelections();
    renderSelectionsList();
    renderHorario();
}

// Render horario con conflictos
function renderHorario() {
    if (selectedItems.length === 0) {
        horarioWrapper.innerHTML = `<div class="empty-message">📭 No hay materias seleccionadas.<br>Agrega desde el menú de navegación 📚</div>`;
        scheduleTitle.innerText = `📅 Horario Combinado`;
        if (scheduleCountSpan) scheduleCountSpan.innerText = '0 materias';
        return;
    }
    
    scheduleTitle.innerText = `📅 Horario Combinado`;
    if (scheduleCountSpan) scheduleCountSpan.innerText = `${selectedItems.length} materia(s)`;
    
    // Mapa de ocupación: key "día|horaInicio" -> array de items en conflicto
    let ocupacion = {};
    
    // Primera pasada: llenar mapa de ocupación
    for (let item of selectedItems) {
        if (!item.horario) continue;
        for (let [dia, clase] of Object.entries(item.horario)) {
            const horaInicio = clase.hora.split('-')[0];
            if (!horaInicio) continue;
            const key = `${dia}|${horaInicio}`;
            if (!ocupacion[key]) ocupacion[key] = [];
            ocupacion[key].push({ item, clase });
        }
    }
    
    let tableHTML = `<table class="horario-table"><thead><tr><th>Hora</th>${DIAS.map(d => `<th>${d}</th>`).join('')}</tr></thead><tbody>`;
    
    for (let hora of HORAS) {
        tableHTML += `<tr><td style="font-weight:600;">${hora}</td>`;
        for (let dia of DIAS) {
            let key = `${dia}|${hora}`;
            let clasesEnCelda = ocupacion[key] || [];
            if (clasesEnCelda.length === 0) {
                tableHTML += `<td></td>`;
            } else {
                const isConflict = clasesEnCelda.length > 1;
                let contenidoHtml = '';
                for (let idx = 0; idx < clasesEnCelda.length; idx++) {
                    const { item, clase } = clasesEnCelda[idx];
                    const conflictClass = isConflict ? 'conflict-cell' : '';
                    contenidoHtml += `<div class="clase-cell ${conflictClass}" style="margin-bottom: ${idx < clasesEnCelda.length-1 ? '6px' : '0'};">
                        📘 ${item.materiaNombre}<br>
                        👨‍🏫 ${item.docenteNombre}<br>
                        <span class="badge-aula">🏫 ${clase.aula || 'N/A'}</span>
                        <span class="badge-aula">⏰ ${clase.hora}</span>
                        ${isConflict ? '<div class="conflict-warning">⚠️ CONFLICTO</div>' : ''}
                    </div>`;
                }
                tableHTML += `<td>${contenidoHtml}</td>`;
            }
        }
        tableHTML += `</tr>`;
    }
    tableHTML += `</tbody></table>`;
    horarioWrapper.innerHTML = tableHTML;
}

// ---------- RENDER DE NAVEGACIÓN ----------
async function render() {
    if (!currentState.facultad) {
        renderFacultades();
    } else if (!currentState.carrera) {
        renderCarreras();
    } else if (!currentState.carreraData) {
        try {
            currentState.carreraData = await loadCarreraData(currentState.facultad, currentState.carrera);
            currentState.nivel = null;
            currentState.materia = null;
            renderNiveles();
        } catch (error) {
            navContainer.innerHTML = `<div class="empty-message">❌ Error: ${error.message}</div>`;
        }
    } else if (!currentState.nivel) {
        renderNiveles();
    } else if (!currentState.materia) {
        renderMaterias();
    } else {
        renderDocentesConBoton();
    }
    renderBreadcrumbButtons();
    
    // ELIMINADO: Ya no se cierra el menú automáticamente al navegar
    // El menú SOLO se cierra cuando el usuario presiona el botón de cerrar o el overlay
}

function renderFacultades() {
    navContainer.innerHTML = `
        <div class="nav-title">🏛️ FACULTADES</div>
        <div style="padding: 4px;">
            ${FACULTADES.map(f => `<div class="facultad-item" data-id="${f.id}" data-path="${f.path}">📁 ${f.nombre}</div>`).join('')}
        </div>
    `;
    document.querySelectorAll('.facultad-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState = { facultad: el.dataset.id, facultadPath: el.dataset.path, carrera: null, carreraData: null, nivel: null, materia: null };
            render();
        });
    });
}

function renderCarreras() {
    const carreras = CARRERAS_POR_FACULTAD[currentState.facultad] || [];
    const facultadInfo = FACULTADES.find(f => f.id === currentState.facultad);
    navContainer.innerHTML = `
        <div class="nav-title">🎓 CARRERAS</div>
        <div style="font-size:0.8rem; padding:0 4px 8px 4px; color:#666;">${facultadInfo?.nombre || currentState.facultad}</div>
        <div style="padding: 4px;">
            ${carreras.map(c => `<div class="carrera-item" data-id="${c.id}">📖 ${c.nombre}</div>`).join('')}
        </div>
    `;
    document.querySelectorAll('.carrera-item').forEach(el => {
        el.addEventListener('click', async () => {
            currentState.carrera = el.dataset.id;
            currentState.carreraData = null;
            currentState.nivel = null;
            currentState.materia = null;
            await render();
        });
    });
}

function renderNiveles() {
    const niveles = currentState.carreraData.niveles;
    navContainer.innerHTML = `
        <div class="nav-title">📌 NIVELES</div>
        <div style="font-size:0.8rem; padding:0 4px 8px 4px; color:#666;">${currentState.carreraData.nombre}</div>
        <div style="padding: 4px;">
            ${niveles.map(n => `<div class="nav-item" data-id="${n.id}">📘 ${n.nombre}</div>`).join('')}
        </div>
    `;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState.nivel = el.dataset.id;
            currentState.materia = null;
            render();
        });
    });
}

function renderMaterias() {
    const nivelData = currentState.carreraData.nivelesData[currentState.nivel];
    const materias = nivelData.materias;
    navContainer.innerHTML = `
        <div class="nav-title">📚 MATERIAS</div>
        <div style="font-size:0.8rem; padding:0 4px 8px 4px; color:#666;">Nivel: ${currentState.nivel.toUpperCase()}</div>
        <div style="padding: 4px;">
            ${materias.map(m => `<div class="nav-item" data-id="${m.id}">📗 ${m.nombre}</div>`).join('')}
        </div>
    `;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState.materia = el.dataset.id;
            render();
        });
    });
}

function renderDocentesConBoton() {
    const nivelData = currentState.carreraData.nivelesData[currentState.nivel];
    const materiaData = nivelData.materiasData[currentState.materia];
    const docentes = materiaData.docentes;
    
    navContainer.innerHTML = `
        <div class="nav-title">👩‍🏫 DOCENTES</div>
        <div style="font-size:0.8rem; padding:0 4px 8px 4px; color:#666;">${materiaData.nombre}</div>
        <div style="padding: 8px; background:#eef2fa; border-radius:12px; margin-bottom:12px; font-size:0.75rem;">
            ⚡ Haz clic en "➕ Agregar" para añadir este docente a tu horario.
        </div>
        <div style="padding: 4px;">
            ${docentes.map(d => `
                <div style="background:#f8f9fa; margin-bottom:12px; border-radius:12px; padding:12px;">
                    <div><strong>👨‍🏫 ${d.nombre}</strong> ${d.tipo ? `(${d.tipo})` : ''}</div>
                    <div style="font-size:0.7rem; margin-top:6px; color:#555;">Horario: ${d.horario ? Object.keys(d.horario).join(', ') : 'No definido'}</div>
                    <button class="add-teacher-btn" data-docente-id="${d.id}" style="margin-top:8px;">➕ Agregar esta materia</button>
                </div>
            `).join('')}
        </div>
    `;
    
    document.querySelectorAll('.add-teacher-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const docenteId = btn.dataset.docenteId;
            const nivelDataInner = currentState.carreraData.nivelesData[currentState.nivel];
            const materiaDataInner = nivelDataInner.materiasData[currentState.materia];
            const docente = materiaDataInner.docentes.find(d => d.id === docenteId);
            if (docente) {
                addSelection(
                    currentState.carreraData,
                    currentState.nivel,
                    currentState.nivel.toUpperCase().replace('_', ' '),
                    currentState.materia,
                    materiaDataInner,
                    docente
                );
                btn.textContent = '✓ Agregado';
                setTimeout(() => { btn.textContent = '➕ Agregar esta materia'; }, 1000);
            }
            e.stopPropagation();
        });
    });
}

function renderBreadcrumbButtons() {
    let buttons = `<button class="back-button" id="reset-all">🏠 Inicio</button>`;
    if (currentState.facultad) buttons += `<button class="back-button" id="back-to-carreras">← Volver a carreras</button>`;
    if (currentState.carrera) buttons += `<button class="back-button" id="back-to-niveles">← Volver a niveles</button>`;
    if (currentState.nivel) buttons += `<button class="back-button" id="back-to-materias">← Volver a materias</button>`;
    if (currentState.materia) buttons += `<button class="back-button" id="back-to-docentes">← Volver a docentes</button>`;
    breadcrumbDiv.innerHTML = buttons;
    
    document.getElementById('reset-all')?.addEventListener('click', () => {
        currentState = { facultad: null, facultadPath: null, carrera: null, carreraData: null, nivel: null, materia: null };
        render();
    });
    document.getElementById('back-to-carreras')?.addEventListener('click', () => {
        currentState.carrera = null; currentState.carreraData = null; currentState.nivel = null; currentState.materia = null;
        render();
    });
    document.getElementById('back-to-niveles')?.addEventListener('click', () => {
        currentState.nivel = null; currentState.materia = null;
        render();
    });
    document.getElementById('back-to-materias')?.addEventListener('click', () => {
        currentState.materia = null;
        render();
    });
}

// ========== FUNCIONES PARA MENÚ MÓVIL ==========
// El menú SOLO se abre/cierra con estos botones
function openMobileMenu() {
    const navPanel = document.getElementById('navPanel');
    const menuOverlay = document.getElementById('menuOverlay');
    if (navPanel) navPanel.classList.add('open');
    if (menuOverlay) menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const navPanel = document.getElementById('navPanel');
    const menuOverlay = document.getElementById('menuOverlay');
    if (navPanel) navPanel.classList.remove('open');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Función para abrir el menú al inicio en móvil
function openMenuOnStartIfMobile() {
    if (window.innerWidth <= 768) {
        openMobileMenu();
    }
}

// Inicializar controles del menú móvil
function initMobileMenu() {
    const menuFab = document.getElementById('menuFabBtn');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (menuFab) menuFab.addEventListener('click', openMobileMenu);
    if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);
    
    // Al cambiar de tamaño, si se vuelve a desktop, aseguramos que el menú esté cerrado
    // pero NO lo abrimos automáticamente
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// Inicializar
loadSelectionsFromStorage();
render();
initMobileMenu();
// Abrir el menú automáticamente al inicio SOLO en móvil
openMenuOnStartIfMobile();