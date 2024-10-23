var cuerpo = document.getElementById('cuerpo');
var altura = 10;
var ancho = 10;

function actualizarTamano() {//modifico css
    cuerpo.style.height = altura + 'vh';
    cuerpo.style.width = ancho + 'vw';
}

function ajustarTamano(tecla) {
    switch (tecla) {
        case 'ArrowUp':
            altura = Math.max(altura - 10, 10);
            break;
        case 'ArrowDown':
            altura = Math.min(altura + 10, 100);
            break;
        case 'ArrowLeft':
            ancho = Math.max(ancho - 10, 10);
            break;
        case 'ArrowRight':
            ancho = Math.min(ancho + 10, 100);
            break;
    }

    actualizarTamano();

    if ((tecla === 'ArrowUp' || tecla === 'ArrowDown') && (altura === 100 || altura === 10)) {
        alert('¡Límite alcanzado en altura!');
    } else if ((tecla === 'ArrowLeft' || tecla === 'ArrowRight') && (ancho === 100 || ancho === 10)) {
        alert('¡Límite alcanzado en anchura!');
    }
}

function manejarTecla(event) {
    
    ajustarTamano(event.key);
}

document.addEventListener('keydown', manejarTecla);

actualizarTamano();
