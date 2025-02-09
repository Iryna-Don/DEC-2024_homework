// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
let arrNumber = [1, 3.14, 2.35, 0, -23];
console.log(arrNumber);
// - з 5 стрічкових значень
let arrString = ['1', '2', '3', 'text', ''];
console.log(arrString);
// - з 5 значень стрічкового, числового та булевого типу
let arrMixType = ['string', 5, true, false, -12];
console.log(arrMixType);
// - та вивести його в консоль
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = 'text';
arr[1] = 4;
arr[2] = 757347240924850280804542324564343456543345654345n;
arr[3] = true;
arr[4] = null;
arr[5] = 0;
arr[6] = undefined;
console.log(arr);
//
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let ii = 0;
while (ii < arrNum.length) {
    console.log(arrNum[ii]);
    ii++;
}
//     2. перебрати його циклом for
for (let i = 0; i < arrNum.length; i++) {
    let num = arrNum[i];
    console.log(num);
}
//     3. перебрати циклом while та вивести числа тільки з непарним індексом
let kk = 0;
while (kk < arrNum.length) {
    if (kk % 2 !== 0) {
        console.log(arrNum[kk]);
    }
    kk++;
}
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 0; i < arrNum.length; i++) {
    let num = arrNum[i];
    if (i % 2 !== 0) {
        console.log(num);
    }
}
// 5. перебрати циклом while та вивести числа тільки парні значення
let jj = 0;
while (jj < arrNum.length) {
    if (arrNum[jj] % 2 === 0) {
        console.log(arrNum[jj]);
    }
    jj++;
}
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = 0; i < arrNum.length; i++) {
    let num = arrNum[i];
    if (num % 2 === 0) {
        console.log(num);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arrNum.length; i++) {
    let num = arrNum[i];
    if (num % 3 === 0) {
        arrNum[i] = 'okten';
    }
}
// console.log(arrNum);
// 8. вивести масив у зворотньому порядку.
for (let l = arrNum.length - 1; l >= 0; l--) {
    const element = arrNum[l];
    console.log(element)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// =======================================================================
// =======================================================================
// 1. перебрати його циклом while
let t = arrNum.length - 1;
while (t >= 0) {
    console.log(arrNum[t]);
    t--;
}
//     2. перебрати його циклом for
for (let i = arrNum.length - 1; i >= 0; i--) {
    let num = arrNum[i];
    console.log(num);
}
//     3. перебрати циклом while та вивести числа тільки з непарним індексом
let s = arrNum.length - 1;
while (s >= 0) {
    if (s % 2 !== 0) {
        console.log(arrNum[s]);
    }
    s--;
}
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = arrNum.length - 1; i >= 0; i--) {
    let num = arrNum[i];
    if (i % 2 !== 0) {
        console.log(num);
    }
}
// 5. перебрати циклом while та вивести числа тільки парні значення
let f = arrNum.length - 1;
while (f >= 0) {
    if (arrNum[f] % 2 === 0) {
        console.log(arrNum[f]);
    }
    f--;
}
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = arrNum.length - 1; i >= 0; i--) {
    let num = arrNum[i];
    if (num % 2 === 0) {
        console.log(num);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = arrNum.length - 1; i >= 0; i--) {
    let num = arrNum[i];
    if (num % 3 === 0) {
        arrNum[i] = 'okten';
    }
}
console.log(arrNum);
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3.14, -5, 7, 15, 22, 0, 33, 10];
for (let l = 0; l < numbers.length; l++) {
    const number = numbers[l];
    console.log(number);
}
//     #GamKju89ob
// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let l = 0; l < strings.length; l++) {
    const string = strings[l];
    console.log(string);
}
//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mix = [3.14, null, true, 'string', 1345987698576958705769854938754876n, 0, undefined, [], {}, function () {
}];
for (let l = 0; l < mix.length; l++) {
    const mixElem = mix[l];
    console.log(mixElem)
}
//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr2 = [1, 2, 'string', 'text', true, false, 3.14, false, 'text', true];
for (let l = 0; l < arr2.length; l++) {
    const elem = arr2[l];
    if (typeof elem === "boolean") {
        console.log(elem);
    }
}
// #9stMq2ou
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let l = 0; l < arr2.length; l++) {
    const elem = arr2[l];
    if (typeof elem === "number") {
        console.log(elem);
    }
}
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let l = 0; l < arr2.length; l++) {
    const elem = arr2[l];
    if (typeof elem === "string") {
        console.log(elem);
    }
}
//
// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr3 = [];
arr3[0] = 3.14;
arr3[1] = null;
arr3[2] = true;
arr3[3] = 'string';
arr3[4] = 1345987698576958705769854938754876n;
arr3[5] = 0;
arr3[6] = undefined;
arr3[7] = [];
arr3[8] = {};
arr3[9] = function () {
};
for (let l = 0; l < arr3.length; l++) {
    const elem = arr3[l];
    console.log(elem);
}
//     #mDMWMW5a
// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.
for (let l = 1; l < 11; l++) {
    document.write(`<p>Number of step is ${l}</p>`);
    console.log(l);
}
// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i++) {
    console.log(i);
    document.write(`<div>Number of step - ${i}</div>`);
}
// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i += 2) {
    console.log(i);
    document.write(`<div>Number of step - ${i}</div>`);
}
// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div>Number of step - ${i}</div>`);
    }
}
// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<div>Number of step - ${i}</div>`);
    }
}
//
// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори, жанри).
let books = [
    {
        title: 'title_1',
        pages: 832,
        authors: ['author_1', 'author_2', 'author_3'],
        genre: ['genre_1', 'genre_2', 'genre_3', 'genre_4'],
    },
    {
        title: 'title_2',
        pages: 514,
        authors: ['author_1'],
        genre: ['genre_1', 'genre_2', 'genre_3']
    },
    {
        title: 'title_3_title_title title_title',
        pages: 218,
        authors: ['author_1', 'author_2'],
        genre: ['genre_1', 'genre_2', 'genre_3', 'genre_4'],
    },
    {
        title: 'title_4 title',
        pages: 832,
        authors: ['author_1', 'author_2'],
        genre: ['genre_1', 'genre_2'],
    },
    {
        title: 'title_5 title',
        pages: 222,
        authors: ['author_1'],
        genre: ['genre_1', 'genre_2'],
    }
];
// - знайти найбільшу книжку.
let maxPage = 0;
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (maxPage <= book.pages) {
        maxPage = book.pages;
    }
}
console.log(maxPage);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxQuantityOfGenre = 0;
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (maxQuantityOfGenre <= book.genre.length) {
        maxQuantityOfGenre = book.genre.length;
    }
}
console.log(maxQuantityOfGenre);

