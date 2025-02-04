//this block of code won't run in node js because XMLHttpRequest is not available in node js package
const request = new XMLHttpRequest()
let text = null

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4){
        text = request.responseText
    }
    else {
        text = 'null'
    }
})


request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
request.send()

function myFunction(){
    document.getElementById("demo").innerHTML = text
}