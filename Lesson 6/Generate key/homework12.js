// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Для этой задачи я использую метод getRandomInt

// Функция для получения рандомного индекса массива
const getRandomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

// Функция, генерирующая случайный ключ
function generateKey(passLength, arr) {
    let result = '';
    for (let i = 0; i < passLength; i++) {
        // Получаем случайный элемент массива символов и сохраняем в строку результата
        result+= arr[getRandomArrayIndex(arr)]
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i