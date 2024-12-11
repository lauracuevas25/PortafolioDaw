function Padre(arg1='hola') {
    this.arg1 = arg1;
    this.ayuwon = function() {
        return 'El argumento 1 es ' + this.arg1;
    };
}

function Hijo(arg2, arg1='adiós') {
    //Padre.call(this, arg1);
    this.__proto__ = new Padre(arg1);
    this.arg2 = arg2;
    /*this.ayuwon = function() {
        return 'El argumento 1 es ' + this.arg1 + ' y el argumento 2 es ' + this.arg2;
    };*/
    this.ayuwon = function() {
        return this.__proto__.ayuwon() + ' y el argumento 2 es ' + this.arg2;
    };
}

let padre = new Padre();
let hijo = new Hijo('mundo');
console.log(padre.ayuwon());
console.log(hijo.ayuwon());
