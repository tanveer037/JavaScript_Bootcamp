var x = 10 //Var can be declared and accessed globally
let y = 20 //Let can be declared globally, but its access is limited to the block in which it is declared

let z = x + y 

console.log(z)

x = 30 

console.log(z) // the value won't change here due to the order of code

z = x + y

console.log(z)

let name;

name = 'Tanveer Tayeb'

console.log(name)

const Pi = 3.1416

let r = 5;

let area;

area = Pi * r * r 

console.log(area)

