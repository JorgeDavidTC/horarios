// app.js - Carga dinámicamente los archivos de cada carrera

let currentState = {
    facultad: null,
    facultadPath: null,
    carrera: null,
    carreraData: null, // Datos cargados del archivo carrera.js
    nivel: null,
    materia: null,
    docente: null
};

// Datos mock de facultades (simula facultades.json)
// En producción, esto se leería de /facultades/facultades.json
const FACULTADES = [
    { id: "tecnologia", nombre: "Facultad de Tecnología", path: "tecnologia" },
    { id: "ciencias_puras", nombre: "Facultad de Ciencias Puras", path: "ciencias_puras" },
];

// Carreras disponibles por facultad (se escanea la carpeta)
// En producción, esto se haría con fetch a una API del servidor
// Como simulación, definimos las carreras existentes:
const CARRERAS_POR_FACULTAD = {
    "tecnologia": [
        { id: "sistemas", nombre: "Licenciatura en Sistemas (NUEVO)" },
        { id: "alimentos", nombre: "Licenciatura en Alimentos" },
        { id: "biologia", nombre: "Licenciatura en Biología" },
        { id: "civil", nombre: "Licenciatura en Civil (NUEVO)" }
    ],
    "ciencias_puras": [
        { id: "matematica", nombre: "Licenciatura en Matemática (LIC)" },
        { id: "fisica", nombre: "Licenciatura en Física (LIC)" }
    ],
};

// Función para cargar dinámicamente el archivo JS de una carrera
async function loadCarreraData(facultadId, carreraId) {
    return new Promise((resolve, reject) => {
        // Ruta del archivo de la carrera
        const scriptPath = `facultades/${facultadId}/${carreraId}/carrera.js`;
        
        // Crear script dinámico
        const script = document.createElement('script');
        script.src = scriptPath;
        script.onload = () => {
            // La variable global se llamará: carreraData_[carreraId]
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

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const HORAS = ["06:45", "07:30", "08:15", "09:00", "09:45", "10:30", "11:15", "12:00", 
               "12:45", "13:30", "14:15", "15:00", "15:45", "16:30", "17:15", "18:00", 
               "18:45", "19:30", "20:15", "21:00"];

async function render() {
    if (!currentState.facultad) {
        renderFacultades();
    } else if (!currentState.carrera) {
        renderCarreras();
    } else if (!currentState.carreraData) {
        // Intentar cargar los datos de la carrera
        try {
            currentState.carreraData = await loadCarreraData(currentState.facultad, currentState.carrera);
            currentState.nivel = null;
            currentState.materia = null;
            currentState.docente = null;
            renderNiveles();
        } catch (error) {
            navContainer.innerHTML = `<div class="empty-message">❌ Error: ${error.message}<br><br>¿Existe el archivo facultades/${currentState.facultad}/${currentState.carrera}/carrera.js?</div>`;
        }
    } else if (!currentState.nivel) {
        renderNiveles();
    } else if (!currentState.materia) {
        renderMaterias();
    } else if (!currentState.docente) {
        renderDocentes();
    } else {
        renderHorario();
    }
    renderBreadcrumbButtons();
}

function renderFacultades() {
    navContainer.innerHTML = `
        <div class="nav-title">🏛️ FACULTADES</div>
        <ul style="list-style:none;">
            ${FACULTADES.map(f => `
                <li class="facultad-item" data-id="${f.id}" data-path="${f.path}">
                    📁 ${f.nombre}
                </li>
            `).join('')}
        </ul>
    `;
    document.querySelectorAll('.facultad-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState = {
                facultad: el.dataset.id,
                facultadPath: el.dataset.path,
                carrera: null,
                carreraData: null,
                nivel: null,
                materia: null,
                docente: null
            };
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
            ${carreras.map(c => `
                <li class="carrera-item" data-id="${c.id}">
                    📖 ${c.nombre}
                </li>
            `).join('')}
        </ul>
    `;
    document.querySelectorAll('.carrera-item').forEach(el => {
        el.addEventListener('click', async () => {
            currentState.carrera = el.dataset.id;
            currentState.carreraData = null;
            currentState.nivel = null;
            currentState.materia = null;
            currentState.docente = null;
            await render();
        });
    });
}

function renderNiveles() {
    const niveles = currentState.carreraData.niveles;
    navContainer.innerHTML = `
        <div class="nav-title">📌 NIVELES · ${currentState.carreraData.nombre}</div>
        <ul style="list-style:none;">
            ${niveles.map(n => `
                <li class="nav-item" data-id="${n.id}">
                    📘 ${n.nombre}
                </li>
            `).join('')}
        </ul>
    `;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState.nivel = el.dataset.id;
            currentState.materia = null;
            currentState.docente = null;
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
            ${materias.map(m => `
                <li class="nav-item" data-id="${m.id}">
                    📗 ${m.nombre}
                </li>
            `).join('')}
        </ul>
    `;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState.materia = el.dataset.id;
            currentState.docente = null;
            render();
        });
    });
}

