//we are gonna learn about objects here
// it is norm to declare objects as const
const student = {
    firstName : 'Tanveer',
    lastName : "Tayeb",
    cgpa : 3.37    
}

//accessing object properties:

console.log(student.firstName)
console.log(student.cgpa)

//we can also declare an empty object and entry the properties later

const student2 = {
    firstName : 'Asib',
    lastName : 'Ahmed',
    cgpa : 3.7
}

console.log(student2.firstName)

//objects can hold funtions as well

const math_object = {
    add : function(a,b){return a+b},
    substract : function(a,b){return a-b},
    multiply : function(a,b){return a*b},
    division : function(a,b){return a/b}
}

cgpa_difference = math_object.substract(student2.cgpa,student.cgpa)

console.log(cgpa_difference)