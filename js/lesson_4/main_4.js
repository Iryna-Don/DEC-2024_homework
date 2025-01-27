// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfTheSquare(a, b) {
    return a * b;
}

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfTheCircle(r) {
    // return Math.round(Math.PI*r**2);
    // return Math.round(Math.PI*Math.pow(r, 2));
    // return +(Math.PI*Math.pow(r, 2)).toFixed(2);
    return +Math.round(Math.PI * r ** 2).toFixed(2);
}

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaOfTheCylinder(h, r) {
    return +(2 * Math.PI * r * h).toFixed(2);
}

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function consoleEveryElemOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }
}

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeTextToDocument() {
    for (const argument of arguments) {
        document.write(`<p>${argument}</p>`)
    }
}

// ================================== or ====================================================
function writeTextToDoc(text) {
    document.write(`<p>${text}</p>`)
}

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function create3Li(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write
function createLi(quantityOfTagsLi, text) {
    document.write(`<ul>`)
    for (let i = 0; i < quantityOfTagsLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві),
// та будує для них список (ul li) та виводить його через document.write
function writeArray(array) {
    document.write(`<ul>`);
    for (const elem of array) {
        document.write(`<li>${elem}</li>`)
    }
    document.write(`</ul>`);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function writeArrayWithObjects(arrayWithObjects) {
    for (const object of arrayWithObjects) {
        document.write(`
        <div class="user-block">
        <p>ID - ${object.id}</p>
        <p>Name - ${object.name}</p>
        <p>Age - ${object.age}</p>
        </div>
        `)
    }
}

// ================================= or ============================================
function writeArrayWithObjects_2(arrayWithObjects) {
    for (const obj of arrayWithObjects) {
        document.write(`<div class="user-block">`)
        for (const objectKey in obj) {
            document.write(`
        <p>${objectKey} - ${obj[objectKey]}</p>
        `)
        }
        document.write(`</div>`)
    }
}

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function findMinNumberInArr(array) {
    let minNum = array[0];
    for (let elem of array) {
        if (elem < minNum) {
            minNum = elem;
        }
    }
    return minNum;
}

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumNumbersInArr(array) {
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum;
}

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr = [11, 22, 33, 44];

function swap(arr, index1, index2) {
    let helpVar = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = helpVar;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
console.log(arr);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let currencyValues = [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42},
    {currency: 'PLN', value: 9.64},
    {currency: 'GBP', value: 48.54},
];

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        console.log(currencyValue.currency);
        if (currencyValue.currency === exchangeCurrency) {
            // return +(sumUAH / currencyValue.value).toFixed(2);
            return (sumUAH / currencyValue.value).toFixed(2) + ' ' + exchangeCurrency;
        }
    }
}

console.log(exchange(1500, currencyValues, 'EUR'));