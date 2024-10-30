let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
//tiene que tener 8 digitos
let regexDni = "[0-9]{8}[A-Za-z]{1}";
let dni;


do {
  dni = prompt("Introduzca su dni: ");
} while (!dni.match(regexDni));

let numerosDni = dni.substring(0, 8);
console.log(numerosDni);
let letraDNI = dni.substring(8, 9).toUpperCase(); //SLICE TAMBIEN SE USA
console.log(letraDNI);

if (letraDNI == letras[parseInt(numerosDni) % 23]) {
  alert("Dni correcto muy bien");
  correcto = true;
} else {
  alert(" dni  no valido");
}
