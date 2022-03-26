// console.log("fetch API")
// const api = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(res){
//         console.log(res, "res")
//     })
// console.log(api, "API")

async function fetchAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    console.log(api, "API")
    const json = await api.json()
    console.log(json, "json")
    
}

fetchAPI();