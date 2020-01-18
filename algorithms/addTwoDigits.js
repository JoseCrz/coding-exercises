/* 
TODO You are given a two-digit integer n. Return the sum of its digits.

* Example
* For n = 29, the output should be addTwoDigits(n) = 11.
*/

const addTwoDigits = n => {
    const numbers = n.toString().split('').map(number => parseInt(number))
    const sum = numbers.reduce((sum, number) => sum + number)
    console.log(sum)
}

addTwoDigits(29)
addTwoDigits(48)
addTwoDigits(10)
addTwoDigits(52)
addTwoDigits(99)