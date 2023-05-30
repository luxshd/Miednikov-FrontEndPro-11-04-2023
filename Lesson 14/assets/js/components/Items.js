export class Items{
    static items = [];
    constructor(category, model, maxSpeed, maxAltitude, maxDistance, price, imgUrl, description) {
        this.category = category;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxAltitude = maxAltitude;
        this.maxDistance = maxDistance;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
    }
}

export function createItem(category, model, maxSpeed, maxAltitude, maxDistance, price, imgUrl, description){
    const item = new Items(category, model, maxSpeed, maxAltitude, maxDistance, price, imgUrl, description);
    Items.items.push(item);
}