export default class Human {
    constructor(humanName, age) {
        this.humanName = humanName;
        this.age = age;
    }

    getInfo(){
        return `${this.humanName}, ${this.age} y.o.`
    }
}