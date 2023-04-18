// Запрашиваем длину массива
const USER_ARRAY_LENGTH = +prompt('Введите длину массива:');

// Создаём массив заданной длины
let userArray = new Array(USER_ARRAY_LENGTH);
console.log('Empty array', userArray);

// Заполняем массив из строки элементов пользователя
let userElements = '';

// Понимаю, что while ещё не проходили, но хотел заставить пользователя ввести кол-во элементов равное заданной длине
while (userElements.split(' ').length != USER_ARRAY_LENGTH){
    userElements = prompt(`Введите элементы массива через пробел в количестве ${USER_ARRAY_LENGTH} шт.`);
}
userArray = userElements.split(' ');
console.log('Filled array', userArray);

// Сортировка массива по возрастанию для строк и чисел
userArray.sort();
userArray.sort((a, b) => {return a - b});
console.log('Sorted array', userArray);

// Удаляю элементы массива, при условии, что длина массива это позволяет
if (userArray.length >= 4){
    userArray.splice(1, 3);
} else {
    console.log(`Срез массива со 2-го по 4-й элементы включительно невозможен, т.к. массив имеет длину ${userArray.length}`);
}
console.log('Spliced array', userArray);