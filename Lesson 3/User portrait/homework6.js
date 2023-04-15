// Часть №1
// const userAge = +prompt('Возраст:'),
//     userCity = prompt('Город:'),
//     userSport = prompt('Любимый вид спорта:');
//
// if (userAge && userCity && userSport) {
//     let isCapitalOf = null;
//
//     switch (userCity) {
//         case 'Киев':
//             isCapitalOf = 'Украины'
//             break
//         case 'Вашингтон':
//             isCapitalOf = 'США'
//             break
//         case 'Лондон':
//             isCapitalOf = 'Великобритании'
//             break
//     }
//
//     alert(`Тебе ${userAge}. ${isCapitalOf ? `Ты живёшь в столице ${isCapitalOf}` : `Ты живёшь в городе ${userCity}`}`);
// } else {
//     alert('К сожалению, вы заполнили не все поля. Обновите страницу и попробуйте снова.');
// }

// Часть №2 (Я закомментировал первую часть, т.к. вторая является дополненной версией первой со всеми условиями задачи
const userAge = +prompt('Возраст:'), userCity = prompt('Город:'), userSport = prompt('Любимый вид спорта:');

//Если пользователь ввёл хоть что-то
if (userAge || userCity || userSport) {
    let isCapitalOf = 'Ты живёшь в столице ', favoriteSportsman = 'Круто! Хочешь стать ';

    switch (userCity) {
        case 'Киев':
            isCapitalOf += 'Украины'
            break
        case 'Вашингтон':
            isCapitalOf += 'США'
            break
        case 'Лондон':
            isCapitalOf += 'Великобритании'
            break
        default:
            isCapitalOf = `Ты живёшь в городе ${userCity}.`
            break
    }

    switch (userSport) {
        case 'футбол':
            favoriteSportsman += 'Криштиану Роналду?'
            break
        case 'бокс':
            favoriteSportsman += 'Виталием Кличко?'
            break
        case 'фехтование':
            favoriteSportsman += 'Энцо Лефором?'
            break
        default:
            favoriteSportsman = `Твой любимый вид спорта ${userSport}.`
            break
    }
    alert(`${userAge ? `Тебе ${userAge}` : 'Ты не захотел вводить свой возраст'}. ${userCity ? isCapitalOf : 'Ты не указал город проживания'}. ${userSport ? favoriteSportsman : 'Ты не указал любимый вид спорта'}.`);
} else {
    alert('К сожалению, вы не заполнили ни ондого поля. Обновите страницу и попробуйте снова.');
}