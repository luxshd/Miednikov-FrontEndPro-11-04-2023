const body = document.querySelector('body')

// Body styles
body.style.margin = '0'
body.style.padding = '0'
body.style.paddingTop = '100px'
body.style.boxSizing = 'border-box'
body.style.minHeight = '100vh'
body.style.background = '#2a2a2a'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'

const input = document.createElement('input')
// Input styles
input.style.fontSize='20px'

const div = document.createElement('div')
// Div styles
div.style.width = '200px';
div.style.height = '200px';
div.style.marginTop = '50px';
div.style.borderRadius = '50%';
div.style.background = '#ce3a3a';
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'
div.style.color = '#fff'
div.style.fontWeight = '800'
div.style.fontSize = '30px'
div.style.textAlign = 'center'
div.style.display = 'none'
div.innerText = 'YOU CAN SEE ME'

document.body.append(input)
document.body.append(div)

input.addEventListener('focusin', () => {
    div.style.display = 'flex'
})
input.addEventListener('focusout', () => {
    div.style.display = 'none'
})