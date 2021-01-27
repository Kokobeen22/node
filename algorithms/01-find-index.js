const persons = [
    {name: "Nurkadur", age: 23},
    {name: "Asan", age: 27},
    {name: "Uson", age: 19},
    {name: "Aman", age: 17},
    {name: "Askar", age: 22},
    {name: "Uson", age: 17},
]

const index = persons.findIndex((persons) => persons.name === "Uson")
console.log(index);