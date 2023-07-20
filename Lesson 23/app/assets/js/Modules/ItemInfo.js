import {Items} from "./Items.js";
// Выводит инфо о товаре в правый блок
export function showItemInfo(target) {
    const item = Items.items[target.id - 1];
    const itemInfo = document.querySelector('.item-info');
    itemInfo.setAttribute('id', target.id - 1)
    itemInfo.innerHTML = `<img src="${item.imgUrl}" alt="">
                          <p><b>Model:</b> ${item.model}</p>
                          <p><b>Max flight distance:</b> ${item.maxFlightDistance} km</p>
                          <p><b>Max flight altitude:</b> ${item.maxAltitude} feet</p>
                          <p><b>Max flight speed:</b> ${item.maxSpeed} knots</p>
                          <p><b>Price:</b> $${item.price}</p>
                          <button id="${target.id}" type="button" class="buy-btn btn btn-secondary">Buy</button>`;

}