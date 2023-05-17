import {Human} from "./modules/Human.js";
import {Car} from "./modules/Car.js";

// Создаём людей-владельцев
const stas = new Human('Stas', 29)
const anna = new Human('Anna', 29)
const john = new Human('John', 17)

// Создаём автомобили
const golf = new Car('Volkswagen', 'Golf mk4', 1998, 'Green', 'H993UA')
const lanos = new Car('Daewoo', 'Lanos', 2008, 'Beige', 'AE7777AT')
const zonda = new Car('Pagani', 'Zonda', 2010, 'Silver', 'GOD')

// Присваиваем владельцев
golf.setOwner(stas)
lanos.setOwner(anna)
zonda.setOwner(john) //Ошибка в консоль, возраст меньше 18

// Выводим данные об автомобилях
golf.getInfo()
lanos.getInfo()
zonda.getInfo()