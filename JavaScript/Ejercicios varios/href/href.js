window.onload = function () {
    // numero enlaces de la pagina
    var enlacesPagina = document.getElementsByTagName('a').length;
    console.log('Número de enlaces de la página:', enlacesPagina);
  
    // penúltimo enlace
    var enlaces = document.getElementsByTagName('a');
    var penultimoEnlace = enlaces[enlaces.length - 2];
    
    if (penultimoEnlace) {
      // href a la que enlaza el penúltimo enlace
      var direccionPenultimoEnlace = penultimoEnlace.href;
      console.log('Dirección a la que enlaza el penúltimo enlace:', direccionPenultimoEnlace);
    } else {
      console.log('No hay penúltimo enlace en la página.');
    }
  
    // numero de enlaces que llevan a /wiki/ISBN
    var enlacesISBN = document.querySelectorAll('a[href^="/wiki/ISBN"]');
    console.log('Número de enlaces que llevan a /wiki/ISBN:', enlacesISBN.length);
  };
  