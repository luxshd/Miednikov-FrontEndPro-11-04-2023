import {Items} from "./Items.js";
export function getCheckout(id){
    return `<form onsubmit="return false" method="post" id="${id}">
                    <label for="firstname">Имя</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Ivan" pattern="^[a-zA-Z]+$" required>
                    <label for="secondName">Фамилия</label>
                    <input type="text" id="secondName" name="secondName" placeholder="Ivanov" pattern="^[a-zA-Z]+$" required>
                    <select name="cities" id="cities">
                        <option value="Днепр">Днепр</option>
                        <option value="Киев">Киев</option>
                        <option value="Чернигов">Чернигов</option>
                        <option value="Сумы">Сумы</option>
                    </select>
                    <label for="warehouse">Склад НП</label>
                    <input type="number" id="warehouse" name="warehouse" placeholder="74" required>
                    <label for="bar">Наличными</label>
                    <input type="radio" name="payment" value="наличными" checked>
                    <label for="card">Картой</label>
                    <input type="radio" name="payment" value="картой">
                    <label for="amount">Количество</label>
                    <input type="number" name="amount" id="amount" required>
                    <textarea name="comment" id="comment" cols="30" rows="10" required></textarea>
                    <input type="submit" value="Send" id="submit">
                    <p class="errorText" style="color: red"></p>
                </form>`;
}

export function isValid() {
    const form= document.querySelector('form');
    const id = form.id;
    const data = new FormData(form);

    let userData = [...data.values()];
    let emptyFields = 0;
    for(const data of userData){
        if (data === ""){
            emptyFields += 1;
            document.querySelector('.errorText').innerHTML = `Вы не заполнили ${emptyFields} поле(й).`;
        }
    }

    // Только если все поля заполнены - выведется результат заказа в главный блок
    if (emptyFields === 0){
        document.querySelector('.errorText').innerHTML = ``;
        const mainWindow = document.querySelector('.main-window');
        mainWindow.style.display = 'block';
        const item = Items.items[id];

        let [fName, sName, city, warehouse, payment, amount, comment] = userData;
        mainWindow.innerHTML = `<p>Вы совершили заказ:</p>
            <p>На имя: ${sName} ${fName}</p>
            <p>Город: ${city}</p>
            <p>Склад НП №: ${warehouse}</p>
            <p>Метод оплаты: ${payment}</p>
            <p>Количество: ${amount}</p>
            <p>Комментарий к заказу: ${comment}</p>
            <p><b>Model:</b> ${item.model}</p>
            <p><b>Max flight distance:</b> ${item.maxFlightDistance} km</p>
            <p><b>Max flight altitude:</b> ${item.maxAltitude} feet</p>
            <p><b>Max flight speed:</b> ${item.maxSpeed} knots</p>
            <p><b>Price:</b> $${item.price}</p>`
    }
}
