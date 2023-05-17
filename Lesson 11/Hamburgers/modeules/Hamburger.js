export class Hamburger {
    // Массивы хранят в себе значения Цены[0] и Каллорий[1]
    // Доступные размеры
    static SIZE_SMALL = [50, 20]
    static SIZE_BIG = [100, 40]

    // Доступные начинки
    static STUFFING_CHEESE = [10, 20]
    static STUFFING_SALAD = [20, 5]
    static STUFFING_POTATO = [15, 10]

    // Доступные добавки
    static TOPPING_SAUCE = [15, 0]
    static TOPPING_MAYO = [20, 5]

    constructor(...args) {
        this.price = 0;
        this.callories = 0;
        args.forEach(arg => {
            this.price += arg[0]
            this.callories += arg[1]
        })
    }

    addTopping(...toppings) {
        toppings.forEach(topping => {
            this.price += topping[0]
            this.callories += topping[1]
        })
    }

    calculate(){
        return this.callories
    }
    calculatePrice() {
        return this.price
    }
}