function checkUsername (userName){
    if (userName){
        console.log(userName)
    } else {
        console.log('I execute')
        throw new Error ('No username provided')
        console.log('I do not execute')
    }
    
}

checkUsername()

// String()
// Number()
// Array()
// Object()
// Boolean()

// const person = new Boolean()

// console.log(person)