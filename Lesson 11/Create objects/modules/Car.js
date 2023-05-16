export default class Car {
    owner = null;

    constructor(brand, model, yearOfManufacture, color, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.color = color;
        this.licensePlate = licensePlate;
    }

    setOwner(owner) {
        if (owner && owner.age >= 18) {
            this.owner = owner;
        } else {
            return console.log(`${owner.humanName} is younger then 18`)
        }
    }

    getInfo() {
        console.log(`Brand: ${this.brand}
Model: ${this.model}
Year: ${this.yearOfManufacture}
Color: ${this.color}
License plate: ${this.licensePlate}
Owner: ${this.owner ? this.owner.getInfo() : 'None'}`)
    }
}