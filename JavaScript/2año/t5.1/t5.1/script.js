let persona = {
  nombre: {
      pila: 'Jane',
      apellido: 'Doe'
  },
  edad: 30,
  genero: 'femenino',
  intereses: ['programación', 'teatro'],
  bio: function () {
    document.write(this.nombre.pila + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  saludo: function() {
    alert('Hola, soy '+ this.nombre.pila + '. ');
  }
};
// Acceso a propiedades
persona.nombre.pila
persona.edad
persona.intereses[1]
persona.bio()
persona.saludo()

function Persona(pila1,apellido1,edad1,genero1,intereses1){
  this.name={
pila:pila1,
apellido:apellido1
  }
  this.edad=edad1;
  this.genero=genero1;
  this.intereses=intereses1;
  this.bio: function () {
    document.write(this.name.pila + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  this.saludo: function() {
    alert('Hola, soy '+ this.name.pila + '. ');
  }
}