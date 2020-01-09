
// ! NOT PASSING 😞

const inputArray = ["ab", 
"bb", 
"aa"]

function stringArrangement (inputArray) {
    const separatedStrings = inputArray.map(element => element.split(''))
    
    const getDifferences = function (array1, array2) {
        let sum = 0
        array1.forEach((element, index) => {
            if (element !== array2[index]) {
                sum += 1
            }
        })
        console.log(`difference: ${sum}`)
        return sum
    }
    
    const factorial = function (number) {
        let sum = 1
        for (let i = 1; i <= number; i++) {
            sum *= i
        }
        return sum
    }
    
    let totalDifferences = 0
    separatedStrings.forEach((separatedString, index) => {
        for (let i = index + 1; i < separatedStrings.length; i++) {
            console.log(separatedString, separatedStrings[i])
          totalDifferences += getDifferences(separatedString, separatedStrings[i]) 
        }
    })
    
    console.log(totalDifferences,factorial(inputArray.length)) 
    if(totalDifferences > 0 && totalDifferences < factorial(inputArray.length)) {
        console.log(true)
    } else {
        console.log(false)
    }
}




