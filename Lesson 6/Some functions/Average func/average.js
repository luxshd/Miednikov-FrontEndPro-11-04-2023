//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const arr = [3, 3, 'f', 'f4', true, 6, {a: 5, v: 'f'}];

function getAverageOfNumbers(arr) {
    let result = 0;
    let counter = 0;
    arr.forEach(item => {
        if (typeof item == 'number') {
            counter++;
            result += item;
        }
    })
    return result / counter;
}

console.log(`Задача №1:\n${getAverageOfNumbers(arr)}`)