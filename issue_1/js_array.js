//we are gonna learn about javascript arrays here
const student = [37, 'Tanveer', {institution : 'BUBT'}]

console.log(student)
console.log(student.length)

//accessing the first element
console.log(student[0])

//accessing the last element
console.log(student[student.length-1])


const fruits = ["Banana", "Orange", "Apple", "Mango"];

//iterating the array using a for loop
let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(text)

//iterating the array using a for each loop

/*I don't understand the code here bellow, I get that each value is getting passed to the myfunction,
but it's not getting passed into the parameter, like this
fruits.forEach(myFunction(something here))
So, my question is, the function parameter is working here fine because it's just one parameter, however, what
happens if I inserted a function with multiple parameters here? Like myFunction(a,b)
*/

let new_text = "<ul>";
fruits.forEach(myFunction);  
new_text += "</ul>";

function myFunction(value) {
  new_text += "<li>" + value + "</li>"; //I don't understand the scope here, isn't the new_text defined outside the function? How is that being modified here?
}

console.log(new_text)

//The splice() method can be used to add new items to an array:

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

//ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
const myFruits = fruits.slice(2);
console.log(myFruits)