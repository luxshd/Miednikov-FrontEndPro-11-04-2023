// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Для этой задачи я использую метод getRandomInt

// Функция для получения рандомного индекса массива
const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

// Функция для установки рандомного регистра символу, если он не числовой
const setRandomRegister = (char) => {
    if (!!Number(char)) {
        return char
    }
    const random = Math.floor(Math.random() * 10);
    if (random < 5) {
        return char.toUpperCase();
    }
    return char.toLowerCase();
}

// Функция, генерирующая случайный пароль
function generateKey(passLength, arr) {
    let result = '';
    for (let i = 0; i < passLength; i++) {
        // Получаем случайный элемент массива символов
        let char = arr[getRandomArrayIndex(arr)]

        // Если элемент массива - буква, случайно выбираем регистр и сохраняем в результат
        result += setRandomRegister(char)
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i