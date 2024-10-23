function validarNombreUsuario() {
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var mensaje = document.getElementById("mensaje");
  
    if (nombreUsuario.length >= 6) {
      mensaje.innerHTML = "Nombre de usuario válido: " + nombreUsuario;
    } else {
      mensaje.innerHTML = "El nombre de usuario debe tener al menos 6 letras.";
    }
  }
  