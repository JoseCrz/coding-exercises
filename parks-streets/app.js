class Construction {
    constructor (name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }

    calculateAge () {
        const currentYear = new Date().getFullYear()
        return currentYear - this.buildYear
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