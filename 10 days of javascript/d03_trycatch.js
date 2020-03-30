//Showing a custom error message from the catch statement

function reverseString(s) {
    try{
        s = s.split("").reverse().join("")
    }catch(e){
        console.log(e.message)
    }finally{
        console.log(s)
    }
}