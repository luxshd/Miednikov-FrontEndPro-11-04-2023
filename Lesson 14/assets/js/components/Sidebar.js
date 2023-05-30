import {Categories} from "./Categories.js";

export function addCatsToSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const categoriesList = Categories.categories;

    categoriesList.forEach(category => {
        const a = document.createElement('a');
        a.setAttribute('url', category.url);
        a.innerText = category.categoryName;
        a.classList.add('category_link');
        sidebar.append(a);
    })
}