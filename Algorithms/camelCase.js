//Objetivo do desafio é encontrar numa string as palavras que seguem o padrão camel case
//link do desafio -> https://www.hackerrank.com/challenges/camelcase/problem

'use strict';

const fs = require('fs');

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

// Complete the camelcase function below.
function camelcase(s) {
    let arrS = s.split("")
    let contCamel = 0

    arrS.map(item=>{
        item == item.toUpperCase() ? contCamel+=1 : contCamel+=0
    })
    
    return contCamel + 1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = camelcase(s);

    ws.write(result + "\n");

    ws.end();
}
