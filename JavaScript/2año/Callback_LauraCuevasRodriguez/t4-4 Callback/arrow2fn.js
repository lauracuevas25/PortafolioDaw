console.log("%c--> arrow2function <--","color:blue; font-size:14px");
/*
** EN ESTE ARCHIVO HAY TRES FUNCIONES CALLBACK FLECHA. 
** EDÍTALAS PARA QUE SEAN FUNCIONES CALLBACK DECLARATIVAS.
*/

// 2.1. getLength
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

const letters = materials.map(material => material.length);

 function letters(array){
   return array.map(material => material.length);
 }

function letters (array){
  let cantidadLetras=[];
  for(let i=0;i<array.length;i++){
 cantidadLetras.push(array[i]);
  }
  return cantidadLetras;
}

console.log('1. Lengths:\n' + letters); //esto debes mantenerlo

// 2.2. getUpperChar
const chars = ['a', 'b', 'c', 'd'];
const upperChars = chars.map(char => char.toUpperCase());

function upperChars(chars){
 return chars.map(char=>char.toUpperCase());
}
console.log('2. Capital letters:\n' + upperChars); //esto debes mantenerlo

// 2.3. getPlus18
const ages = [23, 15, 17, 30, 21];
const plus18 = ages.filter(age => age > 17);

function plus18(ages){
  //porqure aqui usas filter y no map?

  ages.filter(age => age > 17)
}
console.log('3. Plus18:\n' + plus18); //esto debes mantenerlo