// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та клон в body.
// ============
// let block = document.createElement('div');
// block.classList.add("wrap");
// block.style.background="greenyellow";
// block.style.color="blue";
// // block.innerText='Text for block';
// block.innerHTML= '<h1>Text for block</h1>';
// document.body.appendChild(block);
// ============
for (let i = 0; i < 2; i++) {
    let block = document.createElement('div');
    block.classList.add('wrap', 'collapse', 'alpha', 'beta');
    block.innerHTML = '<p>Text for block</p>';
    document.body.appendChild(block);
}

let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = '.alpha{background: silver; color: yellow; fontSize:42px;}';

// ============
let div = document.createElement('div');
div.style.background = "greenyellow";
div.style.color = "blue";
div.style.fontSize = '50px';
div.innerText = 'Another text';
document.body.appendChild(div);

let clone = div.cloneNode(true);
document.body.appendChild(clone);
//     #OPLI89c9G
// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (const elem of arr) {
    let li = document.createElement('li');
    li.innerText = elem;
    ul.appendChild(li);
}
// ============
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');
style.innerHTML += '.wrapper{display:flex; flex-wrap:wrap; gap:15px; justify-content: center; align-items:center;}'
document.body.appendChild(wrapperDiv);
style.innerHTML += '.card{background: pink; color: green; border-radius: 15px; text-align:center; padding: 10px; border: 1px solid green; margin-bottom: 10px; width: 300px;}'
for (const elem of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<h2>${elem.title}</h2> <p>Тривалість курсу - ${elem.monthDuration} місяців</p>`;
    wrapperDiv.appendChild(div);
}
// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const elem of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    document.body.appendChild(item);
    item.append(h1, p);
    h1.textContent = elem.title;
    p.textContent = elem.monthDuration;
}
// ==========================