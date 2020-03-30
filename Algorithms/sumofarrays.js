
/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    console.log(typeof(ar))
    ar.reduce((total, next)=>{
        return total + next
    })
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const arCount = parseInt(readLine(), 10);

    let ar = "1 2 3 4 10 11"

    ar = ar.split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    console.log(result)

    //ws.write(result + "\n");

    //ws.end();
}