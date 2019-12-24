/* 
* Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
TODO 1. For each of them, create an object with properties for their full name, mass, and height
TODO 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
TODO 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
*/
const cesar = {
    firstName: 'César Iván',
    lastName: 'Castillo Jímenez',
    mass: 53,
    height: 1.64,
    calcBMI: function () {
        this.BMI = this.mass / this.height**2
        return this.BMI
    }
}

const lalo = {
    firstName:'Jesús Eduardo',
    lastName: 'Castillo Jímenez',
    mass: 49,
    height: 1.63,
    calcBMI: function () {
        this.BMI = this.mass / this.height**2
        return this.BMI
    }
}

if (cesar.calcBMI() > lalo.calcBMI()) {
    console.log(`${cesar.firstName} ${cesar.lastName} has a bigger BMI (${cesar.BMI})`)
}else if (cesar.BMI === lalo.BMI) {
    console.log('They have the same body mass index')
} else {
    console.log(`${lalo.firstName} ${lalo.lastName} has a bigger BMI (${lalo.BMI})`)
}
