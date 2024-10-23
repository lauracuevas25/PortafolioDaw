function iniciarPagina() {
    cambiarImagen(); //cambiar la imagen al cargar la página
  }
function cambiarImagen() {
    var tipoIncidencia = document.getElementById("tipoIncidencia").value;
    var imagenArea = document.getElementById("imagenArea");
  
    switch (tipoIncidencia) {
      case "distribucion":
        imagenArea.src = "distribucion.jpeg";
        imagenArea.alt = "Imagen de área de Distribución";
        break;
      case "oficina":
        imagenArea.src = "oficina.jpeg";
        imagenArea.alt = "Imagen de área de Oficina";
        break;
      case "produccion":
        imagenArea.src = "produccion.jpeg";
        imagenArea.alt = "Imagen de área de Producción";
        break;
      default: imagenArea.src = "distribucion.jpeg";
      imagenArea.alt = "Imagen de área de Distribución";
        break;
    }
  }
  
  function validarNumeroSerie() {
    var numeroSerie = document.getElementById("numeroSerie").value;
    var regex = /^\d{3}[A-Z]{4}[12A]$/;//regex tres números, continuar con cuatro letras mayúsculas y acabar con los números 1 o 2 o con la letra A
  
    if (!regex.test(numeroSerie)) {
        alert("El número de serie debe empezar con tres números, continuar con cuatro letras mayúsculas y acabar con los números 1 o 2 o con la letra A.");
    
        return false;
    }
    else {
        return true;//asi entra en la funcion de mostrar descripcion
    }
  }
  
  function mostrarDescripcion() {
    if(validarNumeroSerie()){
        var descripcion = document.getElementById("descripcion");
        descripcion.style.display = "block";
    }else{
        var descripcion = document.getElementById("descripcion");
        descripcion.style.display = "display:none";
    }
    
  }
  