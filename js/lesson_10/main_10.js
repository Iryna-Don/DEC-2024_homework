//=======================
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
let p = document.createElement('p');
p.id = 'text';
// p.setAttribute('id', 'text');
p.innerText = 'just a text in p';
let btn = document.createElement('button');
btn.innerText = 'Disappear';
document.body.append(p, btn);

btn.onclick = function () {
    let textElem = document.querySelector('#text');
    // let textElem = document.querySelectorAll('#text')[0];
    textElem.classList.toggle('active');
    textElem.classList.contains('active') ? textElem.style.visibility = 'hidden' : textElem.style.visibility = 'visible';
    textElem.style.visibility === 'hidden' ? btn.innerText = 'Show up' : btn.innerText = 'Disappear';
    //========== or ===========
    // textElem.style.display = textElem.style.display === 'none'? 'block':'none';
    // textElem.style.display === 'none'? btn.innerText = 'Show up': btn.innerText = 'Disappear';
}
//=======================
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');
form.id = 'ageForm';
let input = document.createElement('input');
input.name = 'userAge';
input.type = 'number';
input.min = '1';
input.max = '100';
input.style.width = '150px';
input.placeholder = 'Enter your age';

let btn_2 = document.createElement('button');
btn_2.innerText = 'Confirm Age';
document.body.appendChild(form);
form.append(input, btn_2);

form.onsubmit = function (event) {
    event.preventDefault();// скасувати default налаштування
    // +this.elements['userAge'].value >= 18 ? console.log('It`s OK') : console.log('Go to your parents');
    // +this.elements[0].value >= 18 ? console.log('It`s OK') : console.log('Go to your parents');
    // form.userAge.value >= 18 ? console.log('It`s OK') : console.log('Go to your parents');
    this['userAge'].value >= 18 ? console.log('It`s OK') : console.log('Go to your parents');
    // this.submit();// відправити дані
}
//=======================
// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let questionnaire = document.createElement('form');
questionnaire.id = 'form_name_surname_age';
document.body.appendChild(questionnaire);
let nameInput = document.createElement('input');
nameInput.name = 'userName';
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';

let surnameInput = document.createElement('input');
surnameInput.name = 'userSurname';
surnameInput.type = 'text';
surnameInput.placeholder = 'Enter your surname';

let ageInput = document.createElement('input');
ageInput.name = 'userAge';
ageInput.type = 'number';
ageInput.min = '1';
ageInput.max = '99';
ageInput.placeholder = 'Enter your age';

let formBtn = document.createElement('button');
formBtn.innerText = 'Send Data';
questionnaire.append(nameInput, surnameInput, ageInput, formBtn);
// questionnaire.onsubmit = function (e) {
//     e.preventDefault();
//     let obj = {
//         name: questionnaire.userName.value,
//         surname: questionnaire.userSurname.value,
//         age: questionnaire.userAge.value,
//     }
//     let div = document.createElement('div');
//     div.innerHTML = `<p>Name: ${obj.name}</p><p>Surname: ${obj.surname}</p><p>Age: ${obj.age}</p>`;
//     document.body.appendChild(div);
//     formBtn.disabled = true;
// }
// ================ or ==============================
questionnaire.onsubmit = function (e) {
    e.preventDefault();
    let obj = {
        name: questionnaire.userName.value,
        surname: questionnaire.userSurname.value,
        age: questionnaire.userAge.value,
    }
    localStorage.setItem('object', JSON.stringify(obj));
    let div = document.createElement('div');
    document.body.appendChild(div);

    let parseObj = JSON.parse(localStorage.getItem('object'));
    div.innerHTML = `<p>Name: ${parseObj.name}</p><p>Surname: ${parseObj.surname}</p><p>Age: ${parseObj.age}</p>`;
    document.body.querySelector('#form_name_surname_age').style.display = 'none';
}

