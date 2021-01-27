// const products = [
//     {name:"mandarin", price:145}
//     {name:"mandarin", price:145}
//     {name:"mandarin", price:145}
//     {name:"mandarin", price:145}
// ]

const numbers = [1,2,3,12,3,5]

numbers.reduce((ans, item) => {
    return ans + item
},0)