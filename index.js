let cars = ["Camry", "BMW", "Mersedes"]

// cars.forEach((car) => {
//     console.log(`${car} 2003 года`)
// })

let newCars = cars.map((elem) => {
    console.log(elem + " 2003 год")
    return elem
})
