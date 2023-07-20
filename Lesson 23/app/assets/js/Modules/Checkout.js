import {Items} from "./Items.js";

export function getCheckout(id) {
    return `<form onsubmit="return false" id="${id}">
                    <label for="firstName">First name</label>
                    <input type="text" id="firstName" name="firstname" placeholder="Ivan" required>
                    <p class="errortext"></p>
                    <label for="secondName">Last name</label>
                    <input type="text" id="secondName" name="secondName" placeholder="Ivanov" required>
                    <p class="errortext"></p>
                    <label for="cities">City</label>
                    <select name="cities" id="cities">
                        <option value="Dnipro">Dnipro</option>
                        <option value="Kiev">Kiev</option>
                        <option value="Chernigov">Chernigov</option>
                        <option value="Sumy">Sumy</option>
                    </select>
                    <label for="warehouse">Warehouse Nova Post</label>
                    <input type="number" id="warehouse" name="warehouse" placeholder="74" required>
                    <p class="errortext"></p>
                    <label for="bar">Cash
                    <input type="radio" name="payment" value="Cash" checked></label>
                    <label for="card">Card
                    <input type="radio" name="payment" value="Card"></label>
                    <label for="amount">Amount</label>
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