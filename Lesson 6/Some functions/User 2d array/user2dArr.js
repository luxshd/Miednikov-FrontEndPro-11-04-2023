// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function getUserArray() {
    //Записываем длину массива
    let arrLength = 0
    do {
        arrLength = prompt('Укажите длину родительского массива целым числом:')
        if (arrLength == null) return 'Вы нажали отмену'
    }
    while (+arrLength === 0 || !Number.isInteger(+arrLength) || !arrLength)
    // Записываем элементы массива, если элемент - массив, оставляем пустые квадрытные скобки, позже пройдём по всем элементам [] и заполним их отдельно
    let arrElements = ''
    do {
        arrElements = prompt(`Укажите ${arrLength} элементов через пробел, если этот элемент - массив, напишите его в таком видe [] и оставьте пустым, позже мы его заполним.`)
        if (arrElements == null) return 'Вы нажали отмену'
    }
    while (arrElements.split(' ').length !== +arrLength)
    let result = arrElements.split(' ')

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '[]') result[i] = createInnerArray(i)
    }

    // Функция для создания дочерних массивов,с возможностью создавать многомерные массивы
    function createInnerArray(index) {
        //Записываем длину дочернего массива
        let childArrLength = 0
        let innerResult
        do {
            childArrLength = prompt(`Укажите длину дочернего массива, находящимуся по индексу ${index} целым числом:`)
            if (childArrLength == null) return 0
        } while (+childArrLength === 0 || !Number.isInteger(+childArrLength) || !childArrLength)

        // Записываем элементы внутреннего массива.
        let childArrElements = ''
        do {
            childArrElements = prompt(`Укажите ${childArrLength} элементов через пробел, если этот элемент - массив, напишите его в таком видe [] и оставьте пустым, позже мы его заполним.`)
            if (arrElements == null) return ''
        }
        while (childArrElements.split(' ').length !== +childArrLength)

        innerResult = childArrElements.split(' ')
        for (let i = 0; i < innerResult.length; i++) {
            if (innerResult[i] === '[]') innerResult[i] = createInnerArray(i)
        }
        return innerResult
    }

    return result
}

// Вывожу отдельными логами, т.к. в форматированной строке, почему-то, результат отображается в виде строки, а не массива
console.log(`Задача №3:\n`);
console.log(getUserArray())