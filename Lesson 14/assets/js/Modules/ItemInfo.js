import {Items} from "./Items.js";

export function showItemInfo(id){
    const itemInfo = document.querySelector('.item_info');
    const item = Items.items.filter(item => item.id === id)[0];
    itemInfo.innerHTML = `<img src="${item.imgUrl}" alt="">
<p>Model: ${item.model}</p>
<p>Max speed: ${item.maxSpeed} knots</p>
<p>Max altitude: ${item.maxAltitude} feet</p>
<p>Price: $${item.price}</p>
<button id="${id}" class="buy_btn">Buy</button>`;
}