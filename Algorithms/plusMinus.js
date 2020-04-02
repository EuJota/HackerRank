//Objetivo do teste é verificar a porcentagem da quantidade de numeros positivos, negativos e zeros no array
//link do desafio -> https://www.hackerrank.com/challenges/plus-minus/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positive = 0, negative = 0, zeros = 0
    let arrSize = arr.length

    arr.map((item)=>{
        if(item > 0)
            positive+=1
        else if(item < 0)
            negative+=1
        else
            zeros +=1
    })

    console.log(`${(positive/arrSize).toFixed(6)}
${(negative/arrSize).toFixed(6)}
${(zeros/arrSize).toFixed(6)}`)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
