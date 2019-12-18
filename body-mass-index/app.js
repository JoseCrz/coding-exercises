/*
* Calculate the Body Mass Index of two given people.
? The BMI is calculted using the following formula:
? BMI = mass / height^2
? mass => kilograms, height => meters.

TODO 1.- Store the two people's mass and height in variables
TODO 2.- Calculate both theirs BMI's
TODO 3.- Create a boolean variable containing information about which of the two has the highest BMI
TODO 4.- Print a string to the console containing a message like: 'is {person1} BMI higher than {person2}? {true}'
*/

const person1 = prompt("what's the name of the first person?")
const person1Mass = parseFloat(prompt(`what's ${person1} mass?`))
const person1Height = parseFloat(prompt(`what's ${person1} height?`))

const person2 = prompt("what's the name of the second person?")
const person2Mass = parseFloat(prompt(`what's ${person2} mass?`))
const person2Height = parseFloat(prompt(`what's ${person2} height?`))

const person1BMI = person1Mass / person1Height**2
const person2BMI = person2Mass / person2Height**2

if (person1BMI > person2BMI) {
    alert(`${person1} has a higher BMI`)
} else if (person1BMI === person2BMI) {
    alert(`${person1} and ${person2} have the same BMI`)
} else {
    alert(`${person2} has a higher BMI`)
}