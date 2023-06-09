import {getCategories} from "./Modules/Categories.js";
import {showItems} from "./Modules/Navigation.js";
import {showItemInfo} from "./Modules/ItemInfo.js";
import {getCheckout, getValidation} from "./Modules/Checkout.js";

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

    // Выводим форму при клике на кнопку "купить"
    if (e.target.classList[0] === 'buy-btn'){
        const itemInfo = document.querySelector('.item-info');

        // Проверка, не существует ли уже формы, если нет - выводим её.
        if (!document.querySelector('form')){
            itemInfo.innerHTML += getCheckout(itemInfo.id);
        }
    }

    if (e.target.type === 'submit'){
        getValidation()
    }

    if (e.target.id === 'toHomePage'){
        const itemInfo = document.querySelector('.item-info');
        const mainWindow = document.querySelector('.main-window');
        itemInfo.innerHTML = ``;
        mainWindow.innerHTML = ``;
    }
})