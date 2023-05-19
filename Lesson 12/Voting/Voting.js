// Сохраняем все кнопки в массив
const smiles = document.querySelectorAll('.vote_item')

// Добавляем всем кнопкам событие на клик
smiles.forEach(smile => {
    smile.setAttribute('onclick', `vote(this)`)
})

// Функция для голосования
function vote(elem) {
    elem.nextElementSibling.innerText++
}