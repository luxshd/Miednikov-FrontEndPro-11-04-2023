export class Categories{
    // Хранит все созданные категории
    static categories = [];
    constructor(categoryName, url) {
        this.url = url;
        this.categoryName = categoryName;
        Categories.categories.push(this);
    }
}

export function createCategory(name, url){
    new Categories(url, name);
}