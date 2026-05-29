// const getSpentAlert = function(amount){
//     return `Warning! you just spent £${amount}`
// }

const getSpentAlert= amount => {
    if (amount > 50 ){
       return `Warning! You've just spent some ${amount}!`
    }
}  


console.log(getSpentAlert( 200))