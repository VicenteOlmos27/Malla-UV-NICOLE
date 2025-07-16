const semestres = [
  {
    año: "Año 1",
    semestres: [
      {
        titulo: "Semestre 1",
        ramos: [
          "FUNDAMENTOS DE MATEMÁTICA",
          "DESARROLLO PERSONAL",
          "DESAFÍOS DE INGENIERÍA",
          "FUNDAMENTOS DE PROGRAMACIÓN",
          "QUÍMICA PARA INGENIERÍA",
        ],
      },
      {
        titulo: "Semestre 2",
        ramos: [
          "CÁLCULO DIFERENCIAL",
          "ÁLGEBRA",
          "INGENIERÍA, INNOVACIÓN Y EMPRENDIMIENTO",
          "PROGRAMACIÓN",
          "FUNDAMENTOS DE FÍSICA",
        ],
      },
    ],
  },
  {
    año: "Año 2",
    semestres: [
      {
        titulo: "Semestre 3",
        ramos: [
          "CÁLCULO INTEGRAL Y SERIES",
          "ÁLGEBRA LINEAL",
          "FÍSICA MECÁNICA",
          "TÓPICOS DE FORMACIÓN GENERAL PARA INGENIERÍA INDUSTRIAL",
          "ALFABETIZACIÓN ACADÉMICA PARA INGENIERÍA I",
          "TIPE SELLO UV I",
          "IDIOMA I",
        ],
      },
      {
        titulo: "Semestre 4",
        ramos: [
          "CÁLCULO EN VARIAS VARIABLES",
          "ECUACIONES DIFERENCIALES ORDINARIAS",
          "FÍSICA CALOR Y ONDAS",
          "ADMINISTRACIÓN DE EMPRESAS Y ORGANIZACIONES",
          "TIPE SELLO UV II",
          "IDIOMA II",
        ],
      },
    ],
  },
  {
    año: "Año 3",
    semestres: [
      {
        titulo: "Semestre 5",
        ramos: [
          "FÍSICA ELECTROMAGNETISMO",
          "ESTADÍSTICA Y PROBABILIDADES",
          "ANÁLISIS FINANCIERO Y CONTABLE",
          "TERMODINÁMICA",
          "ANÁLISIS DE MATERIALES Y DISEÑO DE PRODUCTOS",
          "PRINCIPIOS DE DATA SCIENCE",
          "IDIOMA III",
        ],
      },
      {
        titulo: "Semestre 6",
        ramos: [
          "INFERENCIA ESTADÍSTICA",
          "GESTIÓN PRESUPUESTARIA Y COSTOS",
          "PENSAMIENTO SISTÉMICO",
          "ALFABETIZACIÓN ACADÉMICA PARA INGENIERÍA II",
          "MICROECONOMÍA Y MACROECONOMÍA",
          "IDIOMA IV",
        ],
      },
    ],
  },
  {
    año: "Año 4",
    semestres: [
      {
        titulo: "Semestre 7",
        ramos: [
          "PROCESOS INDUSTRIALES",
          "GESTIÓN DE TALENTO EN LAS ORGANIZACIONES",
          "MODELAMIENTO",
          "SISTEMAS DE INFORMACIÓN Y ADMINISTRACIÓN DE DATOS",
          "ECONOMÍA CIRCULAR Y SOSTENIBILIDAD",
          "GESTIÓN DE LA INNOVACIÓN Y EMPRENDIMIENTO",
        ],
      },
      {
        titulo: "Semestre 8",
        ramos: [
          "GESTIÓN DE OPERACIONES I",
          "ANÁLISIS Y ESTRATEGIA DE NEGOCIOS",
          "VISUALIZACIÓN DE DATOS E INTELIGENCIA DE NEGOCIOS",
          "INVESTIGACIÓN DE OPERACIONES",
          "INGENIERÍA ECONÓMICA",
          "PROYECTO DE LICENCIATURA",
        ],
      },
    ],
  },
  {
    año: "Año 5",
    semestres: [
      {
        titulo: "Semestre 9",
        ramos: [
          "GESTIÓN ENERGÉTICA",
          "GESTIÓN DE OPERACIONES II",
          "DIRECCIÓN ESTRATÉGICA",
          "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS",
          "SIMULACIÓN DE PROCESOS Y SISTEMAS",
          "DESARROLLO ORGANIZACIONAL",
        ],
      },
      {
        titulo: "Semestre 10",
        ramos: [
          "GESTIÓN DE RIESGOS",
          "GESTIÓN DE LA CADENA DE SUMINISTROS",
          "PROJECT MANAGEMENT",
          "ESTRATEGIA DE MARKETING",
          "ELECTIVO PROFESIONAL I",
          "FINANZAS",
          "TALLER DE COMUNICACIÓN EFECTIVA",
        ],
      },
    ],
  },
  {
    año: "Año 6",
    semestres: [
      {
        titulo: "Semestre 11",
        ramos: [
          "PROYECTO DE TÍTULO",
          "ELECTIVO PROFESIONAL II",
          "PRÁCTICA PROFESIONAL",
        ],
      },
    ],
  },
];

// Referencia al contenedor
const contenedor = document.getElementById("malla");
const saved = JSON.parse(localStorage.getItem("ramosCompletados") || "{}");

semestres.forEach(({ año, semestres }) => {
  // Año como título
  const añoDiv = document.createElement("div");
  añoDiv.className = "mb-4";

  const añoTitulo = document.createElement("h3");
  añoTitulo.textContent = año;
  añoTitulo.className = "fw-bold mb-3";
  añoDiv.appendChild(añoTitulo);

  // Contenedor para semestres de ese año
  const row = document.createElement("div");
  row.className = "row g-4";

  semestres.forEach(({ titulo, ramos }) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card h-100 shadow rounded-4";

    const cardHeader = document.createElement("div");
    cardHeader.className =
      "card-header bg-pink text-white fw-semibold rounded-top";
    cardHeader.textContent = titulo;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const ul = document.createElement("ul");
    ul.className = "list-unstyled mb-0";

    ramos.forEach((ramo) => {
      const li = document.createElement("li");
      li.textContent = ramo;
      li.className = "ramo";
      li.style.userSelect = "none";

      // Si está guardado como completado, agregar clase
      if (saved[ramo]) li.classList.add("completed");

      li.onclick = () => {
        li.classList.toggle("completed");
        saved[ramo] = li.classList.contains("completed");
        localStorage.setItem("ramosCompletados", JSON.stringify(saved));
      };
      ul.appendChild(li);
    });

    cardBody.appendChild(ul);
    card.append(cardHeader, cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  añoDiv.appendChild(row);
  contenedor.appendChild(añoDiv);
});
