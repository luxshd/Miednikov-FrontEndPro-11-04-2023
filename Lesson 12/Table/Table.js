table = document.createElement('table')
table.style.borderSpacing = '0'
table.style.textAlign = 'center'
document.body.append(table)

// Задаём размер таблицы
const TABLE_COLUMNS = 10
const TABLE_ROWS = 10

//Счётчик
let counter = 1;

for (let i = 1; i <= TABLE_ROWS; i++){
    const tr = document.createElement('tr')
    table.append(tr)
    for (let j = 0; j < TABLE_COLUMNS; j++){
        const td = document.createElement('td')
        td.style.border = '1px solid black'
        td.style.padding = '5px'
        tr.append(td)
        td.innerText = `${counter}`
        counter++
    }
}