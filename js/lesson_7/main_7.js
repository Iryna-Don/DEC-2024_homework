// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users.push(
    new User(5, 'maria', 'petrova', `maria_petrova@gmail.com`, 'XXX-XXX-XX-01'),
    new User(88, 'valentyna', 'moroz', `valentyna_moroz@gmail.com`, 'XXX-XXX-XX-02'),
    new User(12, 'petja', 'sidorov', 'petja_sidorov@gmail.com', 'XXX-XXX-XX-03'),
    new User(67, 'kolja', 'galeev', 'kolja_galeev@gmail.com', 'XXX-XXX-XX-04'),
    new User(55, 'ihor', 'schepak', 'ihor_schepak@gmail.com', 'XXX-XXX-XX-05'),
    new User(34, 'olja', 'kot', 'olja_kot@gmail.com', 'XXX-XXX-XX-06'),
    new User(8, 'iryna', 'palash', 'iryna_palash@gmail.com', 'XXX-XXX-XX-07'),
    new User(90, 'vira', 'drei', 'vira_drei@gmail.com', 'XXX-XXX-XX-08'),
    new User(345, 'liza', 'galushka', 'liza_galushka@gmail.com', 'XXX-XXX-XX-09'),
    new User(10, 'max', 'kozak', 'max_kozak@gmail.com', 'XXX-XXX-XX-10'),
);
console.log(users);
// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let pairedIdUsers = users.filter(value => !(value.id % 2));
console.log(pairedIdUsers);
// #pOeHKct
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let byIncreaseIdUsers = users.sort((a, b) => a.id - b.id);
console.log(byIncreaseIdUsers);
// #nkMXISv
// - створити клас для об'єктів Client з полями id, name, surname, email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// ========================================= якщо вважати, що User не існує ======================================================================
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// ================================================== якщо вважати, що User існує ==============================================================
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// ====================================================== apply ======================================================================
// function Client(id, name, surname, email, phone, order) {
//     User.apply(this, [id, name, surname, email, phone]); // or User.apply(this, arguments);
//     this.order = order;
// }
// ===================================================== call через [] або arguments =======================================================================
// function Client(id, name, surname, email, phone, order) {
//     User.call(this, id, name, surname, email, phone); // or User.apply(this, arguments);
//     this.order = order;
// }
// ==================================================== bind ========================================================================
// function Client(id, name, surname, email, phone, order) {
//     User.bind(this, id, name, surname, email, phone); // or User.apply(this, arguments);
//     this.order = order;
// }

let clientsWithOrders = [];
clientsWithOrders.push(
    new Client(5, 'maria', 'petrova', `maria_petrova@gmail.com`, 'XXX-XXX-XX-01', ['map', 'pen', 'globe', 'book', 'copybook', 'poster', 'timetable']),
    new Client(88, 'valentyna', 'moroz', `valentyna_moroz@gmail.com`, 'XXX-XXX-XX-02', ['map', 'pen', 'globe', 'book']),
    new Client(12, 'petja', 'sidorov', 'petja_sidorov@gmail.com', 'XXX-XXX-XX-03', ['copybook', 'poster', 'timetable']),
    new Client(67, 'kolja', 'galeev', 'kolja_galeev@gmail.com', 'XXX-XXX-XX-04', ['poster', 'timetable']),
    new Client(55, 'ihor', 'schepak', 'ihor_schepak@gmail.com', 'XXX-XXX-XX-05', ['timetable']),
    new Client(34, 'olja', 'kot', 'olja_kot@gmail.com', 'XXX-XXX-XX-06', ['pen', 'globe', 'book']),
    new Client(8, 'iryna', 'palash', 'iryna_palash@gmail.com', 'XXX-XXX-XX-07', ['map', 'pen', 'globe', 'book', 'copybook', 'poster']),
    new Client(90, 'vira', 'drei', 'vira_drei@gmail.com', 'XXX-XXX-XX-08', ['globe', 'book', 'copybook', 'poster']),
    new Client(345, 'liza', 'galushka', 'liza_galushka@gmail.com', 'XXX-XXX-XX-09', ['timetable']),
    new Client(10, 'max', 'kozak', 'max_kozak@gmail.com', 'XXX-XXX-XX-10', ['globe', 'book', 'copybook', 'poster']),
);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
let sortedQuantityOrder = clientsWithOrders.sort((a, b) => a.order.length - b.order.length);
console.log(sortedQuantityOrder);
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Address(city, street, houseNumber, apartmentNumber) {
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.apartmentNumber = apartmentNumber;
}

