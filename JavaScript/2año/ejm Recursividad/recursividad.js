console.log('Ejemplos de funciones recursivas');
/* FACTORIAL */
// Recursiva
function factR(n) {
    if (n > 1) return n * factR(n-1);
    else return 1;
}
console.log('FACT Recursiva: ' + factR(5));

// Iterativa
function factorial(n) {
    let fact = 1;
    while(n>1) {
        fact *= n;
        n--;
    }
    return fact;
}
console.log('FACT Iterativa: ' + factorial(5));



/* FIBONACCI */
// Recursiva
function fiboR(n) {
    if (n == 0) return 0;
    else if (n==1) return 1;
    else return fiboR(n-1)+fiboR(n-2);
}
console.log('FIBO Recursiva: ' + fiboR(6));

// Iterativa
function fibonacci(n) {
    let ant = 0;
    let fib = 1;
    
    if(n == 0) return 0;
    else if(n == 1) return fib;
    else {
        for(let i = 2; i <= n; i++) {
            [ant, fib] = [fib, ant + fib];
        }
        return fib;
    }
}
console.log('FIBO Iterativa: ' + fibonacci(6));