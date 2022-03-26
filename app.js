// console.log("fetch API")
// const api = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(res){
//         console.log(res, "res")
//     })
// console.log(api, "API")

// async function getAPI(){
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
//     console.log(api, "API")
//     const json = await api.json()
//     console.log(json, "json")
    
// }
//default method is get

//getAPI();

async function postapi(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'bootcamp',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    console.log(api, "API")
    const json = await api.json()
    console.log(json, "json")
}
postapi();