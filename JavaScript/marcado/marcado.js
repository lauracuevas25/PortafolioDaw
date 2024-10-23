document.addEventListener("DOMContentLoaded", function () {
    var resultadoDiv = document.getElementById("resultado");
    var contenidoDiv = document.getElementById("contenido");

    function contarOcurrencias(texto, palabraBuscar) {
        var regex = new RegExp('\\b' + palabraBuscar + '\\b', 'gi');
        var ocurrencias = texto.match(regex);
        return ocurrencias ? ocurrencias.length : 0;
    }

    function resaltarOcurrencias(texto, palabraBuscar) {
        var regex = new RegExp('\\b' + palabraBuscar + '\\b', 'gi');
        var textoResaltado = texto.replace(regex, '<mark>$&</mark>');
        return textoResaltado;
    }

    function mostrarResultado(palabraBuscar, numeroOcurrencias) {
        resultadoDiv.innerHTML = "Texto buscado: " + palabraBuscar + "<br>Número de ocurrencias: " + numeroOcurrencias;
        resultadoDiv.style.display = "block";
        contenidoDiv.innerHTML = resaltarOcurrencias(contenidoDiv.textContent, palabraBuscar);
        contenidoDiv.scrollIntoView();
    }

    function buscarTexto() {
        var palabraBuscar = prompt("Ingresa la palabra a buscar:");

        if (palabraBuscar === null || palabraBuscar.trim() === "") {
            alert("Por favor, ingresa una palabra válida.");
            return;
        }

        var contenido = contenidoDiv.textContent;
        var regex = new RegExp('\\b' + palabraBuscar + '\\b', 'gi');

        if (contenido.match(regex)) {
            alert("Palabra encontrada. Se calculará el número de ocurrencias después de 3 segundos.");

            setTimeout(function () {
                var numeroOcurrencias = contarOcurrencias(contenido, palabraBuscar);
                mostrarResultado(palabraBuscar, numeroOcurrencias);
            }, 3000);
        } else {
            alert("La palabra no fue encontrada en el texto.");
        }
    }

    buscarTexto();
});
