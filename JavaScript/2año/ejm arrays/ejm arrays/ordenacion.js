let array = [];
let bubble = [], insertion = [], selection = [];
let i, j, m;

for(let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random() * 10);
}

bubble = array.slice(0);
insertion = array.slice(0);
selection = array.slice(0);
/*bubble[0]= 'A';
console.log(bubble);*/
console.log(array);

console.time('Bubble Time'); // Inicio temp
for(i = 0; i < bubble.length; i++) {
    console.log("i: "+i);
    for(j = 0; j < bubble.length - i - 1; j++) {
        console.log("j: "+j+"  i: "+i);
        if(bubble[j] > bubble[j + 1]) {
            /*m = bubble[j];
            bubble[j] = bubble[j+1];
            bubble[j+1] = m;*/
            [bubble[j + 1], bubble[j]] = [bubble[j], bubble[j + 1]];
        }
    }
}
console.timeEnd('Bubble Time'); // Fin temp
console.log(bubble);


console.time('Insertion Time');
for(i = 0; i < insertion.length; i++) {
    for(j = i - 1; j >= 0; j--) {
        if(insertion[j] > insertion[j + 1]) {
            [insertion[j + 1], insertion[j]] = [insertion[j], insertion[j + 1]];
        }
    }
}
console.timeEnd('Insertion Time');
console.log(insertion);


console.time('Selection Time');
for(i = 0; i < selection.length; i++) {
    m = i;
    for(j = i + 1; j < selection.length; j++) {
        if(selection[m] > selection[j]) {
            m = j;
        }
        if(m !== i) {
            [selection[i], selection[m]] = [selection[m], selection[i]];
        }
    }
}
console.timeEnd('Selection Time');
console.log(selection);

console.time('Sort Time');
array.sort();
console.timeEnd('Sort Time');