import fetch from "node-fetch"
const url = 'https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists'

async function getAllToDoLists() {
    const data = await fetch('https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists')
    const jsonData = await data.json()
    console.log(jsonData)
}

async function getCompletedToDoLists() {
    const data = await fetch('https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists')
    const jsonData = await data.json()
    const filteredData = jsonData.filter(e => e.completed == true)
    console.log(filteredData)
}

async function updateCompleteToDoList(id) {
    let obj = {
        completed: false
    }
    const data = await fetch(`https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists/${id}`, {
        method: "PUT",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(obj)
    })
    const jsonData = await data.json()
    console.log(jsonData)
}

async function addToDoList() {
    let obj = {
        title: 'Alijan',
        completed: false,
    }
    const data = await fetch(`https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists/`, {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(obj)
    })
    const jsonData = await data.json()
    console.log(jsonData)
}

async function deleteToDoList(id) {
    const data = await fetch(`https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists/${id}`, {
        method: "DELETE",
    })
    const jsonData = await data.json()
    console.log(jsonData)
}

deleteToDoList(1)
