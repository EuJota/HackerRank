//Este exercício recebe 2 vetores com valores e pede para comparar os maiores valores
//e retornar um vetor com o resultado das comparações

// link do problema: https://www.hackerrank.com/challenges/compare-the-triplets/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
   //TODO: Refatorar para melhorar a função de verificação 
    let c = [...a,...b]
    let x = 0, y = 0
    let cont = 0
    let resultado = []

    for(let i=0; i<3;i++){
        if(c[i] > c[i+3])
            x +=1
        else if(c[i] < c[i+3])
            y +=1
    }

    resultado[0] = x
    resultado[1] = y

    return resultado
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
