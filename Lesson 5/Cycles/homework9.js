// Написати цикли, які зможуть:
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let nums = '';
for (let i = 10; i <= 20; i++) {
    // Проверка, есть ли элементы, чтобы запятая не была первым символом
    if (nums) {
        nums += `, ${i}`;
    } else {
        nums += i;
    }
}
console.log(`Числа от 10 до 20 через запятую: \n${nums}`)
console.log(`\n`);

// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    // Проверка, есть ли элементы, чтобы запятая не была первым символом
    if (nums) {
        nums += `, ${i * i}`;
    } else {
        nums += i;
    }
}
console.log(`Квадраты чисел от 10 до 20 через запятую: \n${nums}`);
console.log(`\n`);

// Вивести таблицю множення на 7.
console.log('Таблица умножения на 7:');
const factor = 7;
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
digits.forEach(digit => {
    console.log(`${factor} * ${digit} = ${factor * digit}`);
})
console.log(`\n`);

// Знайти суму всіх цілих чисел від 1 до 15.
let arrNumsTo15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result = arrNumsTo15.reduce((prev, item) => {
    return prev + item;
})
console.log(`Сумма всех целых чисел от 1 до 15 равна ${result}`);
console.log(`\n`);

// Знайти добуток усіх цілих чисел від 15 до 35.
result = 1;
for (let i = 15; i <= 35; i++) {
    result *= i;
}
console.log(`Произведение всех целых чисел от 15 до 35 равно ${result}`)
console.log(`\n`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
result = 0;
const endPoint = 500;
for (let i = 1; i <= endPoint; i++) {
    result += i;
}
console.log(`Среднее арифметическое чисел от 1 до ${endPoint} равно ${result / endPoint}`);
console.log(`\n`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
result = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        result += i;
    }
}
console.log(`Сумма всех парных чисел от 30 до 80 равна ${result}`);
console.log(`\n`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
result = [];
for (let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        result.push(i);
    }
}
console.log(`Массив всех чисел от 100 до 200 кратных 3: \n${result}`);