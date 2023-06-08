import {getItemCard} from "./ItemCards.js";
export class Items{
    static items = [];
    static id = 1;
    constructor(category, model, maxSpeed, maxAltitude, price, imgUrl) {
        this.id = 'i' + Items.id;
        this.category = category;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxAltitude = maxAltitude;
        this.price = price;
        this.imgUrl = 'assets/img/' + imgUrl + '.jpg';
        Items.id += 1;
    }

    static showItems(category){
        const mainWindowRow = document.querySelector('.main_window_row');
        mainWindowRow.innerHTML = '';
        const items = Items.items.filter(item => item.category === category);
        items.forEach(item => {
            mainWindowRow.innerHTML += (getItemCard(item.id, item.imgUrl, item.model))
        })
    }
}

export function createItem(category, model, maxSpeed, maxAltitude, price, imgUrl){
    const item = new Items(category, model, maxSpeed, maxAltitude, price, imgUrl);
    Items.items.push(item);
}