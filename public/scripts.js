const query = `{ allTodos {id, text, finished} }`

const response = await fetch("http://localhost/8085/graphql", {
    method : "POST",
    headers : {
        "Content-type" : "application/json"
    },
    body: JSON.stringify({query : query})
})

console.log(await response.json)