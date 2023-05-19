// Сохраняем все кнопки в массив
//const voteBtns = document.querySelectorAll('.vote_item')

// Массив смайлов
const smiles = ['&#128534;','&#128528;','&#128524;','&#128522;','&#128516;']

// Будет создано столько кнопок, сколько смайлов в массиве
const BUTTONS_COUNT = smiles.length

// Блок голосования
const voteWrapper = document.createElement('div')
voteWrapper.classList.add('vote_wrapper')
// Добавляем блок в разметку
document.body.append(voteWrapper)
// Создаём блок с кнопками
const voteBtns = document.createElement('div')
voteBtns.classList.add('vote_btns')
voteWrapper.append(voteBtns)

// Создаём кнопки
for (let i = 0; i < BUTTONS_COUNT; i++) {
    const div = document.createElement('div')
    const vote_item = document.createElement('span')
    const rating = document.createElement('span')
    // Прописываем классы
    vote_item.classList.add('vote_item')
    rating.classList.add('rating')
    // Добавляем смайлы и счётчик голосов
    vote_item.innerHTML = smiles[i]
    rating.innerHTML = '0'
    // Вешаем событие
    vote_item.setAttribute('onclick', 'vote(this)')
    // Вставляем элементы в нужные места
    voteBtns.append(div)
    div.append(vote_item)
    div.append(rating)
}

// Функция для голосования
function vote(elem) {
    elem.nextElementSibling.innerText++
}