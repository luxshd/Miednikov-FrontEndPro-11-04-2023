export class Categories{
    static categoriesList = [];
    constructor(url, name) {
        this.url = url;
        this.name = name;
        Categories.categoriesList.push(this);
    }
}

export function createCategory(url, name){
    new Categories(url, name);
}

export function getCategories(){
    const navbar = document.querySelector('.categories');
    Categories.categoriesList.forEach(cat => {
        navbar.innerHTML += `<li class="nav-item">
                               <a class="nav-link" id="${cat.url}">${cat.name}</a>
                             </li>`;
    })
}