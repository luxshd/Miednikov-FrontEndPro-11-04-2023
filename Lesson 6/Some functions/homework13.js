//     Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

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

console.log(`Задача №1:\n${getAverageOfNumbers(arr)}\n\n`)

//     Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, sign, y) {
    switch (sign) {
        case '+':
            return result = x + y;
        case '-':
            return result = x - y;
        case '*':
            return result = x * y;
        case '/':
            return result = x / y;
        case '%':
            return result = x % y;
        case '^':
            return result = x ** y;
        default: {
            return 'Что-то пошло не так O_o';
        }
    }
}

console.log(`Задача №2:\n${doMath(3, '^', 2)}\n\n`);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function getUserArray() {
    let arrLength = null
    do{
        arrLength = prompt('Введите длину массива')
        console.log(arrLength)
        if(arrLength == null){
            return 'Вы нажали отмену :('
        }
    } while (!Number.isInteger(+arrLength))
    console.log('DOne')
}

console.log(getUserArray())