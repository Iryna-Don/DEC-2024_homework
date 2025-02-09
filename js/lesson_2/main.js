// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
let arr = [null, 1, 3.14, true, NaN, undefined, 'string', [], {}, function () {
}];
console.log(arr);
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
let book1 = {
    title: 'JavaScript. Детальне керівництво',
    pageCount: 1080,
    genre: 'Програмування',
};
let book2 = {
    title: '11. 22. 63',
    pageCount: 752,
    genre: 'Фантастика',
};
let book3 = {
    title: 'Казки',
    pageCount: 120,
    genre: 'Казки',
};
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors. Поле "автори" - є масивом. Кожен автор має поля name та age.
//==================== додавання до раніше створених об'єктів ==================================
book1.authors = [{name: 'Девід Фленаган', age: 54,}];
book2.authors = [{name: 'Стівен Едвін Кінг', age: 77,}];
book3.authors = [{name: 'Вiльгельм Гауф', age: 24,}];
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутність "користувач".
// Поля: name, username, password. Вивести в консоль пароль кожного користувача
//
let user_1 = {
    name: 'name_1',
    username: 'username_1',
    password: 'password_1',
};
let user_2 = {
    name: 'name_2',
    username: 'username_2',
    password: 'password_2',
};
let user_3 = {
    name: 'name_3',
    username: 'username_3',
    password: 'password_3',
};
let user_4 = {
    name: 'name_4',
    username: 'username_4',
    password: 'password_4',
};
let user_5 = {
    name: 'name_5',
    username: 'username_5',
    password: 'password_5',
};
let user_6 = {
    name: 'name_6',
    username: 'username_6',
    password: 'password_6',
};
let user_7 = {
    name: 'name_7',
    username: 'username_7',
    password: 'password_7',
};
let user_8 = {
    name: 'name_8',
    username: 'username_8',
    password: 'password_8',
};
let user_9 = {
    name: 'name_9',
    username: 'username_9',
    password: 'password_9',
};
let user_10 = {
    name: 'name_10',
    username: 'username_10',
    password: 'password_10',
};
let users = [
    user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9, user_10
];
console.log(users[0].password, users[0]['password']);
console.log(users[1].password, users[1]['password']);
//...
console.log(users[9].password, users[9]['password'])
// =============== або безпосередньо створення у масиві на прикладі 2 users ==========================
let users_2 = [
    {
        name: 'name_1',
        username: 'username_1',
        password: 'password_1',
    },
    {
        name: 'name_2',
        username: 'username_2',
        password: 'password_2',
    },
]
console.log(users_2[0]['password']);
console.log(users_2[0].password);
console.log(users_2[1]['password']);
console.log(users_2[1].password);
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
//
let temperatureInfo = [
    {
        morningTemperature:
            {
                Sunday: 15,
                Monday: 10,
                Tuesday: 5,
                Wednesday: -4,
                Thursday: -15,
                Friday: 8,
                Saturday: 0,
            }
    },
    {
        dayTemperature:
            {
                Sunday: 15,
                Monday: 10,
                Tuesday: 5,
                Wednesday: -4,
                Thursday: -15,
                Friday: 8,
                Saturday: 0,
            }
    },
    {
        eveningTemperature:
            {
                Sunday: 15,
                Monday: 10,
                Tuesday: 5,
                Wednesday: -4,
                Thursday: -15,
                Friday: 8,
                Saturday: 0,
            }
    }
];
// =============================================== second variant ==================================
let infoOfTemperature = [
    {
        Sunday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Monday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Tuesday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Wednesday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Thursday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Friday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
    {
        Saturday: {
            morningTemperature: 5,
            dayTemperature: 10,
            eveningTemperature: -6,
        }
    },
];
console.log(infoOfTemperature);
console.log(temperatureInfo);
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте скрипт при a, що дорівнює 1, 0, -3
//
let x = 0;
// ==========================  the conditional (ternary) operator =============================
x !== 0 ? console.log('Вірно') : console.log('Невірно');
// ==================================== if else ================================================
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
let time = 23;
if (time >= 0 && time <= 15) {
    console.log('Це перша чверть');
} else if (time > 15 && time <= 30) {
    console.log('Це друга чверть');
} else if (time > 30 && time <= 45) {
    console.log('Це третя чверть');
} else if (time > 45 && time <= 59) {
    console.log('Це четверта чверть');
} else {
    console.log('Уведіть число від 0 до 59')
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 2;
if (day >= 1 && day <= 10) {
    console.log('Це перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Це друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('Це третя декада місяця');
} else {
    console.log('Уведіть дату від 1 до 31');
}
// #KzrtqyQ
// - Скласти розклад на тиждень за допомоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let dayOfWeek = +prompt('Enter number of the weekday from 1 to 7: ')
let dayOfWeek = 4;
// switch (dayOfWeek) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Only numbers from 1 to 7');
// }
// ================================== or =========================================
let monday = {
    '12:45': 'monday meeting',
    '16:00': 'monday go for a walk'
};
let tuesday = {
    '12:00': 'tuesday meeting',
    '16-00': 'tuesday go for a walk'
};
let wednesday = {
    '12:45': 'wednesday meeting',
    '16-00': 'wednesday go for a walk'
};
let thursday = {
    '12:45': 'thursday meeting',
    '16-50': 'thursday go for a walk'
};
let friday = {
    '12:45': 'friday meeting',
    '16-00': 'friday go for a walk'
};
let saturday = {
    '12:45': 'saturday meeting',
    '18-00': 'saturday go for a walk'
};
let sunday = {
    '12:45': 'sunday meeting',
    '17:00': 'sunday go for a walk'
};
switch (dayOfWeek) {
    case 1:
        console.log(monday);
        break;
    case 2:
        console.log(tuesday);
        break;
    case 3:
        console.log(wednesday);
        break;
    case 4:
        console.log(thursday);
        break;
    case 5:
        console.log(friday);
        break;
    case 6:
        console.log(saturday);
        break;
    case 7:
        console.log(sunday);
        break;
    default:
        console.log('Only numbers from 1 to 7');
}

//         #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//       Потрібно знайти та вивести максимальне число з тих двох.
//       Також потрібно врахувати коли введені рівні числа.
//
// let userNumber_1 = +prompt('Enter first number: ');
// let userNumber_2 = +prompt('Enter second number: ');
let userNumber_1 = 2;
let userNumber_2 = 12;
if (userNumber_1 > userNumber_2) {
    console.log(`The first number ${userNumber_1} is greater than the second ${userNumber_2}`);
} else if (userNumber_1 === userNumber_2) {
    console.log('These numbers are equal');
} else {
    console.log(`The second number ${userNumber_2} is greater than the first ${userNumber_1}`);
}
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
//     і т.д. включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"
//         якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null
//         undefined і т.д.).
//
let xx = 0;
if (xx === undefined || xx === false || xx === null || xx === 0 || xx === -0 || xx === 0n || xx === '') {
    xx = 'default';
    console.log(xx);
}

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в теці 2024 plan) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - super`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - super`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - super`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - super`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - super`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - super`);
}
//=================== with iteration ================================
for (let i = 0; i <= 5; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(`${coursesAndDurationArray[i].title} - super`);
    }
}
