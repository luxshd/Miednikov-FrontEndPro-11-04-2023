// window.addEventListener('click', (e) =>{
//     if(e.target.type === 'submit'){
//         const form = document.querySelector('form');
//         const formData = new FormData(form);
//         const data = formData.values();
//         let [name, birthDate, sex, city, address, languages] = data;
//         for(var pair of formData.entries()) {
//             console.log(pair[0]+ ', '+ pair[1]);
//         }
//         const body = document.querySelector('body');
//         form.style.display = 'none';
//         body.innerHTML = `<p>Имя: ${name}</p>
//                      <p>Дата рождения: ${birthDate}</p>
//                      <p>Пол: ${sex}</p>
//                      <p>Город: ${city}</p>
//                      <p>Адрес: ${address}</p>
//                      <p>Языки: ${languages}</p>`
//     }
//
// })