let div = document.createElement('div');
document.body.appendChild(div);
let parse = JSON.parse(localStorage.getItem('object'));
parse ? div.innerHTML = `<p>Name: ${parse.name}</p><p>Surname: ${parse.surname}</p><p>Age: ${parse.age}</p>` : div.innerHTML = '';
//=======================
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let block = document.createElement('div');
if (!localStorage.getItem('textForBlock')) {
    localStorage.setItem('textForBlock', '1');
}
let numberInText = +JSON.parse(localStorage.getItem('textForBlock'));
block.innerText = `${numberInText}`;
document.body.appendChild(block);
localStorage.setItem('textForBlock', JSON.stringify(++numberInText));
//=======================
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
let sessionsList;
localStorage.getItem('sessionsList') ? sessionsArr = JSON.parse(localStorage.getItem('sessionsList')) : sessionsArr = [];
sessionsArr.push(Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsArr));
//=======================
// Є сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
let info = document.createElement('div');
info.innerHTML = '<h1>List of Sessions: </h1>';
document.body.appendChild(info);
for (const dateAndTime of JSON.parse(localStorage.getItem('sessionsList'))) {
    let p = document.createElement('p');
    p.innerText = `${dateAndTime}`;
    info.appendChild(p);
}
//
//
//=======================
// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// Дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let converter = document.createElement('form');
converter.id = 'convert';
let inputKg = document.createElement('input');
let labelKg = document.createElement('label');
labelKg.setAttribute('for', 'kg');
labelKg.innerText = 'kg';
inputKg.type = 'number';
inputKg.id = 'kg';
let inputInch = document.createElement('input');
let labelInch = document.createElement('label');
labelInch.setAttribute('for', 'inch');
labelInch.innerText = 'inch';
inputInch.type = 'number';
inputInch.id = 'inch';
document.body.appendChild(converter);
converter.append(inputKg, inputInch);
converter.insertBefore(labelKg, inputKg);
converter.insertBefore(labelInch, inputInch);
// =========================================================================================
// 1 кг = 2,20462 фунтов
inputKg.oninput = function (e) {
    inputInch.value = ((e.target.value) * 2.20462).toFixed(2);
}
inputInch.oninput = function (e) {
    inputKg.value = ((e.target.value) / 2.20462).toFixed(2);
}
//=======================
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//=======================
function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName)) || [];
    let copy = arr.filter(value => JSON.stringify(value) === JSON.stringify(objToAdd));
    if (copy.length === 0) {
        arr.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(arr));
    }
}

//=======================
//     #kUSgFqWY
// Створити 3 input та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let inputRows = document.createElement('input');
inputRows.placeholder = 'Enter the number of table rows';
let inputCells = document.createElement('input');
inputCells.placeholder = 'Enter the number of table cells';
let inputText = document.createElement('input');
inputText.placeholder = 'Enter cell text';
let tableCreateBtn = document.createElement('button');
tableCreateBtn.innerText = 'Create Table';
document.body.append(inputRows, inputCells, inputText, tableCreateBtn);
let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `table {
  border-collapse: collapse;/*сусідні кордони таблиці відображаються як один кордон*/
}
td {
  border: 1px solid blue;
  padding: 8px;
  word-wrap: break-word;
  max-width: 100%;
 }`;

tableCreateBtn.onclick = function () {
    let rows = +inputRows.value;
    let cells = +inputCells.value;
    let textInCells = inputText.value;
    let table = document.createElement('table');
    document.body.appendChild(table);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = textInCells;
        }
    }
    inputRows.value = '';
    inputCells.value = '';
    inputText.value = '';
}
//=======================
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let sumDiv = document.createElement('div');
let sumGrn = +(JSON.parse(localStorage.getItem('summa'))) || 100;
sumDiv.innerHTML = `<span>${sumGrn}</span> <span>UAH</span>`;
document.body.appendChild(sumDiv);

