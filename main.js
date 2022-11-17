

function costeHotel(num) {
    return num * 140
}


function costeAlquilerCoche(num) {
    let result = 0

    if (num >= 3 && num <= 6) {
        result = (num * 40) - 20
        return result
    }
    if (num >= 7) {
        result = (num * 40) - 50
        return result
    } else {
        return num * 40
    }
}


function costeAvion(city, num) {
    let result = 0

    if (city === "Oviedo") {
        result = num * 15
    } else if (city === "Tokyo") {
        result = num * 700
    } else if (city === "Madrid" || city === "Barcelona") {
        result = num * 90
    }

    if (num > 3) {
        return result - (result * 0.1)
    } else {
        return result
    }
}

const numNights = document.querySelector("#nights")
const city = document.querySelector("#citys")
const calculateCost = document.querySelector("#calculate")
const hotelCost = document.querySelector("#hotel")
const travelCost = document.querySelector("#travel")
const carCost = document.querySelector("#car")
const totalCost = document.querySelector("#TotalCost")


function caluclarCoste() {

    hotelCost.value = costeHotel(numNights.value)
    travelCost.value = costeAvion(city.value, numNights.value)
    carCost.value = costeAlquilerCoche(numNights.value)
    totalCost.value = Number(hotelCost.value)  + Number(travelCost.value) + Number(carCost.value)

}


calculateCost.onclick = () => {
    caluclarCoste()     
}




