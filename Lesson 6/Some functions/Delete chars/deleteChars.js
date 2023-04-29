// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteChars() {
    const sentence = prompt('Введите текст:')

    if (!sentence) return 'Вы ничего не ввели или нажали отмену'
    const charsToDelete = prompt('Введите символы для удаления через пробел').split(' ')

    if (!charsToDelete) return 'Вы ничего не ввели или нажали отмену'
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