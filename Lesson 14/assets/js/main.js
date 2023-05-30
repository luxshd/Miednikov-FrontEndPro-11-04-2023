import {addCatsToSidebar} from "./components/Sidebar.js";
import {Categories, createCategory} from "./components/Categories.js";
import {Items, createItem} from "./components/Items.js";


createCategory('singleengine', 'Одномоторные');
createCategory('doubleengine','Двухмоторные');
createCategory('jets','Реактивные');
createCategory('hellicopters','Вертолёты');
createCategory('military','Военные');

addCatsToSidebar()

createItem('jets', 'b737', 780, 9000, 4000, 8000000, 'img', 'pass');
createItem('singleengine', 'An-2', 350, 3000, 650, 1500000, 'img', 'private');
const nav = [];
Categories.categories.forEach(category => {
    nav.push(category.url);
})
window.addEventListener('click', (e)=> {
    console.log(e.target.getAttribute('url'))
})