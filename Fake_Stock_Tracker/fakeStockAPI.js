function getStockData(){
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: price(),
        time: date()
    }
}

function date () {
    const timeNow = new Date()
    const timeStamp = timeNow.toString().slice(0, 8)
}

function price(){
    const ranNum = 
}



export default getStockData()