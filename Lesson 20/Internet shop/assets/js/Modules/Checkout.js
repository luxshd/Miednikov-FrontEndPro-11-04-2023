import {Items} from "./Items.js";

export function getCheckout(id) {
    return `<form onsubmit="return false" id="${id}">
                    <label for="firstName">Имя</label>
                    <input type="text" id="firstName" name="firstname" placeholder="Ivan" required>
                    <p class="errortext"></p>
                    <label for="secondName">Фамилия</label>
                    <input type="text" id="secondName" name="secondName" placeholder="Ivanov" required>
                    <p class="errortext"></p>
                    <select name="cities" id="cities">
                        <option value="Днепр">Днепр</option>
                        <option value="Киев">Киев</option>
                        <option value="Чернигов">Чернигов</option>
                        <option value="Сумы">Сумы</option>
                    </select>
                    <label for="warehouse">Склад НП</label>
                    <input type="number" id="warehouse" name="warehouse" placeholder="74" required>
                    <p class="errortext"></p>
                    <label for="bar">Наличными</label>
                    <input type="radio" name="payment" value="наличными" checked>
                    <label for="card">Картой</label>
                    <input type="radio" name="payment" value="картой">
                    <label for="amount">Количество</label>
                    <input type="number" name="amount" id="amount" required>
                    <p class="errortext"></p>
                    <textarea name="comment" id="comment" cols="30" rows="5" required></textarea>
                    <p class="errortext"></p>
                    <input type="submit" value="Send" id="submit">
                </form>`;
}

export function getValidation() {
    let errorsCount = 0;
    const id = document.querySelector('form').id;
    const item = Items.items[id];
    const fname = document.querySelector('#firstName');
    const sname = document.querySelector('#secondName');
    const city = document.querySelector('#cities');
    const warehouse = document.querySelector('#warehouse');
    const payment = document.querySelector('input[name=payment]');
    const amount = document.querySelector('#amount');
    const comment = document.querySelector('#comment');
    console.log(id)
    const regAlpha = /[a-zа-яё]/i;
    const alphaInputs = [fname, sname];
    const isEmptyInputs = [warehouse, amount, comment]
    isValidInput(alphaInputs, regAlpha)
    isEmpty(isEmptyInputs)
    const errors = document.querySelectorAll('.errortext');

    for (const error of errors) {
        if (error.innerHTML !== '') {
            errorsCount += 1;
        }
    }

    if (errorsCount === 0) {
        const mainWindow = document.querySelector('.main-window');
        mainWindow.style.display = 'flex';
        mainWindow.style.flexDirection = 'column';
        mainWindow.innerHTML = `
<p>Your order has been completed successfully</p>
<p>Order info:</p>
<ul style="list-style: none">
<li>Name: ${fname.value} ${sname.value}</li>
<li>City: ${city.value}</li>
<li>Warehouse: ${warehouse.value}<br>We have no idea how you will receive the plane through the Nova Post O_o</li>
<li>Payment method: ${payment.value}</li>
<li>Amount: ${amount.value}</li>
<li>Comment: ${comment.value}</li>
<li><img src="${item.imgUrl}" alt=""></li>
<li>Model: ${item.model}</li>
<li>Price: ${item.price}</li>
</ul>
<button id="toHomePage">To home page</button>`
    }
}

function isValidInput(elemsArray, reg) {
    for (const elem of elemsArray) {
        if (!reg.test(elem.value)) {
            elem.nextElementSibling.innerHTML = 'Invalid input';
            elem.nextElementSibling.style.color = 'red';
        } else {
            elem.nextElementSibling.innerHTML = '';
        }
    }
}

function isEmpty(elemsArray) {
    for (const elem of elemsArray) {
        if (!elem.value) {
            elem.nextElementSibling.innerHTML = 'Invalid input';
            elem.nextElementSibling.style.color = 'red';
        } else {
            elem.nextElementSibling.innerHTML = '';
        }
    }
}