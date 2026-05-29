export function getStockData() {
    return {
        name: 'Name: QtechAI',
        sym: 'Symbol: QTA',
        price: `Price: ${price()}`,
        time: `Time: ${date()}`
    }
}

function date() {
    const timeNow = new Date()
    // const timeStamp = timeNow.toString().slice(0, 8)
    return timeNow.toLocaleTimeString().slice(0, 8)
    // return timeNow.toString().slice(0, 8)
}

function price() {
    // let ranNumber
    // for (let i = 0; i<3; i++){
    //     ranNumber = Number(Math.random(i).toFixed(2)) 
    // }
    // return ranNumber
    return Number(Math.random()*3).toFixed(2) 
    // return ranNumber 
}
// console.log(getStockData())

