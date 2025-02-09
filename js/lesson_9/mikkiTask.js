let array = Array.from(document.querySelectorAll('.item-grid__item'));//NodeList in Array
let result = array.map(value => {
    const title = value.querySelector('.item-grid-card__title').innerText;
    const author = value.querySelector('.item-grid-music-preview__author').innerText;
    const attribute = value.querySelector('[data-audio-player-preview-url-value]');//пошук елемента за атрибутом data-audio-player-preview-url-value
    const mp3 = attribute.getAttribute('data-audio-player-preview-url-value');//беру значення атрибута у елемента, який був знайдений за атрибутом
    return {title, author, mp3,}
})
console.log(result);

// ==========================
// ==========================
// let array = document.querySelectorAll('.item-grid__item');
// console.log(array);
// let result = [];
// for (const item of array) {
//     const title = item.querySelector('.item-grid-card__title').innerText;
//     const author = item.querySelector('.item-grid-music-preview__author').innerText;
//     const attribute = item.querySelector('[data-audio-player-preview-url-value]');
//     const mp3 = attribute.getAttribute('data-audio-player-preview-url-value');
//     const object = {
//         title,
//         author,
//         mp3,
//     }
//     result.push(object);}
// console.log(result);
// ==========================
// ==========================
// let array = document.querySelectorAll('.item-grid__item');
// for (let i= 0; i < array.length; i++) {
//     const title = array[i].querySelector('.item-grid-card__title').innerText;
//     const author = array[i].querySelector('.item-grid-music-preview__author').innerText;
//     const attribute = array[i].querySelector('[data-audio-player-preview-url-value]');
//     const mp3 = attribute.getAttribute('data-audio-player-preview-url-value');
//     const object = {
//         title,
//         author,
//         mp3,
//     }
//     result.push(object)
// }
// console.log(result);
