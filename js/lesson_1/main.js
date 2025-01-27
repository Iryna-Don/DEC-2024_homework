// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1 = 'hello';
console.log(str1);
let str2 = 'owu';
console.log(str2);
let str3 = 'ua';
console.log(str3);
let num1 = 1;
console.log(num1);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4);
let num5 = 3.14;
console.log(num5);
let num6 = 2.7;
console.log(num6);
let num7 = 16;
console.log(num7);
let boo1 = true;
console.log(boo1);
let boo2 = false;
console.log(boo2);

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Iryna';
let middleName = 'Grygorivna';
let lastName = 'Donets';
// ================================= конкатенація ===============================
let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);
// ================================= інтерполяція ===============================
let person1 = `${lastName} ${firstName} ${middleName}`;
console.log(person1);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім'ям, По-Батькові та роками. та вивести в консоль
let firstName1 = prompt('Enter your first name: ');
let middleName1 = prompt('Enter your middle name: ');
let lastName1 = prompt('Enter your last name: ');
let person2 = lastName1 + ' ' + firstName1 + ' ' + middleName1;
console.log(person2);

