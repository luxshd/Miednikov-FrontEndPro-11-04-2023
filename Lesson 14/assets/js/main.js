import {addCatsToSidebar} from "./Modules/Sidebar.js";
import {Categories, createCategory} from "./Modules/Categories.js";
import {Items, createItem} from "./Modules/Items.js";
import {showItemInfo} from "./Modules/ItemInfo.js";

createCategory('singleengine', 'Одномоторные');
createCategory('doubleengine', 'Двухмоторные');
createCategory('jets', 'Реактивные');
createCategory('hellicopters', 'Вертолёты');
createCategory('military', 'Военные');

addCatsToSidebar()

createItem('jets', 'Boeing 737', 350, 41000, 8000000, '737');
createItem('jets', 'Boeing 747', 490, 35105, 1500000, '747');
createItem('jets', 'Boeing 767', 360, 43000, 1500000, '767');
createItem('jets', 'Boeing 777', 512, 43100, 1500000, '777');
createItem('jets', 'Boeing 787', 515, 43100, 1500000, '787');
createItem('jets', 'Airbus 319', 514, 41000, 1500000, '319');
createItem('jets', 'Airbus 320', 500, 41000, 1500000, '320');
createItem('jets', 'Airbus 321', 470, 39800, 1500000, '321');
createItem('jets', 'Airbus 340', 504, 36000, 1500000, '340');
createItem('jets', 'Airbus 350', 487, 40000, 1500000, '350');
createItem('jets', 'Airbus 380', 511, 43000, 1500000, '380');
const nav = [];
Categories.categories.forEach(category => {
    nav.push(category.url);
})
window.addEventListener('click', (e) => {
    const url = e.target.getAttribute('url');
    switch (url) {
        case 'singleengine' :
            Items.showItems('singleengine');
            break;
        case  'doubleengine':
            Items.showItems('doubleengine');
            break;
        case 'jets':
            Items.showItems('jets');
            break;
        case 'hellicopters':
            Items.showItems('hellicopters');
            break;
        case 'military':
            Items.showItems('military');
            break;
        default:
            break
    }
})

window.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'item_card'){
        const id = e.target.getAttribute('id')
        showItemInfo(id)
    }
})