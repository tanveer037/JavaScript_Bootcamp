//this block of code won't run in node js because XMLHttpRequest is not available in node js package
const request = new XMLHttpRequest()
let text = null

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }else if(request.readyState === 4){
        console.log('Could not fetch data')
    }
})


request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
request.send()