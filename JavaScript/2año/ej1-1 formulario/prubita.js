let caracteres = "hola caracola";
for (let i in caracteres) {//aqui accede a la posición 
  console.log(`en la posicion ${i} esta la letra ${caracteres[i]}`);
}
for (let caracter of caracteres) {//aqui copia el valor de la posicion
  console.log(`la posicion me la come, la letra es: ${caracter}`);
}
