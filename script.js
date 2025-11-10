// Seleccionar inputs y textarea
const inputs = document.querySelectorAll("#registroCompleto input, #registroCompleto textarea");

// Seleccionar celdas de la tabla (última columna de cada fila)
const filasTabla = document.querySelectorAll("tbody tr td:last-child");

// Función para actualizar tabla
function actualizarTabla() {
    filasTabla[0].textContent = document.getElementById("nombre").value;
    filasTabla[1].textContent = document.getElementById("apellido").value;
    filasTabla[2].textContent = document.getElementById("email").value;
    filasTabla[3].textContent = document.getElementById("telefono").value;
    filasTabla[4].textContent = document.getElementById("edad").value;
    filasTabla[5].textContent = document.getElementById("direccion").value;
    filasTabla[6].textContent = document.getElementById("provincia").value;
    filasTabla[7].textContent = document.getElementById("codigoPostal").value;

    // Método preferido de contacto (radio)
    const contacto = document.querySelector("input[name='contacto']:checked");
    filasTabla[8].textContent = contacto ? contacto.nextElementSibling.textContent : "";

    // Tipo de suscripción (checkbox)
    const suscripciones = document.querySelectorAll("input[name='suscripcion']:checked");
    const listaSuscripciones = Array.from(suscripciones).map(s => s.nextElementSibling.textContent);
    filasTabla[9].textContent = listaSuscripciones.join(", ");
}

// Escuchar cambios en todos los campos
inputs.forEach(campo => {
    campo.addEventListener("input", actualizarTabla);
    campo.addEventListener("change", actualizarTabla);
});