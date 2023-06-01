export function getItemCard(id, img, model){
    const div = document.createElement('div');
    const imageDiv = document.createElement('div');
    const p = document.createElement('p');

    const src = 'url(assets/img/' + img + '.jpg)';

    div.classList.add('item_card');
    div.setAttribute('id', id);
    imageDiv.style.backgroundImage = src;
    imageDiv.classList.add('image_div');
    div.append(imageDiv);
    div.append(p);
    p.innerText = model;

    return div;
}