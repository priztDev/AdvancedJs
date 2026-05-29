// function speedWarning (speed) {
//     return `You are going at ${speed} mph!`
// }

const speedWarning = (speedLimit, driverSpeed ) => {
    if(driverSpeed > speedLimit){
       return `You are going at ${driverSpeed} mph!`
    } else { return `You ared going at ${speedLimit} mph!`}
} 

console.log(speedWarning(60,40))