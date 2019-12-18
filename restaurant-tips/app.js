/*
* José and his family went on a holiday and went to 3 different restaurants.
* The bills were: $124, $48 and $268.

* To tip the waiter a fair amount, José created a simple tip calculator. 
* He likes to tip 20% if the bill less than $50,
* 15% when the bill is between $50 and $200
* and 10% when the bill is more than $200

TODO: in the end, José would like to have 2 arrays:
TODO: 1.- Containing all three tips
TODO: 2.- Containing all three final paid amounts (bill + tip)

TODO: print:
TODO:   1.- bills array
TODO:   2.- tips array
TODO:   3.- final paid array

*/

const bills = [124, 48, 268]
let tips = []

bills.forEach(amount => {
    let tip = 0
    
    if (amount < 50) {
        tip = amount * .2

    } else if (amount < 200) {
        tip = amount * .15

    } else {
        tip = amount * .1
    }

    tips.push(tip)
})

console.log(tips)

const totalPaid = bills.map((bill, index) => {
    return bill + tips[index]
})

console.log(totalPaid)