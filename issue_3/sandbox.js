//this block of code won't run in node js because XMLHttpRequest is not available in node js package
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState)
})

request.open('GET','https://jsonplaceholder.typicode.com/todos')
request.send()