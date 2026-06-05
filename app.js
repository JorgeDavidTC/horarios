// app.js - Con selección múltiple y detección de conflictos

let currentState = {
    facultad: null,
    facultadPath: null,
    carrera: null,
    carreraData: null,
    nivel: null,
    materia: null
    // Ya NO guardamos docente individual porque haremos selección múltiple
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
const scheduleSubtitle = document.getElementById('schedule-subtitle');
const horarioWrapper = document.getElementById('horario-wrapper');
const selectionsListDiv = document.getElementById('selections-list');

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const HORAS = ["06:45", "07:30", "08:15", "09:00", "09:45", "10:30", "11:15", "12:00", 
               "12:45", "13:30", "14:15", "15:00", "15:45", "16:30", "17:15", "18:00", 
               "18:45", "19:30", "20:15", "21:00"];

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
                renderBreadcrumbButtons(); // refresca por si acaso
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
}

// Agregar selección (materia + docente)
function addSelection(carreraData, nivelId, nivelNombre, materiaId, materiaObj, docente) {
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
        horarioWrapper.innerHTML = `<div class="empty-message">No hay materias seleccionadas. Agrega desde el panel izquierdo.</div>`;
        scheduleTitle.innerText = `📅 Horario Combinado`;
        scheduleSubtitle.innerText = `0 materias seleccionadas`;
        return;
    }
    
    scheduleTitle.innerText = `📅 Horario Combinado (${selectedItems.length} materia(s))`;
    scheduleSubtitle.innerText = `Selecciona más desde la izquierda. Las celdas en rojo indican conflictos de horario.`;
    
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
                // Determinamos si hay conflicto (más de 1 clase en misma celda)
                const isConflict = clasesEnCelda.length > 1;
                let contenidoHtml = '';
                for (let idx = 0; idx < clasesEnCelda.length; idx++) {
                    const { item, clase } = clasesEnCelda[idx];
                    const conflictClass = isConflict ? 'conflict-cell' : '';
                    contenidoHtml += `<div class="clase-cell ${conflictClass}" style="margin-bottom: ${idx < clasesEnCelda.length-1 ? '6px' : '0'};">
                        📘 ${item.materiaNombre}<br>
                        👨‍🏫 ${item.docenteNombre}<br>
                        <span class="badge-aula">🏫 ${clase.aula}</span>
                        <span class="badge-aula">⏰ ${clase.hora}</span>
                        ${isConflict ? '<span class="conflict-warning">⚠️ CONFLICTO</span>' : ''}
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

// ---------- RENDER DE NAVEGACIÓN (SIN selección directa de docente, ahora se usa botón "Agregar" )
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
        renderDocentesConBoton();  // Nuevo: lista de docentes con botón "➕ Agregar"
    }
    renderBreadcrumbButtons();
}

function renderFacultades() {
    navContainer.innerHTML = `
        <div class="nav-title">🏛️ FACULTADES</div>
        <ul style="list-style:none;">
            ${FACULTADES.map(f => `<li class="facultad-item" data-id="${f.id}" data-path="${f.path}">📁 ${f.nombre}</li>`).join('')}
        </ul>
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
        <div class="nav-title">🎓 CARRERAS · ${facultadInfo?.nombre || currentState.facultad}</div>
        <ul style="list-style:none;">
            ${carreras.map(c => `<li class="carrera-item" data-id="${c.id}">📖 ${c.nombre}</li>`).join('')}
        </ul>
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
        <div class="nav-title">📌 NIVELES · ${currentState.carreraData.nombre}</div>
        <ul style="list-style:none;">
            ${niveles.map(n => `<li class="nav-item" data-id="${n.id}">📘 ${n.nombre}</li>`).join('')}
        </ul>
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
        <div class="nav-title">📚 MATERIAS · ${currentState.nivel.toUpperCase()}</div>
        <ul style="list-style:none;">
            ${materias.map(m => `<li class="nav-item" data-id="${m.id}">📗 ${m.nombre}</li>`).join('')}
        </ul>
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
        <div class="nav-title">👩‍🏫 DOCENTES · ${materiaData.nombre}</div>
        <div style="padding: 8px; background:#eef2fa; border-radius:12px; margin-bottom:12px;">
            ⚡ Haz clic en "➕ Agregar" para añadir este docente a tu horario combinado.
        </div>
        <ul style="list-style:none;">
            ${docentes.map(d => `
                <li style="background:#f8f9fa; margin-bottom:12px; border-radius:12px; padding:12px;">
                    <div><strong>👨‍🏫 ${d.nombre}</strong> ${d.tipo ? `(${d.tipo})` : ''}</div>
                    <div style="font-size:0.75rem; margin-top:6px;">Horario: ${d.horario ? Object.keys(d.horario).join(', ') : 'No definido'}</div>
                    <button class="add-teacher-btn" data-docente-id="${d.id}" style="margin-top:8px; background:#28a745; color:white; border:none; padding:6px 12px; border-radius:20px; cursor:pointer;">➕ Agregar esta materia</button>
                </li>
            `).join('')}
        </ul>
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
                // Opcional: feedback visual
                btn.textContent = '✓ Agregado';
                setTimeout(() => { btn.textContent = '➕ Agregar esta materia'; }, 1000);
            }
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

// Inicializar y cargar selecciones previas
loadSelectionsFromStorage();
render();