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
    //Записываем длину массива
    let arrLength = 0
    do {
        arrLength = prompt('Укажите длину родительского массива целым числом:')
        if (arrLength == null) {
            return 'Вы нажали отмену'
        }
    } while (+arrLength === 0 || !Number.isInteger(+arrLength) || !arrLength)
    // Записываем элементы массива, если элемент - массив, оставляем пустые квадрытные скобки, позже пройдём по всем элементам [] и заполним их отдельно
    let arrElements = ''
    do {
        arrElements = prompt(`Укажите ${arrLength} элементов через пробел, если этот элемент - массив, напишите его в таком видe [] и оставьте пустым, позже мы его заполним.`)
        if (arrElements == null) {
            return 'Вы нажали отмену'
        }
    } while (arrElements.split(' ').length !== +arrLength)
    let result = arrElements.split(' ')

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '[]') {
            result[i] = createInnerArray(i)
        }
    }

    // Функция для создания дочерних массивов,с возможностью создавать многомерные массивы
    function createInnerArray(index) {
        //Записываем длину дочернего массива
        let childArrLength = 0
        let innerResult
        do {
            childArrLength = prompt(`Укажите длину дочернего массива, находящимуся по индексу ${index} целым числом:`)
            if (childArrLength == null) {
                return 0
            }
        } while (+childArrLength === 0 || !Number.isInteger(+childArrLength) || !childArrLength)

        // Записываем элементы внутреннего массива.
        let childArrElements = ''
        do {
            childArrElements = prompt(`Укажите ${childArrLength} элементов через пробел, если этот элемент - массив, напишите его в таком видe [] и оставьте пустым, позже мы его заполним.`)
            if (arrElements == null) {
                return ''
            }
            console.log(childArrElements)
        } while (childArrElements.split(' ').length !== +childArrLength)

        innerResult = childArrElements.split(' ')
        for (let i = 0; i < innerResult.length; i++) {
            if (innerResult[i] === '[]') {
                innerResult[i] = createInnerArray(i)
            }
        }

        return innerResult
    }

    return result
}

console.log(`Задача №3:\n${getUserArray()}\n\n`);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteChars() {
    const sentence = prompt('Введите текст:')
    if (!sentence) {
        return 'Вы ничего не ввели или нажали отмену'
    }
    const charsToDelete = prompt('Введите символы для удаления через пробел').split(' ')
    if (!charsToDelete) {
        return 'Вы ничего не ввели или нажали отмену'
    }
    let result = sentence
    //Убираем возможные пробелы по краям
    result = result.trim()
    charsToDelete.forEach(char => {
        do {
            const charIndex = result.indexOf(char)
            result = result.split('')
            result.splice(charIndex, 1)
            result = result.join('')
        }
        while (result.indexOf(char) !== -1)
    })
    return `Строка пользователя:\n${sentence}\n\nСимволы для удаления:\n${charsToDelete}\n\nСтрока пользователя после удаления символов:\n${result}`
}

console.log(`Задача №4:\n${deleteChars()}`)