let booksWithMaxGenre = [];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.genre.length === maxQuantityOfGenre) {
        booksWithMaxGenre[booksWithMaxGenre.length] = book.title;
        console.log(`${book.title} has maximum genre - ${maxQuantityOfGenre}`);
    }
}
console.log(booksWithMaxGenre);

// - знайти книжку/ки з найдовшою назвою
let maxLengthOfTitle = 0;
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (maxLengthOfTitle <= book.title.length) {
        maxLengthOfTitle = book.title.length;
    }
}
console.log(maxLengthOfTitle);

let booksWithMaxLengthOfTitle = [];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.title.length === maxLengthOfTitle) {
        booksWithMaxLengthOfTitle[booksWithMaxLengthOfTitle.length] = book.title;
        console.log(`${book.title} has maximum length of title - ${maxLengthOfTitle}`);
    }
}
console.log(booksWithMaxLengthOfTitle);

// - знайти книжку/ки які писали 2 автори
let twoAuthorsBooks = [];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.authors.length === 2) {
        console.log(book.title)
        twoAuthorsBooks[twoAuthorsBooks.length] = book.title;
    }
}
console.log(twoAuthorsBooks);

// - знайти книжку/ки які писав 1 автор
let oneAuthorBooks = [];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.authors.length === 1) {
        console.log(book.title)
        oneAuthorBooks[oneAuthorBooks.length] = book.title;
    }
}
console.log(oneAuthorBooks);
