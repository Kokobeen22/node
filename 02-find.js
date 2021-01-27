const cars = [
    {marka:"bmw", year: 2001},
    {marka:"honda", year: 2003},
    {marka:"tayota", year: 2004},
    {marka:"mers", year: 2001},
    {marka:"audi", year: 2005}
]

const car = cars.find((item) => item.marka === "tayota")
console.log(car.year);