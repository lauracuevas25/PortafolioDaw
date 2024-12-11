/*
function factorial(n) {
    let acumulacion = 1;  
    for (let i = n; i > 1; i--) { 
        acumulacion *= i;  
    }
    return acumulacion;
}

console.log(factorial(4)); 
*/

function fibonaciCallback(numero){
    if(numero<=1){
        return 1;
    }else{
     let resultado= fibonaciCallback(numero)+fibonaciCallback(numero-1) ;
return resultado;
    }

};
console.log(fibonaciCallback(2)+"esta es con callbacck")


function fibonacci(num){
    if(num<=0){
        return 1;
    };
    let num1=0;
    let num2=1;
    let acumulacion=0;
    for(let i=2;i<=num;i++){
        acumulacion=num1+num2;
        num1=num2;
        num2=acumulacion;
console.log(acumulacion);
    }
    return acumulacion;
};
console.log(fibonacci(4)+"esta es normal");

//tribonacci

if(n=0){return 0};
if(n==1||n==2){
    return 1;
};

let half= n>>>1;
let primero=fibonacci(half+1);
let segundo= fibonacci(half);
if(n%2==0){
    return segundo;
}else{
    return primero^2+segundo^2;
}