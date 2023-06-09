import {getCategories} from "./Modules/Categories.js";
import {showItems} from "./Modules/Navigation.js";
import {showItemInfo} from "./Modules/ItemInfo.js";
import {Items} from "./Modules/Items.js";

getCategories()

document.addEventListener('click', (e) => {
    // Клики по категориям
    if (e.target.classList[0] === 'nav-link') {
        showItems(e.target);
    }

    // Клики по карточкам товаров
    if (e.target.classList[0] === 'card'){
        showItemInfo(e.target)
    }

    // Клики по кнопке "купить" в информации о товаре
    if (e.target.classList[0] === 'buy-btn'){
        const item = Items.items[e.target.id -1];
        const mainWindow = document.querySelector('.main-window');
        document.querySelector('.item-info').innerHTML = '';
        mainWindow.innerHTML = `<p class="buy-text">You bought ${item.model} for $${item.price}</p>`;
        setTimeout(()=>{
            mainWindow.innerHTML = '';
        }, 1500)
    }
})