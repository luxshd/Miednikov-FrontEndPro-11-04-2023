// Модуль для создания категорий и товаров
import {createCategory} from "./Categories.js";
import {createItem} from "./Items.js";

// Создаём категории
createCategory('singleengine', 'Single engine');
createCategory('jets', 'Jets');
createCategory('turboprop', 'Turboprop');
createCategory('helicopters', 'Helicopters');


// Создаём товары
// Реактивные
createItem('jets', 'Airbus A319', 78000000, '319.jpg', 6850, 39041, 480);
createItem('jets', 'Airbus A320', 85000000, '320.jpg', 6150, 39041, 480);
createItem('jets', 'Airbus A321', 115000000, '321.jpg', 5950, 39041, 480);
createItem('jets', 'Airbus A340', 500000000, '340.jpg', 15000, 41000, 492);
createItem('jets', 'Airbus A350', 300000000, '350.jpg', 15200, 42979, 510);
createItem('jets', 'Airbus A380', 500000000, '380.jpg', 15400, 43028, 510);
createItem('jets', 'Boeing 737', 90000000, '737.jpg', 6230, 41010, 350);
createItem('jets', 'Boeing 747', 418000000, '747.jpg', 14815, 40682, 565);
createItem('jets', 'Boeing 767', 185000000, '767.jpg', 9400, 42979, 459);
createItem('jets', 'Boeing 777', 442000000, '777.jpg', 11135, 43110, 510);
createItem('jets', 'Boeing 787', 338000000, '787.jpg', 6950, 42979, 515);

// Одномоторные
createItem('singleengine', 'An 2', 128000, 'an2.jpg', 1200, 12795, 137);
createItem('singleengine', 'Cessna 152', 58000, 'cessna152.jpg', 768, 15305, 109);
createItem('singleengine', 'Mooney M20', 145000, 'mooneym20.jpg', 2676, 25016, 241);

// Турбовинтовые
createItem('turboprop', 'An 12', 1500000, 'an12.jpg', 3600, 33464, 419);
createItem('turboprop', 'Dash Q300', 6750000, 'dashq300.jpg', 1820, 23934, 286);
createItem('turboprop', 'Dash Q400', 12500000, 'dashq400.jpg', 1820, 26902, 360);
createItem('turboprop', 'Dornier Do328', 820000, 'dornierdo328.jpg', 1850, 31020, 335);

// Вертолёты
createItem('helicopters', 'Agusta Westland 109', 4200000, 'aw109.jpg', 948, 19599, 167);
createItem('helicopters', 'Bell 206', 900000, 'bell206.jpg', 661, 13500, 121);
createItem('helicopters', 'Robinson r22', 230000, 'r22.jpg', 483, 13943, 94);
createItem('helicopters', 'Robinson r44', 350000, 'r44.jpg', 650, 13943, 129);
createItem('helicopters', 'Robinson r66', 950000, 'r66.jpg', 650, 10000, 140);