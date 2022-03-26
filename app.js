// console.log("fetch API")
// const api = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(res){
//         console.log(res, "res")
//     })
// console.log(api, "API")

async function fetchAPI(){
    console.log("Fetch API")
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
}