function renderDocentes() {
    const nivelData = currentState.carreraData.nivelesData[currentState.nivel];
    const materiaData = nivelData.materiasData[currentState.materia];
    const docentes = materiaData.docentes;
    
    navContainer.innerHTML = `
        <div class="nav-title">👩‍🏫 DOCENTES · ${materiaData.nombre}</div>
        <ul style="list-style:none;">
            ${docentes.map(d => `
                <li class="nav-item" data-id="${d.id}">
                    👨‍🏫 ${d.nombre}
                </li>
            `).join('')}
        </ul>
    `;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', () => {
            currentState.docente = el.dataset.id;
            render();
        });
    });
}

function renderHorario() {
    const nivelData = currentState.carreraData.nivelesData[currentState.nivel];
    const materiaData = nivelData.materiasData[currentState.materia];
    const docente = materiaData.docentes.find(d => d.id === currentState.docente);
    
    if (!docente || !docente.horario) {
        horarioWrapper.innerHTML = `<div class="empty-message">No hay horario disponible</div>`;
        scheduleTitle.innerText = `📅 Horario`;
        scheduleSubtitle.innerText = `${docente?.nombre || 'Docente'} · ${materiaData.nombre}`;
        return;
    }
    
    scheduleTitle.innerText = `📅 Horario: ${docente.nombre}`;
    scheduleSubtitle.innerText = `${materiaData.nombre} · ${Object.keys(docente.horario).length} clase(s) semanales`;
    
    let tableHTML = `<table class="horario-table"><thead><tr><th>Hora</th>${DIAS.map(d => `<th>${d}</th>`).join('')}<tr></thead><tbody>`;
    
    for (let hora of HORAS) {
        tableHTML += `<tr><td style="font-weight:600;">${hora}</td>`;
        for (let dia of DIAS) {
            let contenido = "";
            if (docente.horario[dia] && docente.horario[dia].hora.split('-')[0] === hora) {
                const clase = docente.horario[dia];
                contenido = `<div class="clase-cell">
                    📘 ${materiaData.nombre}
                    <span class="badge-aula">🏫 Aula ${clase.aula}</span>
                    <span class="badge-aula">⏰ ${clase.hora}</span>
                </div>`;
            }
            tableHTML += `<td>${contenido}</td>`;
        }
        tableHTML += `</tr>`;
    }
    tableHTML += `</tbody></table>`;
    horarioWrapper.innerHTML = tableHTML;
}

function renderBreadcrumbButtons() {
    let buttons = `<button class="back-button" id="reset-all">🏠 Inicio</button>`;
    if (currentState.facultad) {
        buttons += `<button class="back-button" id="back-to-carreras">← Volver a carreras</button>`;
    }
    if (currentState.carrera) {
        buttons += `<button class="back-button" id="back-to-niveles">← Volver a niveles</button>`;
    }
    if (currentState.nivel) {
        buttons += `<button class="back-button" id="back-to-materias">← Volver a materias</button>`;
    }
    if (currentState.materia) {
        buttons += `<button class="back-button" id="back-to-docentes">← Volver a docentes</button>`;
    }
    breadcrumbDiv.innerHTML = buttons;
    
    document.getElementById('reset-all')?.addEventListener('click', () => {
        currentState = { facultad: null, facultadPath: null, carrera: null, carreraData: null, nivel: null, materia: null, docente: null };
        render();
    });
    document.getElementById('back-to-carreras')?.addEventListener('click', () => {
        currentState.carrera = null; currentState.carreraData = null; currentState.nivel = null; currentState.materia = null; currentState.docente = null;
        render();
    });
    document.getElementById('back-to-niveles')?.addEventListener('click', () => {
        currentState.nivel = null; currentState.materia = null; currentState.docente = null;
        render();
    });
    document.getElementById('back-to-materias')?.addEventListener('click', () => {
        currentState.materia = null; currentState.docente = null;
        render();
    });
    document.getElementById('back-to-docentes')?.addEventListener('click', () => {
        currentState.docente = null;
        render();
    });
}

render();