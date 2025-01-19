var x = 10 //Var can be declared and accessed globally
let y = 20 // Let can be declared globally, but its access is limited to the block in which it is declare

let z = x + y

console.log(z)

x = 50

console.log(z)

z = x + y //if I don't define it again, the value doesn't change, because of the order of the code

console.log(z)
