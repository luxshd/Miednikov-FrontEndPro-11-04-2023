window.addEventListener('click', (e) => {
    if(e.target.type === 'submit'){
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const birthday = document.querySelector('#birthday').value;
        const m = document.querySelector('#m');
        const w = document.querySelector('#w');
        let sex = m;
        if(m.checked){
            sex = 'Мужчина'
        } else {
            sex = 'Женщина'
        }
        const city = document.querySelector('#city').value;
        const address = document.querySelector('#address').value;
        const languages = document.querySelectorAll('input[type=checkbox]');
        const checkedLangs = [];
        for(const lang of languages){
            if(lang.checked){
                checkedLangs.push(lang.value);
            }
        }

        document.querySelector('body').innerHTML = `<p>Имя: ${name}</p>
<p>Дата рождения: ${birthday}</p>
<p>Пол: ${sex}</p>
<p>Город: ${city}</p>
<p>Адрес: ${address}</p>
<p>Владение языками: ${checkedLangs}</p>`
    }
})