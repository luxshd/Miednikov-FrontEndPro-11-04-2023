import {Items} from "./Items.js";

// Выводит товары в центральный блок, в зависимости от категории
export function showItems(target) {
    const mainWindow = document.querySelector('.main-window');
    mainWindow.innerHTML = `<h2>${target.innerHTML}</h2>`;
    const items = Items.items.filter(item => item.category === target.id);
    items.forEach(item => {
        mainWindow.innerHTML += `<div class="card" id="${item.id}">
                                    <img src="${item.imgUrl}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <p class="card-text">${item.model}</p>
                                    </div>
                                 </div>`;
    })
}