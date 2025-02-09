//
// 1. Створити пустий масив та :
let generalArr = []; //generalArr загальний для усіх завдань з a. по d.
//     a. заповнити його 50 парними числами за допомоги циклу.
let arrPairedNum = [];
for (let i = 1; arrPairedNum.length < 50; i++) {
    if (i % 2 === 0) {
        arrPairedNum[arrPairedNum.length] = i;
        generalArr[generalArr.length] = i;
    }
}
console.log(arrPairedNum);
//     b. заповнити його 50 непарними числами за допомоги циклу.
let arrUnpairedNum = [];
for (let i = 1; arrUnpairedNum.length < 50; i++) {
    if (i % 2 !== 0) {
        arrUnpairedNum[arrUnpairedNum.length] = i;
        generalArr[generalArr.length] = i;
    }
}
console.log(arrUnpairedNum);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
let arrayRandom = [];
for (let i = 0; arrayRandom.length < 20; i++) {
    // Math.round(Math.random()*1000);
    arrayRandom[arrayRandom.length] = +(Math.random() * 1000).toFixed(0);
    generalArr[generalArr.length] = +(Math.random() * 1000).toFixed(0);

}
console.log(arrayRandom);
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrayRange = [];
for (let i = 0; arrayRange.length < 20; i++) {
    // let random = Math.round(Math.random()*1000);
    let random = +(Math.random() * 1000).toFixed(0);
    if (random >= 8 && random <= 732) {
        arrayRange[arrayRange.length] = random;
        generalArr[generalArr.length] = random;
    }
}
console.log(arrayRange);
console.log(generalArr);
// 2. Вивести за допомогою console.log кожен третій елемент
//елемент з індексом 2 - третій за рахунком
for (let i = 2; i < generalArr.length; i += 3) {
    const elem = generalArr[i];
    console.log(elem)
}
// 3. Вивести за допомогою console.log кожен третій елемент тільки
// якщо цей елемент є парним.
for (let i = 2; i < generalArr.length; i += 3) {
    const elem = generalArr[i];
    if (elem % 2 === 0) {
        console.log(elem);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент тільки
// якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
for (let i = 2; i < generalArr.length; i += 3) {
    const elem = generalArr[i];
    if (elem % 2 === 0) {
        console.log(elem);
        newArr[newArr.length] = elem;
    }
}
console.log(newArr);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56
let ar = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < ar.length; i++) {
    const elem = ar[i];
    if (ar[i + 1] % 2 === 0) {
        console.log(elem);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
let sum = 0;
let arr_1 = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arr_1.length; i++) {
    const elem = arr_1[i];
    sum += elem;
}
console.log(sum);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr_2 = [];
for (let i = 0; i < 10; i++) {
    arr_2[arr_2.length] = +(Math.random() * 100).toFixed(0);
}
console.log(arr_2);
let arr_3 = [];
for (let i = 0; i < arr_2.length; i++) {
    arr_3[arr_3.length] = arr_2[i] * 5;
}
console.log(arr_3);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
let arr_4 = [];
let mixArray = [true, undefined, 12, -35, 0, null, 'string', [], function () {
}, 89, 43];
for (let i = 0; i < mixArray.length; i++) {
    const elem = mixArray[i];
    if (typeof elem === 'number') {
        arr_4[arr_4.length] = elem;
    }
}
console.log(arr_4);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    const user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        const city = citiesWithId[j];
        if (user.id === city.user_id) {
            // {id: 1, name: 'vasya', age: 31, status: false},
            // {user_id: 3, country: 'USA', city: 'Portland'},
            usersWithCities[usersWithCities.length] = [
                {
                    id: user.id,
                    name: user.name,
                    age: user.age,
                    status: user.status,
                    address: {
                        user_id: city.user_id,
                        country: city.country,
                        city: city.city
                    }
                }
            ]
        }
    }
}
console.log(usersWithCities);
console.log(usersWithId);
console.log(citiesWithId);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbersArr.length; i++) {
    const number = numbersArr[i];
    if (number % 2 === 0 && number !== 0) {
        console.log(number);
    }
}
let emptyArr = [];
// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
for (let i = 0; i < numbersArr.length; i++) {
    emptyArr[i] = numbersArr[i];
}
console.log(emptyArr);
// - Дано масив: ['a', 'b', 'c'].
// За допомогою циклу for зібрати всі букви в слово.
let stringArr = ['a', 'b', 'c'];
let string = '';
for (let i = 0; i < stringArr.length; i++) {
    string += stringArr[i];
}
console.log(string);
// - Дано масив: ['a', 'b', 'c']. За допомогою циклу
// while зібрати всі букви в слово.
let i = 0;
let text = '';
while (i < stringArr.length) {
    text +=stringArr[i];
    i++;
}
console.log(text);
// - Дано масив: ['a', 'b', 'c']. За допомогою циклу
// for of зібрати всі букви в слово.
let word = '';
for (const textElem of stringArr) {
    word +=textElem;
}
console.log(word);
