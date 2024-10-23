window.onload = function () {
    
    var enlacesPagina = document.getElementsByTagName('a').length;
    console.log('Número de enlaces de la página:', enlacesPagina);
  
   
    var tercerParrafo = document.getElementsByTagName('p')[2];
    
    if (tercerParrafo) {
      //numero de enlaces del tercer parrafo
      var enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;
      console.log('Número de enlaces del tercer párrafo:', enlacesTercerParrafo);
    } else {
      console.log('No hay tercer párrafo en la página.');
    }
  };
  