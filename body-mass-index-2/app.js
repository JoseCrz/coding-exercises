
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