let timeArr = JSON.parse(localStorage.getItem('timer')) || [];
if (timeArr.length > 1) {
    timeArr.shift();
}
let previousTime = timeArr[timeArr.length - 1];
let time = new Date().getTime();
if ((time - previousTime) > 10000) {
    sumGrn += 10;
    localStorage.setItem('summa', sumGrn.toString());
    sumDiv.innerHTML = `<span>${sumGrn}</span> <span>UAH</span>`;
}
timeArr.push(time);
localStorage.setItem('timer', JSON.stringify(timeArr));
//=======================
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let jokesArr = [
    {
        type: "general",
        setup: "What did the fish say when it hit the wall?",
        punchline: "Dam.",
    },
    {
        type: "general",
        setup: "How do you make a tissue dance?",
        punchline: "You put a little boogie on it.",
    },
    {
        type: "general",
        setup: "What's Forrest Gump's password?",
        punchline: "1Forrest1",
    },
    {
        type: "general",
        setup: "What do you call a belt made out of watches?",
        punchline: "A waist of time.",
    },
    {
        type: "general",
        setup: "Why can't bicycles stand on their own?",
        punchline: "They are two tired",
    },
    {
        type: "general",
        setup: "How does a train eat?",
        punchline: "It goes chew, chew",
    },
    {
        type: "general",
        setup: "What do you call a singing Laptop?",
        punchline: "A Dell",
    },
    {
        type: "general",
        setup: "How many lips does a flower have?",
        punchline: "Tulips",
    },
    {
        type: "general",
        setup: "How do you organize an outer space party?",
        punchline: "You planet",
    },
    {
        type: "general",
        setup: "What kind of shoes does a thief wear?",
        punchline: "Sneakers",
    },
    {
        type: "general",
        setup: "What's the best time to go to the dentist?",
        punchline: "Tooth hurty.",
    },
    {
        type: "knock-knock",
        setup:
            "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
        punchline: "Never mind. It's pointless.",
    },
    {
        type: "knock-knock",
        setup: "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
        punchline: "No, cows go moo.",
    },
    {
        type: "knock-knock",
        setup:
            "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
        punchline: "I didn't know you could yodel!",
    },
    {
        type: "programming",
        setup: "What's the best thing about a Boolean?",
        punchline: "Even if you're wrong, you're only off by a bit.",
    },
    {
        type: "programming",
        setup: "What's the object-oriented way to become wealthy?",
        punchline: "Inheritance",
    },
    {
        type: "programming",
        setup: "Where do programmers like to hangout?",
        punchline: "The Foo Bar.",
    },
    {
        type: "programming",
        setup: "Why did the programmer quit his job?",
        punchline: "Because he didn't get arrays.",
    },
    {
        type: "general",
        setup: "Did you hear about the two silk worms in a race?",
        punchline: "It ended in a tie.",
    },
    {
        type: "general",
        setup: "What do you call a laughing motorcycle?",
        punchline: "A Yamahahahaha.",
    },
    {
        type: "general",
        setup: "A termite walks into a bar and says...",
        punchline: "'Where is the bar tended?'",
    },
    {
        type: "general",
        setup: "What does C.S. Lewis keep at the back of his wardrobe?",
        punchline: "Narnia business!",
    },
    {
        type: "programming",
        setup: "Why do programmers always mix up Halloween and Christmas?",
        punchline: "Because Oct 31 == Dec 25",
    },
    {
        type: "programming",
        setup: "A SQL query walks into a bar, walks up to two tables and asks...",
        punchline: "'Can I join you?'",
    },
    {
        type: "programming",
        setup: "How many programmers does it take to change a lightbulb?",
        punchline: "None that's a hardware problem",
    },
    {
        type: "programming",
        setup:
            "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
        punchline: "the rest of them will write Perl",
    },
    {
        type: "programming",
        setup: "['hip', 'hip']",
        punchline: "(hip hip array)",
    },
    {
        type: "programming",
        setup: "To understand what recursion is...",
        punchline: "You must first understand what recursion is",
    },
    {
        type: "programming",
        setup: "There are 10 types of people in this world...",
        punchline: "Those who understand binary and those who don't",
    },
    {
        type: "general",
        setup: "What did the duck say when he bought lipstick?",
        punchline: "Put it on my bill",
    },
    {
        type: "general",
        setup: "What happens to a frog's car when it breaks down?",
        punchline: "It gets toad away",
    },
    {
        type: "general",
        setup: "did you know the first French fries weren't cooked in France?",
        punchline: "they were cooked in Greece",
    },
    {
        type: "programming",
        setup: "Which song would an exception sing?",
        punchline: "Can't catch me - Avicii",
    },
    {
        type: "knock-knock",
        setup: "Knock knock. \n Who's there? \n Opportunity.",
        punchline: "That is impossible. Opportunity doesn’t come knocking twice!",
    },
    {
        type: "programming",
        setup: "Why do Java programmers wear glasses?",
        punchline: "Because they don't C#.",
    },
    {
        type: "general",
        setup: "Why did the mushroom get invited to the party?",
        punchline: "Because he was a fungi.",
    },
    {
        type: "general",
        setup: "Do you know what the word 'was' was initially?",
        punchline: "Before was was was was was is.",
    },
    {
        type: "general",
        setup: "I'm reading a book about anti-gravity...",
        punchline: "It's impossible to put down",
    },
    {
        type: "general",
        setup:
            "If you're American when you go into the bathroom, and American when you come out, what are you when you're in there?",
        punchline: "European",
    },
    {
        type: "general",
        setup: "Want to hear a joke about a piece of paper?",
        punchline: "Never mind...it's tearable",
    },
    {
        type: "general",
        setup: "I just watched a documentary about beavers.",
        punchline: "It was the best dam show I ever saw",
    },
    {
        type: "general",
        setup: "If you see a robbery at an Apple Store...",
        punchline: "Does that make you an iWitness?",
    },
    {
        type: "general",
        setup:
            "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
        punchline: "I'm sorry, we don't serve food here",
    },
    {
        type: "general",
        setup: "Why did the Clydesdale give the pony a glass of water?",
        punchline: "Because he was a little horse",
    },
    {
        type: "general",
        setup: "If you boil a clown...",
        punchline: "Do you get a laughing stock?",
    },
    {
        type: "general",
        setup: "Finally realized why my plant sits around doing nothing all day...",
        punchline: "He loves his pot.",
    },
    {
        type: "general",
        setup: "Don't look at the eclipse through a colander.",
        punchline: "You'll strain your eyes.",
    },
    {
        type: "general",
        setup: "I bought some shoes from a drug dealer.",
        punchline:
            "I don't know what he laced them with, but I was tripping all day!",
    },
    {
        type: "general",
        setup: "Why do chicken coops only have two doors?",
        punchline: "Because if they had four, they would be chicken sedans",
    },
    {
        type: "general",
        setup: "What do you call a factory that sells passable products?",
        punchline: "A satisfactory",
    },
    {
        type: "general",
        setup:
            "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
        punchline: "Yep, people are just dying to get in there",
    },
    {
        type: "general",
        setup: "Why did the invisible man turn down the job offer?",
        punchline: "He couldn't see himself doing it",
    },
    {
        type: "general",
        setup: "How do you make holy water?",
        punchline: "You boil the hell out of it",
    },
    {
        type: "general",
        setup: "I had a dream that I was a muffler last night.",
        punchline: "I woke up exhausted!",
    },
    {
        type: "general",
        setup: "Why is peter pan always flying?",
        punchline: "Because he neverlands",
    },
    {
        type: "programming",
        setup: "How do you check if a webpage is HTML5?",
        punchline: "Try it out on Internet Explorer",
    },
    {
        type: "general",
        setup: "What do you call a cow with no legs?",
        punchline: "Ground beef!",
    },
    {
        type: "general",
        setup: "I dropped a pear in my car this morning.",
        punchline: "You should drop another one, then you would have a pair.",
    },
    {
        type: "programming",
        setup: "Lady: How do I spread love in this cruel world?",
        punchline: "Random Dude: [...💘]",
    },
    {
        type: "programming",
        setup: "A user interface is like a joke.",
        punchline: "If you have to explain it then it is not that good.",
    },
    {
        type: "knock-knock",
        setup: "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
        punchline: "Bless you!",
    },
    {
        type: "general",
        setup: "What do you call sad coffee?",
        punchline: "Despresso.",
    },
    {
        type: "general",
        setup: "Why did the butcher work extra hours at the shop?",
        punchline: "To make ends meat.",
    },
    {
        type: "general",
        setup: "Did you hear about the hungry clock?",
        punchline: "It went back four seconds.",
    },
    {
        type: "general",
        setup: "Well...",
        punchline: "That’s a deep subject.",
    },
    {
        type: "general",
        setup: "Did you hear the story about the cheese that saved the world?",
        punchline: "It was legend dairy.",
    },
    {
        type: "general",
        setup: "Did you watch the new comic book movie?",
        punchline: "It was very graphic!",
    },
    {
        type: "general",
        setup: "I started a new business making yachts in my attic this year...",
        punchline: "The sails are going through the roof.",
    },
    {
        type: "general",
        setup:
            "I got hit in the head by a soda can, but it didn't hurt that much...",
        punchline: "It was a soft drink.",
    },
    {
        type: "general",
        setup: "I can't tell if i like this blender...",
        punchline: "It keeps giving me mixed results.",
    },
    {
        type: "general",
        setup: "I couldn't get a reservation at the library...",
        punchline: "They were fully booked.",
    },
    {
        type: "programming",
        setup: "I was gonna tell you a joke about UDP...",
        punchline: "...but you might not get it.",
    },
    {
        type: "programming",
        setup: "The punchline often arrives before the set-up.",
        punchline: "Do you know the problem with UDP jokes?",
    },
    {
        type: "programming",
        setup: "Why do C# and Java developers keep breaking their keyboards?",
        punchline: "Because they use a strongly typed language.",
    },
    {
        type: "general",
        setup: "What do you give to a lemon in need?",
        punchline: "Lemonaid.",
    },
    {
        type: "general",
        setup: "Never take advice from electrons.",
        punchline: "They are always negative.",
    },
    {
        type: "general",
        setup: "Hey, dad, did you get a haircut?",
        punchline: "No, I got them all cut.",
    },
    {
        type: "general",
        setup: "What time is it?",
        punchline: "I don't know... it keeps changing.",
    },
    {
        type: "general",
        setup:
            'A weasel walks into a bar. The bartender says, "Wow, I\'ve never served a weasel before. What can I get for you?"',
        punchline: "Pop,goes the weasel.",
    },
    {
        type: "general",
        setup: "Bad at golf?",
        punchline: "Join the club.",
    },
    {
        type: "general",
        setup: "Can a kangaroo jump higher than the Empire State Building?",
        punchline: "Of course. The Empire State Building can't jump.",
    },
    {
        type: "general",
        setup: "Can February march?",
        punchline: "No, but April may.",
    },
    {
        type: "general",
        setup: "Can I watch the TV?",
        punchline: "Yes, but don’t turn it on.",
    },
    {
        type: "general",
        setup: "Dad, can you put my shoes on?",
        punchline: "I don't think they'll fit me.",
    },
    {
        type: "general",
        setup: "Did you hear about the bread factory burning down?",
        punchline: "They say the business is toast.",
    },
    {
        type: "general",
        setup: "Did you hear about the chameleon who couldn't change color?",
        punchline: "They had a reptile dysfunction.",
    },
    {
        type: "general",
        setup: "Did you hear about the cheese factory that exploded in France?",
        punchline: "There was nothing left but de Brie.",
    },
    {
        type: "general",
        setup: "Did you hear about the cow who jumped over the barbed wire fence?",
        punchline: "It was udder destruction.",
    },
    {
        type: "general",
        setup: "Did you hear about the guy who invented Lifesavers?",
        punchline: "They say he made a mint.",
    },
    {
        type: "general",
        setup: "Did you hear about the guy whose whole left side was cut off?",
        punchline: "He's all right now.",
    },
    {
        type: "general",
        setup: "Did you hear about the kidnapping at school?",
        punchline: "It's ok, he woke up.",
    },
    {
        type: "general",
        setup: "Did you hear about the Mexican train killer?",
        punchline: "He had loco motives",
    },
    {
        type: "general",
        setup: "Did you hear about the new restaurant on the moon?",
        punchline: "The food is great, but there’s just no atmosphere.",
    },
    {
        type: "general",
        setup: "Did you hear about the runner who was criticized?",
        punchline: "He just took it in stride",
    },
    {
        type: "general",
        setup:
            "Did you hear about the scientist who was lab partners with a pot of boiling water?",
        punchline: "He had a very esteemed colleague.",
    },
    {
        type: "general",
        setup: "Did you hear about the submarine industry?",
        punchline: "It really took a dive...",
    },
    {
        type: "general",
        setup: "Did you hear that David lost his ID in prague?",
        punchline: "Now we just have to call him Dav.",
    },
    {
        type: "general",
        setup:
            "Did you hear that the police have a warrant out on a midget psychic ripping people off?",
        punchline: 'It reads "Small medium at large."',
    },
    {
        type: "general",
        setup: "Did you hear the joke about the wandering nun?",
        punchline: "She was a roman catholic.",
    },
    {
        type: "general",
        setup: "Did you hear the news?",
        punchline:
            "FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
    },
];
// =============================================================
let start = 0;
let step = 33;
let end = start+step;

