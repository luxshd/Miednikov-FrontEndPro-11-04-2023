// Дан масив
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.
let positiveArr = [];
arr.forEach(item => {
    if (item >= 0) {
        positiveArr.push(item);
    }
});
let result = positiveArr.reduce((prev, item) => {
    return prev + item;
});
console.log(`Сумма позитивных элементов равна ${result}\nКоличество позитивных элементов равно ${positiveArr.length}`);
console.log('\n');

// Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = Math.min(...arr);
let minElementIndex = arr.findIndex(item => item === minElement);
console.log(`Минимальный элемент массива: ${minElement}\nЕго индекс равен ${minElementIndex}`);
console.log('\n');

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = Math.max(...arr);
let maxElementIndex = arr.findIndex(item => item === maxElement);
console.log(`Максимальный элемент массива: ${maxElement}\nЕго индекс равен ${maxElementIndex}`);
console.log('\n');

// Визначити кількість негативних елементів.
result = 0;
arr.forEach(item => {
    if (item < 0) {
        result++
    }
});
console.log(`Количество отрицательных элементов равно ${result}`)
console.log('\n');

// Знайти добуток позитивних елементів.
result = positiveArr.reduce((prev, item) => prev * item);
console.log(`Произведение позитивных элементов равно ${result}`);