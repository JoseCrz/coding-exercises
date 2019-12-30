const cesar = {
    name: 'César',
    age: 23,
    job: 'Engineer',
    greet: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, my name is ${this.name}, I'm ${this.age} and I'm currently working as a ${this.job}`)
        } else {
            console.log(`${timeOfDay} mates, I'm ${this.name}. ${this.age}, ${this.job}`)
        }
    }
}

cesar.greet('formal', 'night')

const eduardo = {
    name: 'Eduardo',
    age: 22,
    job: 'dentist'
}

// ! .call()
// ? The call method allow us to borrow the method of an object to a different object
// ? First we have to specify the new 'this', then the parameters the method receives

cesar.greet.call(eduardo, 'friendly', 'morning')
// output: morning mates, I'm Eduardo. 22, dentist

// ! .apply()
// ? The apply method does the same as call but recieves an array with the method parameters insted of multiple parameters

cesar.greet.apply(eduardo, ['formal', 'afternoon'])
//output: Good afternoon, my name is Eduardo, I'm 22 and I'm currently working as a dentist

// ! .bind()
// ? The bind method allow us create a copy of a function from a method of an object 
// ? with presetted parameters and store it in a variable for later use

const memo = {
    name: 'Guillermo',
    age: 33,
    job: 'designer'
}

const memoFormalGreet = cesar.greet.bind(memo, 'formal')

memoFormalGreet('evening')
// output: Good evening, my name is Guillermo, I'm 33 and I'm currently working as a designer