function Driver(name, surname, age, drivingExperience) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.drivingExperience = drivingExperience;
}

function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity
) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        return console.log(`Їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }

    this.info = function () {
        let infoArr = [];
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                infoArr.push({[key.toUpperCase()]: this[key]});
            }
        }
        return infoArr;
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        return this.maxSpeed;
    }

    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue
        return this.yearOfManufacture;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
        return this.driver;
    }
    // ======================================= з обов'язковою інформацією з використанням конструкторів Address та Driver ==============================================
    this.addDriverInfo = function (name, surname, age, drivingExperience, city, street, houseNumber, apartmentNumber) {
        this.driverInfo = {
            generalInfo: new Driver(name, surname, age, drivingExperience),
            address: new Address(city, street, houseNumber, apartmentNumber),
        }
        return this.driverInfo;
    };
}

let cars = [];
cars.push(
    new Car('zaporozhets', 'ZAZ', 1977, 90, 1.2),
    new Car('volga', 'VAZ', 1990, 140, 2.4),
);

console.log(cars[0].changeYear(2024));
console.log(cars[1].info())
console.log(cars[0].increaseMaxSpeed(15));
cars[0].drive();
cars[1].addDriver({name: 'vasja', age: 76, drivingExperience: 58});
console.log(cars[0].addDriverInfo('kolja', 'shpak', 21, 2, 'Kyiv', 'Galana', 17, 467))

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Auto {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity, drive, info, increaseMaxSpeed, changeYear, addDriver, addDriverInfo) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return console.log(`Їдемо зі швидкістю ${this.maxSpeed}км на годину`)
    }

    info() {
        let infoArr = [];
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                infoArr.push({[key.toUpperCase()]: this[key]});
            }
        }
        return infoArr;
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        return this.maxSpeed;
    }

    changeYear(newValue) {
        this.yearOfManufacture = newValue
        return this.yearOfManufacture;
    }

    addDriver(driver) {
        this.driver = driver;
        return this.driver;
    }

    // ======================================= з обов'язковою інформацією з використанням конструкторів Address та Driver ==============================================
    addDriverInfo(name, surname, age, drivingExperience, city, street, houseNumber, apartmentNumber) {
        this.driverInfo = {
            generalInfo: new Driver(name, surname, age, drivingExperience),
            address: new Address(city, street, houseNumber, apartmentNumber),
        }
        return this.driverInfo;
    };
}

// ================================== через конструктор Driver =========================================

let auto_1 = new Auto('zaporozhets', 'ZAZ', 1977, 90, 1.2);
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let girls = [];
girls.push(
    new Cinderella('maryna', 23, 36.5),
    new Cinderella('maria', 17, 35),
    new Cinderella('marianna', 25, 36),
    new Cinderella('svetlana', 27, 37),
    new Cinderella('ksenija', 22, 36.5),
    new Cinderella('sonja', 18, 38),
    new Cinderella('katja', 23, 43),
    new Cinderella('maria', 22, 37),
    new Cinderella('olha', 18, 38),
    new Cinderella('inna', 19, 38.5),
);
console.log(girls);

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('vasja', 25, 37);
let cinderellas = [];
for (const girl of girls) {
    if (girl.footSize === prince.foundShoe) {
        cinderellas.push(girl);
    }
}
console.log(cinderellas);
//
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let foundCinderella = girls.find(value => value.footSize === prince.foundShoe);
console.log(foundCinderella)

//    Якщо декілька Попелюшок
let foundCinderellas = girls.filter(value => value.footSize === prince.foundShoe);
console.log(foundCinderellas)


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
// ================================================== forEach =====================================================
Array.prototype.myForEach = function (callback) {
    if (callback && typeof callback === 'function' && Array.isArray(this)) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
};
let arrToSquareObject = [];
let arr = [1, 3, 5, 7, 9];
arr.myForEach((elem, index, array) => {
    return arrToSquareObject.push({id: index + 1, number: elem, resultSquare: elem ** 2});
});
console.log(arrToSquareObject);


// ================================================== filter =====================================================
Array.prototype.myFilter = function (callback) {
    let arr = [];
    if (callback && typeof callback === 'function' && Array.isArray(this)) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                arr.push(this[i]);
            }
        }
    }
    return arr;
}

let arr5 = [1, 12, -9, 5];
let arrNumMore3 = arr5.myFilter((elem, index, array) => elem > 3);
console.log(arrNumMore3);





