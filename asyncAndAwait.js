const genarateNumber = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random()*10)

        if (randomNumber >= 5){
            resolve("The Number is: " + randomNumber)
        }
        else{
            reject("Error: The number is less than 5")
        }
    })
}


const checkNumber = async () => {
    
    try {
        const randomNumber = await genarateNumber()
        console.log(randomNumber)
    } catch (error) {
        console.log(error)
    }
}

checkNumber()
