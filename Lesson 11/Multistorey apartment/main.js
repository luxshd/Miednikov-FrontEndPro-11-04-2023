import {Human} from "./modules/Human.js";
import {Apartment} from "./modules/Apartment.js";
import {Building} from "./modules/Building.js";

// Лимит квартир
const apartmentsLimit = 2

// Создаём людей-жителей
const stas = new Human('Stas', 'm')
const anna = new Human('Anna', 'w')
const julia = new Human('Julia', 'w')
const roman = new Human('Roman', 'm')

// Создаём квартиры
const apartment1 = new Apartment()
const apartment2 = new Apartment()
const apartment3 = new Apartment()

// Заселяем квартиры жильцами
apartment1.addResident(stas)
apartment1.addResident(anna)
apartment2.addResident(julia)
apartment3.addResident(roman)

// Строим дом
const house = new Building(apartmentsLimit)

// Регистрируем квартиры в БТИ :)
house.addApartment(apartment1)
house.addApartment(apartment2)
house.addApartment(apartment3) // Ошибка! Превышен лимит

// Выводим экземпляр класса дом в консоль
console.log(house)