document.addEventListener("DOMContentLoaded", function () {
    var contador = document.getElementById("contador");
    var tiempo = 5;

    function actualizarContador() {
        contador.textContent = tiempo;

        if (tiempo === 0) {
            contador.textContent = "Nos vamos...";
            redirigirAGoogle();
        } else {
            tiempo--;
            setTimeout(actualizarContador, 1000);
        }
    }

    function redirigirAGoogle() {
        setTimeout(function () {
            window.location.href = "https://www.google.com";
        }, 1000);
    }

    actualizarContador();
});
