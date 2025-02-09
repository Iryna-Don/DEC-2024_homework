// #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1Up = str1.toUpperCase();
let str2Up = str2.toUpperCase();
let str3Up = str3.toUpperCase();
console.log(str1Up, str2Up, str3Up);


// #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1UpDown = str1Up.toLowerCase();
let str2UpDown = str2Up.toLowerCase();
let str3UpDown = str3Up.toLowerCase();
console.log(str1UpDown, str2UpDown, str3UpDown);


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = '     dirty     string   ';
// let clearStr = [];
// for (let i = 0; i < dirtyStr.length; i++) {
//     if (dirtyStr[i] !== ' ' && dirtyStr[i + 1] !== ' ' ||
//         dirtyStr [i] !== ' ' && dirtyStr[i + 1] === ' ' ||
//         dirtyStr [i] === ' ' && dirtyStr [i + 1] !== ' ') {
//         clearStr.push(dirtyStr[i]);
//     }
// }
// let newStr = '';
// for (const elem of clearStr) {
//     newStr += elem;
//
// }
// dirtyStr = newStr.trim();
//
// console.log(dirtyStr)
// ===================================================== or =========================================================
function clearString(string) {
    let newStrArr = string.split(' ');
    console.log(newStrArr);
    let indexSpace = [];
    for (let i = 0; i < newStrArr.length; i++) {
        let elem = newStrArr[i];
        if (elem === '') {
            indexSpace.push(i);
        }
    }
    console.log(indexSpace);
    for (const index of indexSpace.reverse()) {
        newStrArr.splice(index, 1);
    }
    console.log(newStrArr);
    string = newStrArr.join(' ');
    return string;
}

console.log(clearString(dirtyStr));


//     #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
// function stringToArray(str){
//     return str.split(' ');
// }
// ======================= стрілочна функція =====================================
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(str));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArr = numbers.map(value => value.toString());
// ============================================== or =======================================================
// let newArr = numbers.map(value => `${value}`);
console.log(newArr);


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки, залежно від значення аргументу direction.
let nums = [11, 21, 3];
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b)
        return array;
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a)
        return array;
    }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedCoursesAndDurationArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedCoursesAndDurationArray);

// -- відфільтрувати, залишивши тільки курси з тривалістю більш ніж 5 місяців
let coursesMoreThanFiveMonths = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(coursesMoreThanFiveMonths);
// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
let coursesAndDurationArrayWithID = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value};
})
console.log(coursesAndDurationArrayWithID)
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
let namesOfCards = [
    {name: '6', points: 6,},
    {name: '7', points: 7,},
    {name: '8', points: 8,},
    {name: '9', points: 9,},
    {name: '10', points: 10,},
    {name: 'Jack', points: 11,},
    {name: 'Queen', points: 12,},
    {name: 'King', points: 13,},
    {name: 'Ace', points: 14,},
]
let cardSuit = [
    'diamonds',
    'hearts',
    'clubs',
    'spades'
];
let deckOfCards = [];
cardSuit.forEach(suit => {
    let color = (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';
    namesOfCards.map(name => deckOfCards.push({...name, suit, color: color}))
})
// ========================================= or ===============================================
// for (const suit of cardSuit) {
//     if (suit === 'diamonds' || suit === 'hearts') {
//         namesOfCards.map(value => deckOfCards.push({...value, suit, color: 'red'}))
//     }
//     if (suit === 'clubs' || suit === 'spades') {
//         namesOfCards.map(value => deckOfCards.push({...value, suit, color: 'black'}))
//     }
// }
console.log(deckOfCards);
// - знайти піковий туз
let aceOfSpades = deckOfCards.find(value => value.suit === 'spades' && value.name === 'Ace');
// ============================= or ==============================================================
// let aceOfSpades = deckOfCards.filter(value => value.suit === 'spades' && value.name === 'Ace');
console.log(aceOfSpades);
// - всі шістки
let sixesFromDeck = deckOfCards.filter(value => value.name === '6');
console.log(sixesFromDeck);
// - всі червоні карти
let redCards = deckOfCards.filter(value => value.color === 'red');
console.log(redCards);
// - всі буби
let diamondCards = deckOfCards.filter(value => value.suit === 'diamonds');
console.log(diamondCards);
// - всі трефи від 9 та більше
let spadesCardsFromNine = deckOfCards.filter(value => value.points > 8 && value.suit === 'spades');
console.log(spadesCardsFromNine);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// =========================
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let suitCardsObject = deckOfCards.reduce((previousValue, currentValue) => {
    // if (currentValue.suit === 'spades') {
    //     previousValue.spades.push(currentValue);
    // }
    // if (currentValue.suit === 'diamonds') {
    //     previousValue.diamonds.push(currentValue);
    // }
    // if (currentValue.suit === 'hearts') {
    //     previousValue.hearts.push(currentValue);
    // }
    // if (currentValue.suit === 'clubs') {
    //     previousValue.clubs.push(currentValue);
    // }
    // ==================================================== or ===========================================
    let {suit} = currentValue; //створюємо змінну з ім'ям поля suit з об'єкта currentValue (деструктуризація об'єкта)
    previousValue[suit].push(currentValue);
    return previousValue;
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(suitCardsObject);
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в яких в modules є sass
let coursesWithCss = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithCss);
let coursesWithCss_2 = coursesArray.filter(course => course.modules.find(module=>module ==='sass'));
console.log(coursesWithCss_2);


// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);
let coursesWithDocker_2 = coursesArray.filter(course => course.modules.find(module=>module === 'docker'));
console.log(coursesWithDocker_2);

