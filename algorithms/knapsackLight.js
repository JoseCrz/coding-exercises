/*
* You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

* Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

? Example
? For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
? knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
? You can only carry the first item.

? For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
? knapsackLight(value1, weight1, value2, weight2, maxW) = 16.
? You're strong enough to take both of the items with you.

? For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
? knapsackLight(value1, weight1, value2, weight2, maxW) = 7.
? You can't take both items, but you can take any of them.
*/
const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
    const item1 = {
        value: value1,
        weight: weight1
    }

    const item2 = {
        value: value2,
        weight: weight2
    }

    if ((item1.weight + item2.weight) <= maxW) {
        return item1.value + item2.value

    } else if (item1.value > item2.value && item1.weight <= maxW) {
        return item1.value

    } else if (item2.value > item1.value && item2.weight <= maxW) {
        return item2.value

    } else if (item1.weight <= maxW) {
        return item1.value
    } else {
        return 0
    }
}

knapsackLight(10, 15, 6, 4, 8) // 10
knapsackLight(10, 5, 6, 4, 9) // 16
knapsackLight(5, 3, 7, 4, 6) //7
knapsackLight(15, 2, 20, 3, 2) // 15
knapsackLight(3, 5, 3, 8, 10) // 3