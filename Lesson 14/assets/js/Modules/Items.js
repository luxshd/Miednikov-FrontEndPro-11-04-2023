const imgPath = './assets/img/'

export class Items {
    static items = [];
    static id = 1;

    constructor(category, model, price, imgUrl, maxFlightDistance, maxAltitude, maxSpeed) {
        this.id = Items.id;
        Items.id += 1;
        this.category = category
        this.model = model;
        this.price = price;
        this.maxFlightDistance = maxFlightDistance;
        this.maxAltitude = maxAltitude;
        this.maxSpeed = maxSpeed;
        this.imgUrl = imgPath + imgUrl;
        Items.items.push(this);
    }
}

export function createItem(category, model, price, img, maxFlightDistance, maxAltitude, maxSpeed) {
    new Items(category, model, price, img, maxFlightDistance, maxAltitude, maxSpeed);
}