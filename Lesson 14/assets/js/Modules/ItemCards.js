export function getItemCard(id, imgUrl, model){

    return `<div class="card" style="" id="${id}">
  <img src="${imgUrl}" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-text">${model}</p>
  </div>
</div>`;
}