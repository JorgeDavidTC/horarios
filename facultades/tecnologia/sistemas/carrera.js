// carrera.js - CORREGIDO
// Todos los datos de la carrera están aquí (Completado con Horario Gestion 1/2026)
// Días corregidos: "Miércoles" (con acento) y "Sábado" (con acento)

window.carreraData_sistemas = {
    nombre: "Licenciatura en Ingenieria de Sistemas",
    codigo: "SIS-2026",
    
    niveles: [
        { id: "nivel_A", nombre: "Nivel A" },
        { id: "nivel_B", nombre: "Nivel B" },
        { id: "nivel_C", nombre: "Nivel C" },
        { id: "nivel_D", nombre: "Nivel D" },
        { id: "nivel_E", nombre: "Nivel E" },
        { id: "nivel_F", nombre: "Nivel F" },
        { id: "nivel_G", nombre: "Nivel G" },
        { id: "nivel_H", nombre: "Nivel H" },
        { id: "nivel_I", nombre: "Nivel I" },
        { id: "nivel_J", nombre: "Nivel J" }
    ],
    
    nivelesData: {
        "nivel_A": {
            materias: [
                { id: "algebra_i", nombre: "ALGEBRA I" },
                { id: "calculo_i", nombre: "CALCULO I" },
                { id: "ingles_i", nombre: "INGLES I" },
                { id: "intro_programacion", nombre: "INTRODUCCION A LA PROGRAMACION" },
                { id: "metodologia_investigacion", nombre: "METODOLOGIA INVESTIGACION Y TEC COMUNICACION" }
            ],
            materiasData: {
                "algebra_i": {
                    nombre: "ALGEBRA I",
                    docentes: [
                        { id: "rodriguez_10", nombre: "RODRIGUEZ SEJAS JUAN ANTONIO", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "693B" }, "Miércoles": { hora: "08:15-09:45", aula: "692E" }, "Viernes": { hora: "09:45-11:15", aula: "692F" } } },
                        { id: "leon_14", nombre: "LEON ROMERO GUALBERTO", tipo: "Teórico", horario: { "Martes": { hora: "15:45-17:15", aula: "692E" }, "Jueves": { hora: "11:15-12:45", aula: "692E" } } },
                        { id: "lovera_14_tp", nombre: "LOVERA MAMANI MARIA BETHY", tipo: "TP", horario: { "Sábado": { hora: "08:15-09:45", aula: "691E" } } },
                        { id: "taborga_5", nombre: "TABORGA ACHA FIDEL", tipo: "Teórico", horario: { "Miércoles": { hora: "14:15-15:45", aula: "617" }, "Viernes": { hora: "08:15-09:45", aula: "623" } } },
                        { id: "ticlla_5_tp", nombre: "TICLLA MAMANI IVAN", tipo: "TP", horario: { "Sábado": { hora: "11:15-12:45", aula: "692B" } } },
                        { id: "patino_6", nombre: "PATINO TITO RONALD EDGAR", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "607" }, "Martes": { hora: "20:15-21:45", aula: "607" }, "Miércoles": { hora: "20:15-21:45", aula: "623" } } },
                        { id: "leon_8", nombre: "LEON ROMERO GUALBERTO", tipo: "Teórico", horario: { "Miércoles": { hora: "11:15-12:45", aula: "692F" }, "Viernes": { hora: "06:45-08:15", aula: "692F" } } },
                        { id: "aranibar_8_tp", nombre: "ARANIBAR ZAMBRANA AMMY SHALEM", tipo: "TP", horario: { "Jueves": { hora: "06:45-08:15", aula: "625D" } } }
                    ]
                },
                "calculo_i": {
                    nombre: "CALCULO I",
                    docentes: [
                        { id: "rojas_11", nombre: "ROJAS ZURITA RAMIRO", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "622" }, "Martes": { hora: "08:15-09:45", aula: "692B" }, "Jueves": { hora: "08:15-09:45", aula: "692E" } } },
                        { id: "delgadillo_12", nombre: "DELGADILLO COSSIO DAVID ALFREDO", tipo: "Teórico", horario: { "Lunes": { hora: "18:45-20:15", aula: "690B" }, "Martes": { hora: "18:45-20:15", aula: "625D" }, "Miércoles": { hora: "18:45-20:15", aula: "691D" } } },
                        { id: "omonte_17", nombre: "OMONTE OJALVO JOSE ROBERTO", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "642" }, "Miércoles": { hora: "09:45-11:15", aula: "691C" } } },
                        { id: "bravo_17_tp", nombre: "BRAVO FLORES JAIME ANDREE", tipo: "TP", horario: { "Viernes": { hora: "09:45-11:15", aula: "692H" } } },
                        { id: "rodriguez_7", nombre: "RODRIGUEZ SEJAS JUAN ANTONIO", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "612" }, "Miércoles": { hora: "12:45-14:15", aula: "661" }, "Jueves": { hora: "09:45-11:15", aula: "692B" } } }
                    ]
                },
                "ingles_i": {
                    nombre: "INGLES I",
                    docentes: [
                        { id: "cespedes_1", nombre: "CESPEDES GUIZADA MARIA BENITA", tipo: "Teórico", horario: { "Martes": { hora: "08:15-09:45", aula: "693B" }, "Viernes": { hora: "08:15-09:45", aula: "691D" } } },
                        { id: "cespedes_2", nombre: "CESPEDES GUIZADA MARIA BENITA", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "692F" }, "Viernes": { hora: "09:45-11:15", aula: "693A" } } },
                        { id: "peeters_3", nombre: "PEETERS ILONAA MAGDA LENA", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "691B" }, "Miércoles": { hora: "06:45-08:15", aula: "692H" } } },
                        { id: "grilo_4", nombre: "GRILO SALVATIERRA MARIA ESTELA", tipo: "Teórico", horario: { "Martes": { hora: "15:45-17:15", aula: "692G" }, "Jueves": { hora: "14:15-15:45", aula: "625D" } } },
                        { id: "cespedes_5", nombre: "CESPEDES GUIZADA MARIA BENITA", tipo: "Teórico", horario: { "Jueves": { hora: "09:45-11:15", aula: "692F" }, "Viernes": { hora: "11:15-12:45", aula: "691B" } } }
                    ]
                },
                "intro_programacion": {
                    nombre: "INTRODUCCION A LA PROGRAMACION",
                    docentes: [
                        { id: "salazar_1", nombre: "SALAZAR SERRUDO CARLA", tipo: "Teórico", horario: { "Jueves": { hora: "11:15-12:45", aula: "691A" }, "Viernes": { hora: "11:15-12:45", aula: "691E" } } },
                        { id: "antezana_1_tp", nombre: "ANTEZANA SERRANO DILAN ALEJANDRO", tipo: "TP", horario: { "Viernes": { hora: "17:15-18:45", aula: "623" } } },
                        { id: "costas_10", nombre: "COSTAS JAUREGUI VLADIMIR ABEL", tipo: "Teórico", horario: { "Miércoles": { hora: "14:15-15:45", aula: "624" }, "Jueves": { hora: "09:45-11:15", aula: "691A" } } },
                        { id: "ortiz_10_tp", nombre: "ORTIZ FLORES ANDY DANIEL", tipo: "TP", horario: { "Jueves": { hora: "14:15-15:45", aula: "691B" } } },
                        { id: "blanco_2", nombre: "BLANCO COCA LETICIA", tipo: "Teórico", horario: { "Martes": { hora: "17:15-18:45", aula: "617" }, "Jueves": { hora: "15:45-17:15", aula: "624" } } },
                        { id: "zeballos_2_tp", nombre: "ZEBALLOS ALDUNATE LEONEL", tipo: "TP", horario: { "Miércoles": { hora: "17:15-18:45", aula: "691B" } } }
                    ]
                },
                "metodologia_investigacion": {
                    nombre: "METODOLOGIA INVESTIGACION Y TEC COMUNICACION",
                    docentes: [
                        { id: "romero_1", nombre: "ROMERO RODRIGUEZ PATRICIA", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "691C" }, "Miércoles": { hora: "09:45-11:15", aula: "691B" } } },
                        { id: "flores_2", nombre: "FLORES VILLARROEL CORINA", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "691D" }, "Miércoles": { hora: "09:45-11:15", aula: "617B" } } },
                        { id: "laime_3", nombre: "LAIME ZAPATA VALENTIN", tipo: "Teórico", horario: { "Jueves": { hora: "18:45-20:15", aula: "691F" }, "Viernes": { hora: "18:45-20:15", aula: "623" } } },
                        { id: "villarroel_4", nombre: "VILLARROEL NOVILLO JIMMY", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "642" }, "Miércoles": { hora: "14:15-15:45", aula: "693C" } } }
                    ]
                }
            }
        },
        
        "nivel_B": {
            materias: [
                { id: "algebra_ii", nombre: "ALGEBRA II" },
                { id: "arquitectura_i", nombre: "ARQUITECTURA DE COMPUTADORAS I" },
                { id: "calculo_ii", nombre: "CALCULO II" },
                { id: "elem_programacion", nombre: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS" },
                { id: "matematica_discreta", nombre: "MATEMATICA DISCRETA" }
            ],
            materiasData: {
                "algebra_ii": {
                    nombre: "ALGEBRA II",
                    docentes: [
                        { id: "taylor_5", nombre: "TAYLOR TERRAZAS DARLONG HOWARD", tipo: "Teórico", horario: { "Jueves": { hora: "08:15-09:45", aula: "622" }, "Viernes": { hora: "08:15-09:45", aula: "660" } } },
                        { id: "claire_5_tp", nombre: "CLAURE VARGAS ANDRES ALEJANDRO", tipo: "TP", horario: { "Viernes": { hora: "09:45-11:15", aula: "651" } } },
                        { id: "medina_6", nombre: "MEDINA GAMBOA JULIO", tipo: "Teórico", horario: { "Jueves": { hora: "11:15-12:45", aula: "691B" }, "Viernes": { hora: "12:45-14:15", aula: "691A" } } },
                        { id: "cruz_6_tp", nombre: "CRUZ ACHAYA MARIA CLAUDIA", tipo: "TP", horario: { "Sábado": { hora: "08:15-09:45", aula: "692A" } } },
                        { id: "omonte_8", nombre: "OMONTE OJALVO JOSE ROBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "624" }, "Jueves": { hora: "14:15-15:45", aula: "692B" } } },
                        { id: "cruz_8_tp", nombre: "CRUZ ACHAYA MARIA CLAUDIA", tipo: "TP", horario: { "Martes": { hora: "14:15-15:45", aula: "692D" } } }
                    ]
                },
                "arquitectura_i": {
                    nombre: "ARQUITECTURA DE COMPUTADORAS I",
                    docentes: [
                        { id: "acha_1", nombre: "ACHA PEREZ SAMUEL", tipo: "Teórico", horario: { "Lunes": { hora: "15:45-17:15", aula: "692C" }, "Martes": { hora: "17:15-18:45", aula: "691D" } } },
                        { id: "blanco_2", nombre: "BLANCO COCA LETICIA", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "691B" }, "Jueves": { hora: "14:15-15:45", aula: "624" } } },
                        { id: "agreda_3", nombre: "AGREDA CORRALES LUIS ROBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "692A" }, "Miércoles": { hora: "12:45-14:15", aula: "617" } } }
                    ]
                },
                "calculo_ii": {
                    nombre: "CALCULO II",
                    docentes: [
                        { id: "terrazas_6", nombre: "TERRAZAS LOBO JUAN", tipo: "Teórico", horario: { "Miércoles": { hora: "09:45-11:15", aula: "691D" }, "Jueves": { hora: "11:15-12:45", aula: "693D" } } },
                        { id: "sosa_6_tp", nombre: "SOSA MARZE DAVID SAUL", tipo: "TP", horario: { "Miércoles": { hora: "14:15-15:45", aula: "625C" } } },
                        { id: "bustillos_6a", nombre: "BUSTILLOS VARGAS ALEX ISRRAEL", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "693D" }, "Martes": { hora: "09:45-11:15", aula: "692D" }, "Jueves": { hora: "08:15-09:45", aula: "691B" } } },
                        { id: "catari_7", nombre: "CATARI RIOS RAUL", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "622" }, "Martes": { hora: "09:45-11:15", aula: "607" }, "Miércoles": { hora: "09:45-11:15", aula: "693B" } } },
                        { id: "vallejo_7a", nombre: "VALLEJO CAMACHO MARCO ANTONIO", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "693D" }, "Miércoles": { hora: "11:15-12:45", aula: "692C" } } },
                        { id: "mamani_7a_tp", nombre: "MAMANI QUELCA SHIRLEY", tipo: "TP", horario: { "Viernes": { hora: "11:15-12:45", aula: "693A" } } }
                    ]
                },
                "elem_programacion": {
                    nombre: "ELEM. DE PROGRAMACION Y ESTRUC. DE DATOS",
                    docentes: [
                        { id: "torrico_1", nombre: "TORRICO BASCOPE ROSEMARY", tipo: "Teórico", horario: { "Martes": { hora: "08:15-09:45", aula: "617" }, "Viernes": { hora: "08:15-09:45", aula: "690C" } } },
                        { id: "cuenca_1_tp", nombre: "CUENCA VARGAS FERNANDO", tipo: "TP", horario: { "Miércoles": { hora: "11:15-12:45", aula: "691F" } } },
                        { id: "blanco_2", nombre: "BLANCO COCA LETICIA", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "623" }, "Jueves": { hora: "12:45-14:15", aula: "624" } } },
                        { id: "ortiz_2_tp", nombre: "ORTIZ FLORES ANDY DANIEL", tipo: "TP", horario: { "Miércoles": { hora: "15:45-17:15", aula: "623" } } },
                        { id: "blanco_3", nombre: "BLANCO COCA LETICIA", tipo: "Teórico", horario: { "Martes": { hora: "18:45-20:15", aula: "622" }, "Miércoles": { hora: "06:45-08:15", aula: "691C" } } },
                        { id: "sanabria_3_tp", nombre: "SANABRIA UGARTE ANAHI", tipo: "TP", horario: { "Jueves": { hora: "12:45-14:15", aula: "690C" } } }
                    ]
                },
                "matematica_discreta": {
                    nombre: "MATEMATICA DISCRETA",
                    docentes: [
                        { id: "fernandez_1", nombre: "FERNANDEZ RAMOS DAVID", tipo: "Teórico", horario: { "Miércoles": { hora: "17:15-18:45", aula: "623" }, "Jueves": { hora: "17:15-18:45", aula: "622" }, "Viernes": { hora: "17:15-18:45", aula: "691A" } } },
                        { id: "delgadillo_2", nombre: "DELGADILLO COSSIO DAVID ALFREDO", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "691D" }, "Martes": { hora: "11:15-12:45", aula: "692E" }, "Miércoles": { hora: "20:15-21:45", aula: "624" } } }
                    ]
                }
            }
        },

        "nivel_C": {
            materias: [
                { id: "base_datos_i", nombre: "BASE DE DATOS I" },
                { id: "calculo_numerico", nombre: "CALCULO NUMERICO" },
                { id: "circuitos_electronicos", nombre: "CIRCUITOS ELECTRONICOS" },
                { id: "ecuaciones_diferenciales", nombre: "ECUACIONES DIFERENCIALES" },
                { id: "estadistica_i", nombre: "ESTADISTICA I" },
                { id: "metodos_tecnicas", nombre: "METODOS TECNICAS Y TALLER DE PROGRAMACION" }
            ],
            materiasData: {
                "base_datos_i": {
                    nombre: "BASE DE DATOS I",
                    docentes: [
                        { id: "aparicio_1", nombre: "APARICIO YUJA TATIANA", tipo: "Teórico", horario: { "Martes": { hora: "12:45-14:15", aula: "691B" }, "Miércoles": { hora: "12:45-14:15", aula: "691B" }, "Jueves": { hora: "12:45-14:15", aula: "693D" } } }
                    ]
                },
                "calculo_numerico": {
                    nombre: "CALCULO NUMERICO",
                    docentes: [
                        { id: "juchani_2", nombre: "JUCHANI BAZUALDO DEMETRIO", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "622" }, "Martes": { hora: "11:15-12:45", aula: "693A" }, "Jueves": { hora: "06:45-08:15", aula: "693D" } } },
                        { id: "zabalaga_3", nombre: "ZABALAGA MONTANO OSCAR A.", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "617" }, "Martes": { hora: "15:45-17:15", aula: "692H" }, "Miércoles": { hora: "15:45-17:15", aula: "690D" } } }
                    ]
                },
                "circuitos_electronicos": {
                    nombre: "CIRCUITOS ELECTRONICOS",
                    docentes: [
                        { id: "zambrana_2", nombre: "ZAMBRANA BURGOS JHOMIL EFRAIN", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "691A" }, "Sábado": { hora: "11:15-12:45", aula: "692A" } } }
                    ]
                },
                "ecuaciones_diferenciales": {
                    nombre: "ECUACIONES DIFERENCIALES",
                    docentes: [
                        { id: "catari_3a", nombre: "CATARI RIOS RAUL", tipo: "Teórico", horario: { "Miércoles": { hora: "12:45-14:15", aula: "693C" }, "Viernes": { hora: "09:45-11:15", aula: "623" }, "Sábado": { hora: "09:45-11:15", aula: "691A" } } },
                        { id: "taylor_4", nombre: "TAYLOR TERRAZAS DARLONG HOWARD", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "651" }, "Martes": { hora: "08:15-09:45", aula: "692C" } } },
                        { id: "colque_4_tp", nombre: "COLQUE SANGUEZA ARACELI HARUKA", tipo: "TP", horario: { "Viernes": { hora: "18:45-20:15", aula: "691A" } } }
                    ]
                },
                "estadistica_i": {
                    nombre: "ESTADISTICA I",
                    docentes: [
                        { id: "revollo_3", nombre: "REVOLLO TERAN LUZ MAYA", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "692G" }, "Jueves": { hora: "14:15-15:45", aula: "690C" } } },
                        { id: "pacheco_3_tp", nombre: "PACHECO YPURANI CLAUDIA", tipo: "TP", horario: { "Martes": { hora: "11:15-12:45", aula: "617B" } } },
                        { id: "soruco_4", nombre: "SORUCO MAITA JOSE ANTONIO", tipo: "Teórico", horario: { "Martes": { hora: "15:45-17:15", aula: "AULVIR" }, "Viernes": { hora: "09:45-11:15", aula: "AULVIR" } } },
                        { id: "omonte_5", nombre: "OMONTE OJALVO JOSE GIL", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "624" }, "Martes": { hora: "17:15-18:45", aula: "692C" }, "Jueves": { hora: "08:15-09:45", aula: "690B" } } }
                    ]
                },
                "metodos_tecnicas": {
                    nombre: "METODOS TECNICAS Y TALLER DE PROGRAMACION",
                    docentes: [
                        { id: "flores_1", nombre: "FLORES VILLARROEL CORINA", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "652" }, "Martes": { hora: "08:15-09:45", aula: "625D" }, "Miércoles": { hora: "08:15-09:45", aula: "652" } } },
                        { id: "manzur_2", nombre: "MANZUR SORIA CARLOS B.", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "625C" }, "Viernes": { hora: "06:45-08:15", aula: "651" }, "Sábado": { hora: "06:45-08:15", aula: "607" } } },
                        { id: "laime_3", nombre: "LAIME ZAPATA VALENTIN", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "INFLAB" }, "Jueves": { hora: "06:45-08:15", aula: "INFLAB" }, "Viernes": { hora: "06:45-08:15", aula: "INFLAB" } } }
                    ]
                }
            }
        },

        // Nivel D
        "nivel_D": {
            materias: [
                { id: "base_datos_ii", nombre: "BASE DE DATOS II" },
                { id: "contabilidad_basica", nombre: "CONTABILIDAD BASICA" },
                { id: "estadistica_ii", nombre: "ESTADISTICA II" },
                { id: "investigacion_operativa_i", nombre: "INVESTIGACION OPERATIVA I" },
                { id: "sistemas_informacion_i", nombre: "SISTEMAS DE INFORMACION I" },
                { id: "taller_sistemas_operativos", nombre: "TALLER DE SISTEMAS OPERATIVOS" }
            ],
            materiasData: {
                "base_datos_ii": {
                    nombre: "BASE DE DATOS II",
                    docentes: [
                        { id: "aparicio_1", nombre: "APARICIO YUJA TATIANA", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "617B" }, "Martes": { hora: "06:45-08:15", aula: "691F" }, "Miércoles": { hora: "08:15-09:45", aula: "617B" } } },
                        { id: "aparicio_2", nombre: "APARICIO YUJA TATIANA", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "692B" }, "Martes": { hora: "08:15-09:45", aula: "INFLAB" }, "Miércoles": { hora: "09:45-11:15", aula: "612" } } }
                    ]
                },
                "contabilidad_basica": {
                    nombre: "CONTABILIDAD BASICA",
                    docentes: [
                        { id: "mejia_2", nombre: "MEJIA URQUIETA VICTOR RAMIRO", tipo: "Teórico", horario: { "Jueves": { hora: "09:45-11:15", aula: "625C" }, "Viernes": { hora: "09:45-11:15", aula: "622" } } },
                        { id: "aranibar_3", nombre: "ARANIBAR LA FUENTE LIGIA JACQUELINE", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "692H" }, "Miércoles": { hora: "18:45-20:15", aula: "692A" }, "Viernes": { hora: "11:15-12:45", aula: "692C" } } }
                    ]
                },
                "estadistica_ii": {
                    nombre: "ESTADISTICA II",
                    docentes: [
                        { id: "soruco_2", nombre: "SORUCO MAITA JOSE ANTONIO", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "AULVIR" }, "Jueves": { hora: "15:45-17:15", aula: "AULVIR" } } },
                        { id: "velez_2_tp", nombre: "VELEZ BILBAO DAVID ENRIQUE", tipo: "TP", horario: { "Jueves": { hora: "11:15-12:45", aula: "692A" } } },
                        { id: "omonte_3", nombre: "OMONTE OJALVO JOSE ROBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "692B" }, "Viernes": { hora: "14:15-15:45", aula: "691E" } } },
                        { id: "mamani_3_tp", nombre: "MAMANI QUELCA SHIRLEY", tipo: "TP", horario: { "Jueves": { hora: "18:45-20:15", aula: "660" } } }
                    ]
                },
                "investigacion_operativa_i": {
                    nombre: "INVESTIGACION OPERATIVA I",
                    docentes: [
                        { id: "pericon_1", nombre: "PERICON BALDERRAMA ALFREDO", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "682L8IN" }, "Martes": { hora: "06:45-08:15", aula: "682L8IN" }, "Miércoles": { hora: "08:15-09:45", aula: "682L7IN" } } },
                        { id: "quiroz_3", nombre: "QUIROZ CHAVEZ ABDON", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "AULVIR" }, "Miércoles": { hora: "09:45-11:15", aula: "AULVIR" }, "Jueves": { hora: "12:45-14:15", aula: "AULVIR" } } },
                        { id: "revollo_4", nombre: "REVOLLO TERAN LUZ MAYA", tipo: "Teórico", horario: { "Martes": { hora: "14:15-15:45", aula: "682L6IN" }, "Miércoles": { hora: "09:45-11:15", aula: "617C" }, "Jueves": { hora: "09:45-11:15", aula: "625D" } } }
                    ]
                },
                "sistemas_informacion_i": {
                    nombre: "SISTEMAS DE INFORMACION I",
                    docentes: [
                        { id: "salazar_1", nombre: "SALAZAR SERRUDO CARLA", tipo: "Teórico", horario: { "Miércoles": { hora: "15:45-17:15", aula: "692B" }, "Jueves": { hora: "09:45-11:15", aula: "607" }, "Viernes": { hora: "09:45-11:15", aula: "691E" } } },
                        { id: "salazar_2", nombre: "SALAZAR SERRUDO CARLA", tipo: "Teórico", horario: { "Lunes": { hora: "17:15-18:45", aula: "691B" }, "Martes": { hora: "17:15-18:45", aula: "693D" }, "Miércoles": { hora: "18:45-20:15", aula: "617" } } }
                    ]
                },
                "taller_sistemas_operativos": {
                    nombre: "TALLER DE SISTEMAS OPERATIVOS",
                    docentes: [
                        { id: "orellana_1", nombre: "ORELLANA ARAOZ JORGE WALTER", tipo: "Teórico", horario: { "Miércoles": { hora: "08:15-09:45", aula: "INFLAB" }, "Jueves": { hora: "08:15-09:45", aula: "691F" }, "Viernes": { hora: "14:15-15:45", aula: "691C" } } },
                        { id: "orellana_2", nombre: "ORELLANA ARAOZ JORGE WALTER", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "623" }, "Miércoles": { hora: "14:15-15:45", aula: "691A" }, "Viernes": { hora: "08:15-09:45", aula: "624" } } },
                        { id: "cussi_3", nombre: "CUSSI NICOLAS GROVER HUMBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "18:45-20:15", aula: "INFLAB" }, "Martes": { hora: "18:45-20:15", aula: "691E" }, "Jueves": { hora: "20:15-21:45", aula: "691A" } } }
                    ]
                }
            }
        },

        // Nivel E
        "nivel_E": {
            materias: [
                { id: "aplicacion_sistemas_operativos", nombre: "APLICACION DE SISTEMAS OPERATIVOS" },
                { id: "ingles_ii", nombre: "INGLES II" },
                { id: "investigacion_operativa_ii", nombre: "INVESTIGACION OPERATIVA II" },
                { id: "mercadotecnia", nombre: "MERCADOTECNIA" },
                { id: "sistemas_informacion_ii", nombre: "SISTEMAS DE INFORMACION II" },
                { id: "sistemas_i", nombre: "SISTEMAS I" },
                { id: "taller_base_datos", nombre: "TALLER DE BASE DE DATOS" }
            ],
            materiasData: {
                "aplicacion_sistemas_operativos": {
                    nombre: "APLICACION DE SISTEMAS OPERATIVOS",
                    docentes: [
                        { id: "cussi_1", nombre: "CUSSI NICOLAS GROVER HUMBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "691E" }, "Viernes": { hora: "18:45-20:15", aula: "693D" } } },
                        { id: "cussi_2", nombre: "CUSSI NICOLAS GROVER HUMBERTO", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "693B" }, "Jueves": { hora: "18:45-20:15", aula: "690B" } } },
                        { id: "ayoroa_3", nombre: "AYOROA CARDOZO JOSE RICHARD", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "693A" }, "Miércoles": { hora: "09:45-11:15", aula: "INFLAB" } } }
                    ]
                },
                "ingles_ii": {
                    nombre: "INGLES II",
                    docentes: [
                        { id: "peeters_1", nombre: "PEETERS ILONAA MAGDA LENA", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "691B" }, "Jueves": { hora: "06:45-08:15", aula: "661" } } },
                        { id: "peeters_2", nombre: "PEETERS ILONAA MAGDA LENA", tipo: "Teórico", horario: { "Jueves": { hora: "09:45-11:15", aula: "691B" }, "Viernes": { hora: "09:45-11:15", aula: "691C" } } },
                        { id: "peeters_3", nombre: "PEETERS ILONAA MAGDA LENA", tipo: "Teórico", horario: { "Martes": { hora: "06:45-08:15", aula: "692G" }, "Viernes": { hora: "06:45-08:15", aula: "692H" } } }
                    ]
                },
                "investigacion_operativa_ii": {
                    nombre: "INVESTIGACION OPERATIVA II",
                    docentes: [
                        { id: "manchego_2", nombre: "MANCHEGO CASTELLON ROBERTO JUAN", tipo: "Teórico", horario: { "Miércoles": { hora: "17:15-18:45", aula: "692C" }, "Jueves": { hora: "17:15-18:45", aula: "607" }, "Sábado": { hora: "08:15-09:45", aula: "623" } } }
                    ]
                },
                "mercadotecnia": {
                    nombre: "MERCADOTECNIA",
                    docentes: [
                        { id: "gutierrez_2", nombre: "GUTIERREZ ANDRADE OSVALDO WALTER", tipo: "Teórico", horario: { "Martes": { hora: "15:45-17:15", aula: "617C" }, "Jueves": { hora: "15:45-17:15", aula: "693D" } } },
                        { id: "sarmiento_3", nombre: "SARMIENTO FRANCO ARIEL ANTONIO", tipo: "Teórico", horario: { "Martes": { hora: "18:45-20:15", aula: "623" }, "Miércoles": { hora: "18:45-20:15", aula: "690D" } } }
                    ]
                },
                "sistemas_informacion_ii": {
                    nombre: "SISTEMAS DE INFORMACION II",
                    docentes: [
                        { id: "flores_1", nombre: "FLORES SOLIZ JUAN MARCELO", tipo: "Teórico", horario: { "Martes": { hora: "06:45-08:15", aula: "690E" }, "Miércoles": { hora: "06:45-08:15", aula: "690D" }, "Viernes": { hora: "06:45-08:15", aula: "691C" } } },
                        { id: "salazar_1a", nombre: "SALAZAR SERRUDO CARLA", tipo: "Teórico", horario: { "Lunes": { hora: "15:45-17:15", aula: "693A" }, "Martes": { hora: "15:45-17:15", aula: "692D" }, "Jueves": { hora: "15:45-17:15", aula: "692F" } } },
                        { id: "jaldin_2", nombre: "JALDIN ROSALES K. ROLANDO", tipo: "Teórico", horario: { "Miércoles": { hora: "08:15-09:45", aula: "690E" }, "Jueves": { hora: "09:45-11:15", aula: "690E" }, "Viernes": { hora: "09:45-11:15", aula: "690E" } } }
                    ]
                },
                "sistemas_i": {
                    nombre: "SISTEMAS I",
                    docentes: [
                        { id: "fiorilo_2", nombre: "FIORILO LOZADA AMERICO", tipo: "Teórico", horario: { "Lunes": { hora: "18:45-20:15", aula: "693A" }, "Viernes": { hora: "18:45-20:15", aula: "692C" } } }
                    ]
                },
                "taller_base_datos": {
                    nombre: "TALLER DE BASE DE DATOS",
                    docentes: [
                        { id: "flores_3", nombre: "FLORES SOLIZ JUAN MARCELO", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "690B" }, "Jueves": { hora: "06:45-08:15", aula: "690B" } } },
                        { id: "calancha_4", nombre: "CALANCHA NAVIA BORIS", tipo: "Teórico", horario: { "Miércoles": { hora: "12:45-14:15", aula: "INFLAB" }, "Jueves": { hora: "12:45-14:15", aula: "INFLAB" } } }
                    ]
                }
            }
        },

        // Nivel F
        "nivel_F": {
            materias: [
                { id: "ingenieria_software", nombre: "INGENIERIA DE SOFTWARE" },
                { id: "inteligencia_artificial", nombre: "INTELIGENCIA ARTIFICIAL" },
                { id: "redes_computadoras", nombre: "REDES DE COMPUTADORAS" },
                { id: "simulacion_sistemas", nombre: "SIMULACION DE SISTEMAS" },
                { id: "sistemas_economicos", nombre: "SISTEMAS ECONOMICOS" },
                { id: "sistemas_ii", nombre: "SISTEMAS II" },
                { id: "telefonia_ip", nombre: "TELEFONIA IP" }
            ],
            materiasData: {
                "ingenieria_software": {
                    nombre: "INGENIERIA DE SOFTWARE",
                    docentes: [
                        { id: "camacho_1", nombre: "CAMACHO DEL CASTILLO INDIRA", tipo: "Teórico", horario: { "Martes": { hora: "06:45-08:15", aula: "651" }, "Miércoles": { hora: "06:45-08:15", aula: "652" }, "Jueves": { hora: "06:45-08:15", aula: "692D" } } },
                        { id: "torrico_2", nombre: "TORRICO BASCOPE ROSEMARY", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "690B" }, "Miércoles": { hora: "09:45-11:15", aula: "INFLAB" }, "Viernes": { hora: "09:45-11:15", aula: "691D" } } }
                    ]
                },
                "inteligencia_artificial": {
                    nombre: "INTELIGENCIA ARTIFICIAL",
                    docentes: [
                        { id: "garcia_1", nombre: "GARCIA PEREZ CARMEN ROSA", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "692D" }, "Miércoles": { hora: "09:45-11:15", aula: "692A" }, "Jueves": { hora: "11:15-12:45", aula: "692D" } } },
                        { id: "rodriguez_2", nombre: "RODRIGUEZ BILBAO ERIKA PATRICIA", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "691C" }, "Martes": { hora: "12:45-14:15", aula: "690B" }, "Miércoles": { hora: "12:45-14:15", aula: "692C" } } }
                    ]
                },
                "redes_computadoras": {
                    nombre: "REDES DE COMPUTADORAS",
                    docentes: [
                        { id: "orellana_1", nombre: "ORELLANA ARAOZ JORGE WALTER", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "692B" }, "Miércoles": { hora: "09:45-11:15", aula: "693A" }, "Viernes": { hora: "09:45-11:15", aula: "692C" } } },
                        { id: "orellana_2", nombre: "ORELLANA ARAOZ JORGE WALTER", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "691B" }, "Martes": { hora: "09:45-11:15", aula: "693A" }, "Jueves": { hora: "09:45-11:15", aula: "691C" } } }
                    ]
                },
                "simulacion_sistemas": {
                    nombre: "SIMULACION DE SISTEMAS",
                    docentes: [
                        { id: "villarroel_1", nombre: "VILLARROEL TAPIA HENRY FRANK", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "692G" }, "Miércoles": { hora: "06:45-08:15", aula: "651" } } },
                        { id: "villarroel_2", nombre: "VILLARROEL TAPIA HENRY FRANK", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "625D" }, "Martes": { hora: "06:45-08:15", aula: "617C" } } }
                    ]
                },
                "sistemas_economicos": {
                    nombre: "SISTEMAS ECONOMICOS",
                    docentes: [
                        { id: "vargas_2", nombre: "VARGAS PEREDO EMIR FELIX", tipo: "Teórico", horario: { "Miércoles": { hora: "09:45-11:15", aula: "AUDIND" }, "Viernes": { hora: "09:45-11:15", aula: "692E" } } }
                    ]
                },
                "sistemas_ii": {
                    nombre: "SISTEMAS II",
                    docentes: [
                        { id: "garcia_2", nombre: "GARCIA MOLINA JUAN RUBEN", tipo: "Teórico", horario: { "Miércoles": { hora: "11:15-12:45", aula: "693A" }, "Jueves": { hora: "17:15-18:45", aula: "691F" } } }
                    ]
                },
                "telefonia_ip": {
                    nombre: "TELEFONIA IP",
                    docentes: [
                        { id: "montoya_1", nombre: "MONTOYA BURGOS YONY RICHARD", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "693B" }, "Martes": { hora: "20:15-21:45", aula: "INFLAB" } } }
                    ]
                }
            }
        },

        // Nivel G
        "nivel_G": {
            materias: [
                { id: "dinamica_sistemas", nombre: "DINAMICA DE SISTEMAS" },
                { id: "electrotecnia_industrial", nombre: "ELECTROTECNIA INDUSTRIAL" },
                { id: "gestion_calidad_software", nombre: "GESTION DE CALIDAD DE SOFTWARE" },
                { id: "planificacion_evaluacion_proyectos", nombre: "PLANIFICACION Y EVALUACION DE PROYECTOS" },
                { id: "redes_avanzadas", nombre: "REDES AVANZADAS DE COMPUTADORAS" },
                { id: "taller_ingenieria_software", nombre: "TALLER DE INGENIERIA DE SOFTWARE" }
            ],
            materiasData: {
                "dinamica_sistemas": {
                    nombre: "DINAMICA DE SISTEMAS",
                    docentes: [
                        { id: "orellana_1", nombre: "ORELLANA ARAOZ JORGE WALTER", tipo: "Teórico", horario: { "Martes": { hora: "14:15-15:45", aula: "690C" }, "Jueves": { hora: "14:15-15:45", aula: "690E" } } }
                    ]
                },
                "electrotecnia_industrial": {
                    nombre: "ELECTROTECNIA INDUSTRIAL",
                    docentes: [
                        { id: "acha_5", nombre: "ACHA PEREZ SAMUEL", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "692E" }, "Miércoles": { hora: "06:45-08:15", aula: "693B" } } },
                        { id: "acha_5_tp", nombre: "ACHA PEREZ SAMUEL", tipo: "TP", horario: { "Martes": { hora: "06:45-09:00", aula: "682L3" }, "Martes": { hora: "12:45-14:15", aula: "693A" } } }
                    ]
                },
                "gestion_calidad_software": {
                    nombre: "GESTION DE CALIDAD DE SOFTWARE",
                    docentes: [
                        { id: "torrico_2", nombre: "TORRICO BASCOPE ROSEMARY", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "690D" }, "Jueves": { hora: "08:15-09:45", aula: "691C" } } }
                    ]
                },
                "planificacion_evaluacion_proyectos": {
                    nombre: "PLANIFICACION Y EVALUACION DE PROYECTOS",
                    docentes: [
                        { id: "vargas_2", nombre: "VARGAS ANTEZANA ADEMAR MARCELO", tipo: "Teórico", horario: { "Martes": { hora: "17:15-18:45", aula: "660" }, "Miércoles": { hora: "06:45-08:15", aula: "692C" }, "Jueves": { hora: "09:45-11:15", aula: "690B" } } }
                    ]
                },
                "redes_avanzadas": {
                    nombre: "REDES AVANZADAS DE COMPUTADORAS",
                    docentes: [
                        { id: "por_designar_2", nombre: "POR DESIGNAR DOCENTE", tipo: "Teórico", horario: { "Martes": { hora: "12:45-14:15", aula: "607" }, "Jueves": { hora: "12:45-14:15", aula: "692A" } } }
                    ]
                },
                "taller_ingenieria_software": {
                    nombre: "TALLER DE INGENIERIA DE SOFTWARE",
                    docentes: [
                        { id: "flores_1", nombre: "FLORES VILLARROEL CORINA", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "690D" }, "Martes": { hora: "09:45-11:15", aula: "690E" } } },
                        { id: "blanco_2", nombre: "BLANCO COCA LETICIA", tipo: "Teórico", horario: { "Martes": { hora: "08:15-09:45", aula: "651" }, "Miércoles": { hora: "08:15-09:45", aula: "INFLAB" } } },
                        { id: "escalera_3", nombre: "ESCALERA FERNANDEZ DAVID", tipo: "Teórico", horario: { "Lunes": { hora: "06:45-08:15", aula: "INFLAB" }, "Jueves": { hora: "06:45-08:15", aula: "INFLAB" } } },
                        { id: "rodriguez_4", nombre: "RODRIGUEZ BILBAO ERIKA PATRICIA", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "690E" }, "Martes": { hora: "14:15-15:45", aula: "690E" } } }
                    ]
                }
            }
        },

        // Nivel H
        "nivel_H": {
            materias: [
                { id: "evaluacion_auditoria_sistemas", nombre: "EVALUACION Y AUDITORIA DE SISTEMAS" },
                { id: "gestion_estrategica_empresas", nombre: "GESTION ESTRATEGICA DE EMPRESAS" },
                { id: "ingles_iii", nombre: "INGLES III" },
                { id: "metodologia_proyecto_grado", nombre: "METODOL. Y PLANIF. DE PROYECTO DE GRADO" },
                { id: "seguridad_sistemas", nombre: "SEGURIDAD DE SISTEMAS" },
                { id: "sistemas_colaborativos", nombre: "SISTEMAS COLABORATIVOS" },
                { id: "taller_simulacion_sistemas", nombre: "TALLER DE SIMULACION DE SISTEMAS" }
            ],
            materiasData: {
                "evaluacion_auditoria_sistemas": {
                    nombre: "EVALUACION Y AUDITORIA DE SISTEMAS",
                    docentes: [
                        { id: "romero_1", nombre: "ROMERO RODRIGUEZ PATRICIA", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "691F" }, "Miércoles": { hora: "08:15-09:45", aula: "690B" }, "Jueves": { hora: "08:15-09:45", aula: "690C" } } },
                        { id: "villarroel_2", nombre: "VILLARROEL NOVILLO JIMMY", tipo: "Teórico", horario: { "Lunes": { hora: "15:45-17:15", aula: "692F" }, "Martes": { hora: "08:15-09:45", aula: "691D" }, "Miércoles": { hora: "09:45-11:15", aula: "661" } } }
                    ]
                },
                "gestion_estrategica_empresas": {
                    nombre: "GESTION ESTRATEGICA DE EMPRESAS",
                    docentes: [
                        { id: "guzman_2", nombre: "GUZMAN ORELLANA GONZALO ENRIQUE ANTONIO", tipo: "Teórico", horario: { "Martes": { hora: "06:45-09:45", aula: "682L6IN" }, "Miércoles": { hora: "08:15-09:45", aula: "682L6IN" } } }
                    ]
                },
                "ingles_iii": {
                    nombre: "INGLES III",
                    docentes: [
                        { id: "grilo_1", nombre: "GRILO SALVATIERRA MARIA ESTELA", tipo: "Teórico", horario: { "Martes": { hora: "14:15-15:45", aula: "693A" }, "Jueves": { hora: "15:45-17:15", aula: "692C" } } }
                    ]
                },
                "metodologia_proyecto_grado": {
                    nombre: "METODOL. Y PLANIF. DE PROYECTO DE GRADO",
                    docentes: [
                        { id: "jaldin_3", nombre: "JALDIN ROSALES K. ROLANDO", tipo: "Teórico", horario: { "Miércoles": { hora: "09:45-11:15", aula: "690E" }, "Jueves": { hora: "15:45-17:15", aula: "690E" }, "Viernes": { hora: "08:15-09:45", aula: "690E" } } },
                        { id: "fiorilo_4", nombre: "FIORILO LOZADA AMERICO", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "692D" }, "Martes": { hora: "18:45-20:15", aula: "642" }, "Miércoles": { hora: "06:45-08:15", aula: "690C" } } },
                        { id: "villarroel_5", nombre: "VILLARROEL TAPIA HENRY FRANK", tipo: "Teórico", horario: { "Lunes": { hora: "15:45-17:15", aula: "625C" }, "Martes": { hora: "17:15-18:45", aula: "625C" }, "Miércoles": { hora: "17:15-18:45", aula: "690B" } } }
                    ]
                },
                "seguridad_sistemas": {
                    nombre: "SEGURIDAD DE SISTEMAS",
                    docentes: [
                        { id: "antezana_1", nombre: "ANTEZANA CAMACHO MARCELO", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "INFLAB" }, "Martes": { hora: "11:15-12:45", aula: "INFLAB" } } }
                    ]
                },
                "sistemas_colaborativos": {
                    nombre: "SISTEMAS COLABORATIVOS",
                    docentes: [
                        { id: "antezana_1", nombre: "ANTEZANA CAMACHO MARCELO", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "INFLAB" }, "Martes": { hora: "09:45-11:15", aula: "INFLAB" } } }
                    ]
                },
                "taller_simulacion_sistemas": {
                    nombre: "TALLER DE SIMULACION DE SISTEMAS",
                    docentes: [
                        { id: "villarroel_1", nombre: "VILLARROEL TAPIA HENRY FRANK", tipo: "Teórico", horario: { "Lunes": { hora: "18:45-20:15", aula: "690E" }, "Miércoles": { hora: "14:15-15:45", aula: "690E" } } },
                        { id: "ayoroa_2", nombre: "AYOROA CARDOZO JOSE RICHARD", tipo: "Teórico", horario: { "Lunes": { hora: "08:15-09:45", aula: "661" }, "Miércoles": { hora: "08:15-09:45", aula: "625D" } } }
                    ]
                }
            }
        },

        // Nivel I
        "nivel_I": {
            materias: [
                { id: "business_intelligence", nombre: "BUSINESS INTELLIGENCE Y BIG DATA" },
                { id: "costos_industriales", nombre: "COSTOS INDUSTRIALES" },
                { id: "ingenieria_metodos", nombre: "INGENIERIA DE METODOS Y REINGENIERIA" },
                { id: "ingenieria_economica", nombre: "INGENIERIA ECONOMICA" },
                { id: "planificacion_control_produccion_i", nombre: "PLANIF. Y CONTROL DE LA PRODUCCION I" },
                { id: "planificacion_control_produccion_ii", nombre: "PLANIF. Y CONTROL DE LA PRODUCCION II" },
                { id: "practica_empresarial", nombre: "PRACTICA EMPRESARIAL" },
                { id: "programacion_movil", nombre: "PROGRAMACION MOVIL" },
                { id: "proyecto_final", nombre: "PROYECTO FINAL" },
                { id: "robotica", nombre: "ROBOTICA" },
                { id: "web_semanticas", nombre: "WEB SEMANTICAS" }
            ],
            materiasData: {
                "business_intelligence": {
                    nombre: "BUSINESS INTELLIGENCE Y BIG DATA",
                    docentes: [
                        { id: "escalera_1", nombre: "ESCALERA FERNANDEZ DAVID", tipo: "Teórico", horario: { "Miércoles": { hora: "06:45-08:15", aula: "INFLAB" }, "Viernes": { hora: "06:45-08:15", aula: "691F" } } }
                    ]
                },
                "costos_industriales": {
                    nombre: "COSTOS INDUSTRIALES",
                    docentes: [
                        { id: "lima_2", nombre: "LIMA VACAFLOR TITO ANIBAL", tipo: "Teórico", horario: { "Lunes": { hora: "18:45-20:15", aula: "617" }, "Miércoles": { hora: "20:15-21:45", aula: "612" }, "Sábado": { hora: "11:15-12:45", aula: "617" } } },
                        { id: "lima_3", nombre: "LIMA VACAFLOR TITO ANIBAL", tipo: "Teórico", horario: { "Lunes": { hora: "20:15-21:45", aula: "692E" }, "Miércoles": { hora: "18:45-20:15", aula: "682L0IN" } } }
                    ]
                },
                "ingenieria_metodos": {
                    nombre: "INGENIERIA DE METODOS Y REINGENIERIA",
                    docentes: [
                        { id: "cosio_2", nombre: "COSIO PAPADOPOLIS CARLOS JAVIER ALFREDO", tipo: "Teórico", horario: { "Martes": { hora: "06:45-08:15", aula: "691B" }, "Miércoles": { hora: "08:15-09:45", aula: "691C" }, "Viernes": { hora: "06:45-08:15", aula: "692A" } } }
                    ]
                },
                "ingenieria_economica": {
                    nombre: "INGENIERIA ECONOMICA",
                    docentes: [
                        { id: "aranibar_3", nombre: "ARANIBAR LA FUENTE LIGIA JACQUELINE", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "652" }, "Miércoles": { hora: "17:15-18:45", aula: "693B" }, "Viernes": { hora: "09:45-11:15", aula: "690B" } } }
                    ]
                },
                "planificacion_control_produccion_i": {
                    nombre: "PLANIF. Y CONTROL DE LA PRODUCCION I",
                    docentes: [
                        { id: "quiroz_3", nombre: "QUIROZ CHAVEZ ABDON", tipo: "Teórico", horario: { "Martes": { hora: "08:15-09:45", aula: "AULVIR" }, "Miércoles": { hora: "11:15-12:45", aula: "AULVIR" }, "Jueves": { hora: "09:45-11:15", aula: "AULVIR" } } }
                    ]
                },
                "planificacion_control_produccion_ii": {
                    nombre: "PLANIF. Y CONTROL DE LA PRODUCCION II",
                    docentes: [
                        { id: "choque_3", nombre: "CHOQUE FLORES ALEX D'ANCHGELO", tipo: "Teórico", horario: { "Martes": { hora: "18:45-20:15", aula: "690B" }, "Jueves": { hora: "18:45-20:15", aula: "625D" }, "Sábado": { hora: "09:45-11:15", aula: "691F" } } }
                    ]
                },
                "practica_empresarial": {
                    nombre: "PRACTICA EMPRESARIAL",
                    docentes: [
                        { id: "antezana_2", nombre: "ANTEZANA CAMACHO MARCELO", tipo: "Teórico", horario: { "Lunes": { hora: "09:45-11:15", aula: "690E" }, "Martes": { hora: "08:15-09:45", aula: "INFLAB" } } }
                    ]
                },
                "programacion_movil": {
                    nombre: "PROGRAMACION MOVIL",
                    docentes: [
                        { id: "fiorilo_1", nombre: "FIORILO LOZADA AMERICO", tipo: "Teórico", horario: { "Martes": { hora: "20:15-21:45", aula: "691C" }, "Viernes": { hora: "20:15-21:45", aula: "691E" } } }
                    ]
                },
                "proyecto_final": {
                    nombre: "PROYECTO FINAL",
                    docentes: [
                        { id: "montano_2", nombre: "MONTANO QUIROGA VICTOR HUGO", tipo: "Teórico", horario: { "Martes": { hora: "11:15-12:45", aula: "INFLAB" }, "Jueves": { hora: "08:15-09:45", aula: "INFDEP" } } },
                        { id: "garcia_3", nombre: "GARCIA PEREZ CARMEN ROSA", tipo: "Teórico", horario: { "Miércoles": { hora: "12:45-14:15", aula: "690E" }, "Jueves": { hora: "08:15-09:45", aula: "690E" } } },
                        { id: "romero_4", nombre: "ROMERO RODRIGUEZ PATRICIA", tipo: "Teórico", horario: { "Lunes": { hora: "12:45-14:15", aula: "692G" }, "Martes": { hora: "09:45-11:15", aula: "625C" } } },
                        { id: "villarroel_5", nombre: "VILLARROEL NOVILLO JIMMY", tipo: "Teórico", horario: { "Lunes": { hora: "14:15-15:45", aula: "INFDEP" }, "Martes": { hora: "14:15-15:45", aula: "INFDEP" } } }
                    ]
                },
                "robotica": {
                    nombre: "ROBOTICA",
                    docentes: [
                        { id: "garcia_1", nombre: "GARCIA PEREZ CARMEN ROSA", tipo: "Teórico", horario: { "Martes": { hora: "09:45-11:15", aula: "692F" }, "Jueves": { hora: "09:45-11:15", aula: "692G" } } }
                    ]
                },
                "web_semanticas": {
                    nombre: "WEB SEMANTICAS",
                    docentes: [
                        { id: "rodriguez_1", nombre: "RODRIGUEZ BILBAO ERIKA PATRICIA", tipo: "Teórico", horario: { "Lunes": { hora: "11:15-12:45", aula: "691C" }, "Miércoles": { hora: "14:15-15:45", aula: "692D" } } }
                    ]
                }
            }
        },

        // Nivel J
        "nivel_J": {
            materias: [
                { id: "generacion_software", nombre: "GENERACION DE SOFTWARE" },
                { id: "tecnicas_ruteo_avanzada", nombre: "TECNICAS DE RUTEO AVANZADA" }
            ],
            materiasData: {
                "generacion_software": {
                    nombre: "GENERACION DE SOFTWARE",
                    docentes: [
                        { id: "costas_1", nombre: "COSTAS JAUREGUI VLADIMIR ABEL", tipo: "Teórico", horario: { "Martes": { hora: "14:15-15:45", aula: "607" }, "Miércoles": { hora: "09:45-11:15", aula: "692C" } } }
                    ]
                },
                "tecnicas_ruteo_avanzada": {
                    nombre: "TECNICAS DE RUTEO AVANZADA",
                    docentes: [
                        { id: "montoya_1", nombre: "MONTOYA BURGOS YONY RICHARD", tipo: "Teórico", horario: { "Martes": { hora: "18:45-20:15", aula: "INFLAB" }, "Jueves": { hora: "20:15-21:45", aula: "INFLAB" } } }
                    ]
                }
            }
        }
    }
};