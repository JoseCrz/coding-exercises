/* 
TODO: Given an integer n, return the largest number that contains exactly n digits.

*Example
*For n = 2, the output should be largestNumber(n) = 99.
*/

const largestNumber = n => {
    let auxArray = []
    for (let i = 0; i < n; i++) {
        auxArray.push('9')
    }
    const largestNumber = parseInt(auxArray.join(''))
    return largestNumber
}

largestNumber(2)