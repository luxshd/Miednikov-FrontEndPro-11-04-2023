// Валидатор взял из интернета, чтобы не изобретать велосипед :)
const isValidUrl = urlString => {
    // объект регулярного выражения
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // проверка протокола
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // проверка имени домена
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // проверка ip адреса (версия 4, не 6)
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // проверка порта и пути
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // проверка параметров запроса
        '(\\#[-a-z\\d_]*)?$', 'i');                            // проверка хэша

    // сама проверка
    return !!urlPattern.test(urlString);
}

// Записываем элементы в переменные
const btnHttp = document.createElement('button')
const btnHttps = document.createElement('button')
const input = document.createElement('input')
const validText = document.createElement('p')
let inputText = '';
const body = document.body

// Текст индикации валидности
validText.innerText = 'Введите ссылку'

// Текст кнопок
btnHttp.innerText = 'HTTP Link'
btnHttps.innerText = 'HTTPS Link'

// Добавляем атрибут для клика
btnHttp.onclick = followUrl
btnHttps.onclick = followUrl

// Добавляем id
btnHttp.id = 'http'
btnHttps.id = 'https'

// Добавляем элементы в разметку
body.append(input)
body.append(validText)
body.append(btnHttp)
body.append(btnHttps)

// Сохраняем и редактируем ввод в переменную при каждом изменении
input.addEventListener('input', () => {
    inputText = input.value.trim().toLowerCase()
})

function followUrl() {
    if (isValidUrl(inputText)) {
        // По id кнопок определяем, какой протокол будет использован
        // и отрезаем протокол, если он был введён пользователем, чтобы использовать тот, который определяет кнопка
        let href = `${this.id === 'http' ? 'http://' : 'https://'}` + inputText.split('//').pop()
        validText.style.color = 'green'
        validText.innerText = 'Всё ок!'
        // Выводим ссылку в консоль, для достоверности правильности ввода
        console.log(href)
        // Переходим по ссылке в новой вкладке
        window.open(href, '_black')
    } else {
        validText.style.color = 'red'
        validText.innerText = 'Неверный ввод!'
    }
}