import { getStockData } from './fakeStockAPI.js'

setInterval(function () {
    const stockData = getStockData()
    return renderStockTicker(stockData)
},1500)

let prevPrice = null

function renderStockTicker(stockData){
    const stockDisplayName = document.getElementById('name-El')
    const stockDisplaySymbol = document.getElementById('symbol-El')
    const stockDisplayPrice = document.getElementById('price-value')
    const stockDisplayPriceIcon = document.getElementById('icon-El')
    const stockDisplayTime = document.getElementById('time-El')

    const { name, sym, price, time } = stockData

    const priceDirectionIcon = price > prevPrice ? 'green.svg' : price < prevPrice ? 'red.svg' : 'grey.svg'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = `./svg/${priceDirectionIcon}`
    priceIconElement.alt = 'Price direction icon'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    prevPrice = price
}





