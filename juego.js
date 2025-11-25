// Preguntas del juego
const preguntas = [
    {
        pregunta: "¿Quién es el director de la película Interestelar?",
        opciones: [
            "Steven Spielberg",
            "Christopher Nolan",
            "Ridley Scott",
            "James Cameron"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Quiénes interpretan a Glinda y Elphaba en la película Wicked (2024)?",
        opciones: [
            "Dove Cameron y Zendaya",
            "Amanda Seyfried y Idina Menzel",
            "Ariana Grande y Cynthia Erivo",
            "Sabrina Carpenter y Lea Michele"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué película ganó el Oscar a Mejor Película Animada en 2002?",
        opciones: [
            "Lilo & Stitch",
            "El viaje de Chihiro",
            "La era del hielo",
            "Spirit: el corcel indomable"
        ],
        correcta: 1 
    },
    {
        pregunta: "¿En qué año se estrenó Shrek 2?",
        opciones: [
            "2001",
            "2003",
            "2004",
            "2006"
        ],
        correcta: 2
    }
];


let indice = 0;
let puntaje = 0;

const preguntaElem = document.getElementById("pregunta");
const opcionesElem = document.getElementById("opciones");
const btnSiguiente = document.getElementById("btnSiguiente");
const resultadoElem = document.getElementById("resultado");

mostrarPregunta();

// ========================
// MOSTRAR PREGUNTA
// ========================
function mostrarPregunta() {
    const actual = preguntas[indice];

    preguntaElem.textContent = actual.pregunta;
    opcionesElem.innerHTML = "";
    resultadoElem.textContent = "";
    btnSiguiente.style.display = "none";

    actual.opciones.forEach((opcion, i) => {
        const btn = document.createElement("button");
        btn.textContent = opcion;
        btn.classList.add("opcion-btn");
        btn.addEventListener("click", () => validarRespuesta(i));
        opcionesElem.appendChild(btn);
    });
}

// ========================
// VALIDAR RESPUESTA
// ========================
function validarRespuesta(i) {
    const correcta = preguntas[indice].correcta;

    if (i === correcta) {
        resultadoElem.textContent = "✅¡Correcto!";
        resultadoElem.style.color = "green";
        puntaje++;
    } else {
        resultadoElem.textContent = "❌ Incorrecto";
        resultadoElem.style.color = "red";
    }

    // Deshabilitar botones
    document.querySelectorAll(".opcion-btn").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
    });

    btnSiguiente.style.display = "block";
}

// ========================
// SIGUIENTE PREGUNTA
// ========================
btnSiguiente.addEventListener("click", () => {
    indice++;

    if (indice < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultadoFinal();
    }
});


// ========================
// RESULTADO FINAL
// ========================
function mostrarResultadoFinal() {
    preguntaElem.textContent = "Juego terminado";
    opcionesElem.innerHTML = "";
    btnSiguiente.style.display = "none";

    // Texto del resultado
    resultadoElem.innerHTML = `
        Obtuviste <strong>${puntaje}</strong> de ${preguntas.length} preguntas correctas 🎉
        <br><br>
        <button id="btnReiniciar" class="reiniciar-btn">Jugar de nuevo</button>
    `;

    // ===========================
    // COLORES SEGÚN PERFORMANCE
    // ===========================
    if (puntaje <= 2) {
        resultadoElem.style.color = "red";     // 0/4, 1/4 o 2/4 → ROJO
    } else {
        resultadoElem.style.color = "green";   // 3/4 o 4/4 → VERDE
    }

    // Evento del botón reiniciar
    document.getElementById("btnReiniciar").addEventListener("click", () => {
        location.reload();
    });
}


