//this block of code won't run in node js because XMLHttpRequest is not available in node js package
function getTodos(callback){
    const request = new XMLHttpRequest()
    let text = null
    
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText) 
            callback(undefined, data)
        }else if(request.readyState === 4){
            callback('Could not fetch data',undefined)
        }
    })
    
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos')
    request.send()
}

console.log(1)
console.log(2)

getTodos(  (err, data) =>{
    console.log('callback fired')
    
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
}  )

//this is example of asynchronous code, the callback function isn't blocking the code sequence

console.log(3)
console.log(4)

