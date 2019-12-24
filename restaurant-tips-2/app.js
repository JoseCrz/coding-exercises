/*
* This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
* John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
* Implement a tip calculator using objects and loops:
TODO 1. Create an object with an array for the bill values
TODO 2. Add a method to calculate the tip
TODO 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
TODO 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
* EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
* Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
TODO 5. Implement the same functionality as before, this time using Mark's tipping rules
TODO 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
TODO 7. Calculate the average tip for each family
TODO 8. Log to the console which family paid the highest tips on average
*/

const john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totalPaid: [],
    calcTips: function (bills) {
        bills.forEach(bill => {
            let tip
            if (bill < 50 ) {
                tip = bill * .2
            } else if (bill <= 200) {
                tip = bill * .15
            } else {
                tip = bill * .1
            }

            this.tips.push(tip)
            this.totalPaid.push(bill + tip)
        })
    }
}

const mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    tips: [],
    totalPaid: [],
    calcTips: function (bills) {
        bills.forEach(bill => {
            let tip
            if (bill < 100 ) {
                tip = bill * .2
            } else if (bill <= 300) {
                tip = bill * .1
            } else {
                tip = bill * .25
            }

            this.tips.push(tip)
            this.totalPaid.push(bill + tip)
        })
    }
}

const calcTipAverage = (tips) => {
    const sum = tips.reduce((total, tip) => total + tip)
    const avg = sum / tips.length
    return avg
}

const compareTips = (person1, person2) => {
    if (calcTipAverage(person1.tips) < calcTipAverage(person2.tips)) {
        console.log(`${person1.name} leaves better tips`)
    } else if (calcTipAverage(person1.tips) > calcTipAverage(person2.tips)) {
        console.log(`${person2.name} leaves better tips`)
    } else {
        console.log('they both leave the same tip')
    }
}
mark.calcTips(mark.bills)
john.calcTips(john.bills)

console.log(calcTipAverage(mark.tips))
console.log(calcTipAverage(john.tips))
compareTips(john,mark)