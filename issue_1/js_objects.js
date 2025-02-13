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

student.fullname = function(){
    return this.firstName + " " + this.lastName
}

console.log(student.fullname())

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

//deleting an object property using 'delete' keyword

delete student2.lastName

//objects can be nested

colors = {
    higher_end_spectrum : {
        h1 : 'Violet',
        h2 : 'Blue'
    },
    lower_end_spectrum : {
        l1 : 'Orange',
        l2 : 'Red'
    }
}

console.log(colors.higher_end_spectrum.h1)

console.log(colors.lower_end_spectrum)

//bellow is an example of object constructor

function Pet(species,gender,color){
    this.species = species,
    this.gender = gender,
    this.color = color
}

//I don't understand why output shows undefined if I don't put new before defining Pet
const coco = new Pet('cat','male','grey')

console.log(coco)

//bellow shows undefined, explain reason
const mao = Pet('cat','male','orange')

console.log(mao)