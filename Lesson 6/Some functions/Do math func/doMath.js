//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath() {
    let x = null
    let y = null
    let sign = null
    let isValidSign = false

    // Проводим валидацию введённых данных
    do {
        x = prompt('Введите X, или оставьте пустым, чтобы получить 0:')
        if (x == null) return 'Вы нажали отмену'
    }
    while (!Number.isInteger(+x))

    do {
        sign = prompt('Введите знак +,-,*,/,% или ^')
        if (sign == null) return 'Вы нажали отмену'
        '+,-,*,/,%,^'.split('').forEach(item => {
            if (sign === item) isValidSign = true
        })
    } while (!isValidSign)

    do {
        y = prompt('Введите Y, или оставьте пустым, чтобы получить 0:')
        if (y == null) return 'Вы нажали отмену'
    }
    while (!Number.isInteger(+y))

    x = +x
    y = +y
    switch (sign) {
        case '+':
            return result = `${x} + ${y} = ${x + y}`;
        case '-':
            return result = `${x} - ${y} = ${x - y}`;
        case '*':
            return result = `${x} * ${y} = ${x * y}`;
        case '/':
            return result = `${x} / ${y} = ${x / y}`;
        case '%':
            return result = `${x} % ${y} = ${x % y}`;
        case '^':
            return result = `${x} ** ${y} = ${x ** y}`;
        default: {
            return 'Что-то пошло не так O_o';
        }
    }
}

console.log(`Задача №2:\n${doMath(3, '^', 2)}\n\n`);