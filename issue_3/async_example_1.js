console.log(1)
console.log(2)
console.log(3)

//Example of async with setTimeout
setTimeout(
    () => {
        console.log('Async callback kicked in')
    },3000
)

console.log(4)
console.log(5)