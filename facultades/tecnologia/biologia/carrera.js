// carrera.js - Licenciatura en Biología

window.carreraData_biologia = {
    nombre: "Licenciatura en Biología",
    codigo: "BIO-2026",
    
    niveles: [
        { id: "nivel_A", nombre: "Nivel A" },
        { id: "nivel_B", nombre: "Nivel B" }
    ],
    
    nivelesData: {
        "nivel_A": {
            materias: [
                { id: "biologia_celular", nombre: "BIOLOGÍA CELULAR" },
                { id: "quimica_general", nombre: "QUÍMICA GENERAL" }
            ],
            materiasData: {
                "biologia_celular": {
                    nombre: "BIOLOGÍA CELULAR",
                    docentes: [
                        {
                            id: "perez",
                            nombre: "PEREZ GONZALES MARIA",
                            horario: {
                                "Lunes": { hora: "09:45-11:15", aula: "BioLab-1" },
                                "Miércoles": { hora: "09:45-11:15", aula: "BioLab-1" }
                            }
                        }
                    ]
                },
                "quimica_general": {
                    nombre: "QUÍMICA GENERAL",
                    docentes: [
                        {
                            id: "flores",
                            nombre: "FLORES FLORES FREDDY",
                            horario: {
                                "Martes": { hora: "14:15-15:45", aula: "693A" },
                                "Jueves": { hora: "14:15-15:45", aula: "693A" }
                            }
                        }
                    ]
                }
            }
        }
    }
};