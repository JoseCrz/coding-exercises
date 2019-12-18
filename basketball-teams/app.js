/*
* César, Lalo and Eugenio each play basketball in different teams. In the latest 3 games César's team
* scored 89, 120 and 103 points; Lalo's team scored 116, 94 and 123 points, and Eugenio's Team scored 97,
* 134, and 105 points.

TODO: 1.- Calculate the average score for each team
TODO: 2.- Decide which team wins in average (highest average score) and print the winner in the console.

*/

const cesarsTeam = [89, 120, 103]
const cesarsTotal = cesarsTeam.reduce((total, points) => total + points)
const cesarsAverage = cesarsTotal / 3

const lalosTeam = [116, 94, 123]
const lalosTotal = lalosTeam.reduce((total, points) => total + points)
const lalosAverage = lalosTotal / 3

const eugeniosTeam = [97, 134, 105]
const eugeniosTotal = eugeniosTeam.reduce((total, points) => total + points)
const eugeniosAverage = eugeniosTotal / 3

console.log(cesarsAverage, lalosAverage, eugeniosAverage)

if (cesarsAverage > lalosAverage && cesarsAverage > eugeniosAverage) {
    console.log('Cesar\'s team won')
} else if (lalosAverage > cesarsAverage && lalosAverage > eugeniosAverage) {
    console.log('Lalo\'s team won')
} else if (cesarsAverage === lalosAverage && lalosAverage === eugeniosAverage) {
    console.log('They all tied')
} else {
    console.log('Eugenio\'s team won')
}

