function enviarFormulario() {
    validarContraseña1();
    validarContraseña2();
  
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var mensajeCoinciden = document.getElementById("mensajeCoinciden");
  
    if (password1 === password2) {
      mensajeCoinciden.innerHTML = "Las contraseñas coinciden.";
    } else {
      mensajeCoinciden.innerHTML = "";
    }


function validarContraseña1() {
    var password1 = document.getElementById("password1").value;
    var mensaje1 = document.getElementById("mensaje1");
  
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

    ;
  
    if (!regex.test(password1)) {
      mensaje1.innerHTML = "La contraseña debe tener al menos una mayúscula, una minúscula, un número y una longitud mínima de 8 caracteres.";
      document.getElementById("password1").style.backgroundColor = "red";
    } else {
      mensaje1.innerHTML = "";
      document.getElementById("password1").style.backgroundColor = "";
    }
  }
  
  function validarContraseña2() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var mensaje2 = document.getElementById("mensaje2");
  
    if (password1 !== password2) {
      mensaje2.innerHTML = "Las contraseñas no coinciden.";
      document.getElementById("password2").style.backgroundColor = "red";
    } else {
      mensaje2.innerHTML = "";
      document.getElementById("password2").style.backgroundColor = "";
    }
  }
  
  }
  