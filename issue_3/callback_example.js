function calculateAndPrint(num1, num2, callback){
    let result = callback(num1, num2)
    console.log(result)
}

calculateAndPrint(5,5, (a,b) => {
    return a + b
} )

function multiply (num1, num2) {
    return num1 * num2
}

calculateAndPrint(8,3, multiply)