// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.

function copier(object) {
    let jsonCopy = JSON.parse(JSON.stringify(object));
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            let item = object[i];
            if (typeof item === 'function') {
                jsonCopy[i] = item.bind(jsonCopy);
            }
            if (typeof item === undefined || typeof item === null || isNaN(item) && typeof item !== 'function') {
                jsonCopy[i] = item;
            }
        }
        return jsonCopy;
    } else {
        for (const key in object) {
            let elem = object[key];
            if (typeof elem === 'function') {
                jsonCopy[key] = elem.bind(jsonCopy);
            }
            if (typeof elem === undefined || typeof elem === null || isNaN(elem) && typeof elem !== 'function') {
                jsonCopy[key] = elem;
            }
        }
        return jsonCopy;
    }
}

let obj = {
    id: 1,
    name: 'irina',
    children: null,
    status: undefined,
    func: function (msg) {
        return msg;
    },
    animals: NaN,
    address: {
        city: 'Kyiv',
        street: 'Galana',
        house: 17,
        apartment: 465,
        floor: null,
        flat: undefined,
        cat: NaN,
    }
}

let arrAny = [1, 2, null, undefined, NaN, function add (a, b){return a + b}, [3, 4]]


let copyObj = copier(obj);
console.log(copyObj);
console.log(obj.func === copyObj.func);
console.log(copyObj.func('ave maria'));

let copyArrAny = copier(arrAny);
console.log(copyArrAny);
console.log(obj[5] === copyArrAny[5]);
console.log(copyArrAny[5](4, 6));

// Додати перевірки на undefined, null, NaN.
//     Подумати та реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.
// ===============================================================================================================


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
coursesAndDurationArray.map((value, index) => value.id = index + 1);
console.log(coursesAndDurationArray);
