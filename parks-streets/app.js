class Construction {
    constructor (name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }

    calculateAge () {
        const currentYear = new Date().getFullYear()
        this.age = currentYear - this.buildYear
        return this.age
    }
}

class Park extends Construction {
    constructor (name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear)
        this.numberOfTrees = numberOfTrees
        this.parkArea = parkArea
    }

    calculateTreeDensity () {
        this.treeDensity = this.numberOfTrees / this.parkArea
        return this.treeDensity
    }
}

class Street extends Construction {
    constructor(name, buildYear, streetLength) {
        super(name, buildYear)
        this.streetLength = streetLength
    }

    getLength () {
        return this.streetLength
    }
}

const parks = {
    allParks: [],
    averageAge: function () {
        let sum = 0
        this.allParks.forEach(park => {
            console.log(park.calculateAge())
            sum += park.calculateAge()
        })
        const totalParks = this.allParks.length
        console.log(`our ${totalParks} parks have an average age of ${sum/totalParks}`)
    },

    showInfo: function () {
        this.allParks.forEach((park) => {
            console.log(`${park.name} has a tree density of ${park.calculateTreeDensity()}`)
        })
    },

    showMostTreesPark: function () {
        let desiredIndex = 0
        let max = 0
        this.allParks.forEach((park, index) => {
            if (park.numberOfTrees > max) {
                max = park.numberOfTrees
                desiredIndex = index
            }
        })
        const desiredPark = this.allParks[desiredIndex]
        console.log(`${desiredPark.name} has the most trees`)
    }

}

const streets = {
    allStreets: [],
    _totalLength: function () {
        let sum = 0
        this.allStreets.forEach(street => {
            sum += street.streetLength
        })
        return sum
    },
    _averageLength: function () {
        sum = this._totalLength()
        return sum / this.allStreets.length
    },
    _classifyStreets: function () {
        this.allStreets.forEach(street => {
            if (street.streetLength <= 2) {
                street.class = 'tiny'
            } else if (street.streetLength <= 5) {
                street.class = 'small'
            } else if (street.streetLength <= 7) {
                street.class = 'normal'
            } else if (street.streetLength <= 10) {
                street.class = 'big'
            } else {
                street.class = 'huge'
            }
        })
    },
    _showInfo: function () {
        this.allStreets.forEach(park => {
            console.log(`${park.name}, built in ${park.buildYear}, is a ${park.class} street`)
        })
    },
    showAllInfo: function () {
        console.log(`our ${this.allStreets.length} streets have a total length of ${this._totalLength()} km, with an average of ${this._averageLength()}km`)
        this._classifyStreets()
        this._showInfo()
    }

}

parks.allParks.push(new Park('Juarez', 1860, 800, 300))
parks.allParks.push(new Park('Berros', 1960, 850, 300))
parks.allParks.push(new Park('Centenario', 1980, 900, 300))
parks.allParks.push(new Park('Lagos', 1970, 100, 300))

streets.allStreets.push(new Street ('Lazaro', 1980, 20))
streets.allStreets.push(new Street ('20 de Nov', 1990, 15))
streets.allStreets.push(new Street ('Justino', 2002, 5))

// parks.averageAge()
// parks.showInfo()
// parks.showMostTreesPark()

streets.showAllInfo()