import { cars } from "../data.js"

export const carsController = (req, res) => {
    let filteredData = cars

    const {brand, model, year, price, color} = req.query

    if(brand) {
        filteredData = filteredData.filter(car => {
            return car.brand.toLowerCase() === brand.toLowerCase()
        })
    }
    if(year) {
        filteredData = filteredData.filter(car => {
            return car.year === Number(year)
        })
    }
    if(price) {
        filteredData = filteredData.filter(car => {
            return car.price === Number(price)
        })
    }
    if(color) {
        filteredData = filteredData.filter(car => {
            return car.color.toLowerCase() === color.toLowerCase()
        })
    }
    if(model) {
        filteredData = filteredData.filter(car => {
            return car.model.toLowerCase() === model.toLowerCase()
        })
    }
    const emptyArr = [] 
    if(!filteredData.length) {
        res.json("No cars found!")
    } else {
        res.json(filteredData)
    }
    
}

export const greetController = (req, res) => {
    res.json("Hello from express server!")
}