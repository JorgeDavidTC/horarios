// carrera.js - Licenciatura en Sistemas
// Todos los datos de la carrera están aquí

window.carreraData_sistemas = {
    nombre: "Licenciatura en Sistemas (NUEVO)",
    codigo: "SIS-2026",
    
    // Niveles disponibles
    niveles: [
        { id: "nivel_A", nombre: "Nivel A" },
        { id: "nivel_B", nombre: "Nivel B" },
        { id: "nivel_C", nombre: "Nivel C" }
    ],
    
    // Datos completos de cada nivel
    nivelesData: {
        "nivel_A": {
            materias: [
                { id: "algebra_lineal", nombre: "ÁLGEBRA LINEAL Y TEORIA MATRICIAL" },
                { id: "calculo_i", nombre: "CÁLCULO I" },
                { id: "fisica_basica_i", nombre: "FÍSICA BÁSICA I" },
                { id: "quimica_general", nombre: "QUÍMICA GENERAL" }
            ],
            materiasData: {
                "algebra_lineal": {
                    nombre: "ÁLGEBRA LINEAL Y TEORIA MATRICIAL",
                    docentes: [
                        {
                            id: "omonte",
                            nombre: "OMONTE OJALVO JOSE ROBERTO",
                            horario: {
                                "Martes": { hora: "11:15-12:45", aula: "691C" },
                                "Miércoles": { hora: "09:45-11:15", aula: "691C" }
                            }
                        },
                        {
                            id: "soto",
                            nombre: "SOTO MOREIRA JUAN CARLOS",
                            horario: {
                                "Lunes": { hora: "08:15-09:45", aula: "692B" },
                                "Miércoles": { hora: "08:15-09:45", aula: "692B" }
                            }
                        },
                        {
                            id: "salinas",
                            nombre: "SALINAS PERICON WALTER OSCAR",
                            horario: {
                                "Viernes": { hora: "06:45-08:15", aula: "692C" }
                            }
                        }
                    ]
                },
                "calculo_i": {
                    nombre: "CÁLCULO I",
                    docentes: [
                        {
                            id: "rodriguez",
                            nombre: "RODRIGUEZ SEJAS JUAN ANTONIO",
                            horario: {
                                "Lunes": { hora: "12:45-14:15", aula: "692E" },
                                "Miércoles": { hora: "12:45-14:15", aula: "692E" }
                            }
                        },
                        {
                            id: "leon",
                            nombre: "LEON ROMERO GUALBERTO",
                            horario: {
                                "Martes": { hora: "15:45-17:15", aula: "692F" },
                                "Jueves": { hora: "11:15-12:45", aula: "692F" }
                            }
                        }
                    ]
                },
                "fisica_basica_i": {
                    nombre: "FÍSICA BÁSICA I",
                    docentes: [
                        {
                            id: "omonte_gil",
                            nombre: "OMONTE OJALVO JOSE GIL",
                            horario: {
                                "Lunes": { hora: "18:45-20:15", aula: "612" },
                                "Miércoles": { hora: "06:45-08:15", aula: "617C" }
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
                                "Lunes": { hora: "14:15-15:45", aula: "693A" },
                                "Jueves": { hora: "17:15-18:45", aula: "693A" }
                            }
                        }
                    ]
                }
            }
        },
        
        "nivel_B": {
            materias: [
                { id: "calculo_ii", nombre: "CÁLCULO II" },
                { id: "matematica_discreta", nombre: "MATEMÁTICA DISCRETA" }
            ],
            materiasData: {
                "calculo_ii": {
                    nombre: "CÁLCULO II",
                    docentes: [
                        {
                            id: "medina",
                            nombre: "MEDINA GAMBOA JULIO",
                            horario: {
                                "Jueves": { hora: "11:15-12:45", aula: "691A" },
                                "Viernes": { hora: "12:45-14:15", aula: "691A" }
                            }
                        }
                    ]
                },
                "matematica_discreta": {
                    nombre: "MATEMÁTICA DISCRETA",
                    docentes: [
                        {
                            id: "fernandez",
                            nombre: "FERNANDEZ RAMOS DAVID",
                            horario: {
                                "Miércoles": { hora: "17:15-18:45", aula: "691A" },
                                "Jueves": { hora: "17:15-18:45", aula: "691A" }
                            }
                        }
                    ]
                }
            }
        }
    }
};