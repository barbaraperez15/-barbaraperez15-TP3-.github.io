document.getElementById("btnLeerMas").addEventListener("click", function() {
    const cvCompleto = document.getElementById("cv-completo");

    if (cvCompleto.style.display === "none") {
        cvCompleto.style.display = "block";
        this.textContent = "Leer menos";
    } else {
        cvCompleto.style.display = "none";
        this.textContent = "Leer más";
    }
});