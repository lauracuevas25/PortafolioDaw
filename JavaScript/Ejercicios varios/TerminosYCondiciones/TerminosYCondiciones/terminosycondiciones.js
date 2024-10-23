document.addEventListener("DOMContentLoaded", function () {
    var capa = document.getElementById("capa");
    var botonCerrar = document.getElementById("boton");

    capa.addEventListener("scroll", function () {
        // verificar si el usuario ha llegado al final de la capa
        if (Math.abs(capa.scrollHeight - capa.clientHeight - capa.scrollTop) <= 1) {
            // mostrar el botón de cerrar
            botonCerrar.style.display = "block";
        } else {
            // ocultar el botón de cerrar
            botonCerrar.style.display = "none";
        }
    });

    // manejar el clic en el botón de cerrar
    botonCerrar.addEventListener("click", function () {
        // ocultar la capa al hacer clic en el botón de cerrar
        capa.style.display = "none";
    });
});