let prevBtn = document.createElement('button');
prevBtn.innerText = 'Previous';
let nextBtn = document.createElement('button');
nextBtn.innerText = 'Next';


nextBtn.onclick=function () {
    let formerJokesDiv = document.querySelector('#jokesDiv');
    document.body.removeChild(formerJokesDiv);
    start +=step;
    end += step;
    createCards();
}
prevBtn.onclick=function () {
    let formerJokesDiv = document.querySelector('#jokesDiv');
    document.body.removeChild(formerJokesDiv);
    start -=step;
    end -= step;
    createCards();
}
document.body.append(prevBtn, nextBtn);

let createCards = function () {
    let divJokes = document.createElement('div');
    divJokes.id = 'jokesDiv';
    document.body.appendChild(divJokes);
    let workArr = jokesArr.slice(start, end);
    for (const item of workArr) {
        let div = document.createElement('div');
        div.classList.add('card');
        // ================================== можна (й потрібно) виносити у файл style ============================
        // div.style.border = '1px solid blue';
        // div.style.width = '250px';
        // div.style.margin = '15px';
        // div.style.padding = '10px';
        // div.style.borderRadius = '15px';
        divJokes.appendChild(div);
        let question = document.createElement('p');
        let answer = document.createElement('p');
        question.innerText = item.setup;
        answer.innerText = item.punchline;
        div.append(question, answer);
        end === step ? prevBtn.disabled = true : prevBtn.disabled = false;
        end >= jokesArr.length ? nextBtn.disabled = true: nextBtn.disabled = false;
    }
}
createCards();




