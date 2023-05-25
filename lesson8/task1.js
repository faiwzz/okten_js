// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArray = [
    new User(12, 'vasya', 'pupkin', 'vasyapupkin@gmail.com', 973588354),
    new User(53, 'natalya', 'ivanova', 'nataiv@gmail.com', 973599354),
    new User(44, 'petya', 'romanov', 'petyarom@gmail.com', 673588354),
    new User(4, 'anna', 'petriv', 'annpetriv@gmail.com', 973588844),
    new User(9, 'max', 'fun', 'maxfun@gmail.com', 975388354),
    new User(61, 'tolya', 'kirilov', 'tolyanchik@gmail.com', 973522354),
    new User(17, 'kolya', 'zadorozhnyy', 'kozador@gmail.com', 973588844),
    new User(32, 'maria', 'kardash', 'kardashian@gmail.com', 975688354),
    new User(87, 'helen', 'doron', 'helendoron@gmail.com', 973588309),
    new User(14, 'sonya', 'volkova', 'sonyavolkova@gmail.com', 973532354),
];
console.log(usersArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let usersFilter = usersArray.filter(value => value.id%2 === 0);
console.log(usersFilter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = usersArray.sort((a, b) => a.id - b.id);
console.log(usersSort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientArray = [
    new Client(12, 'vasya', 'pupkin', 'vasyapupkin@gmail.com', 973588354, ['pizza', 'cola']),
    new Client(53, 'natalya', 'ivanova', 'nataiv@gmail.com', 973599354, ['pizza', 'cola', 'sandwich']),
    new Client(44, 'petya', 'romanov', 'petyarom@gmail.com', 673588354, ['sandwich']),
    new Client(4, 'anna', 'petriv', 'annpetriv@gmail.com', 973588844, ['water']),
    new Client(9, 'max', 'fun', 'maxfun@gmail.com', 975388354, ['pizza', 'sandwich', 'chicken']),
    new Client(61, 'tolya', 'kirilov', 'tolyanchik@gmail.com', 973522354, ['fanta', 'chicken']),
    new Client(17, 'kolya', 'zadorozhnyy', 'kozador@gmail.com', 973588844, ['water', 'pizza']),
    new Client(32, 'maria', 'kardash', 'kardashian@gmail.com', 975688354,['pizza']),
    new Client(87, 'helen', 'doron', 'helendoron@gmail.com', 973588309, ['soup', 'sandwich', 'tea']),
    new Client(14, 'sonya', 'volkova', 'sonyavolkova@gmail.com', 973532354, ['pizza', 'cola']),
];
console.log(clientArray);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrder = clientArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrder);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, year, maxSpeed, engineCap){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCap = engineCap;
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        console.log(`model - ${this.model} && manufacturer - ${this.manufacturer} && year - ${this.year} && speed - ${this.maxSpeed} && engine - ${engineCap}`)
    }
    this.newMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }
    this.newYear = function (newValue){
        this.year = newValue;
    }
    this.Driver = function (name, surname, age){
        this.nameDriver = name;
        this.surnameDriver = surname;
        this.ageDriver = age;
    }
}
let BMW = new Car('bmw', 'Germany', 2008, 150, 4);
console.log(BMW);
BMW.newMaxSpeed(30)
console.log(BMW);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carr{
    constructor(modell, producer, yearr, mmaxSpeed, engineeCap) {
        this.modell = modell;
        this.producer = producer;
        this.yearr = yearr;
        this.mmaxSpeed = mmaxSpeed;
        this.engineeCap = engineeCap;
        this.drive = function (){
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        this.info = function (){
            console.log(`model - ${this.modell} && manufacturer - ${this.producer} && year - ${this.yearr} && speed - ${this.mmaxSpeed} && engine - ${this.engineeCap}`)
        }
        this.newMaxSpeed = function (newSpeed){
            this.mmaxSpeed += newSpeed;
        }
        this.newYear = function (newValue){
            this.yearr = newValue;
        }
        this.Driver = function (name, surname, age){
            this.nameDriver = name;
            this.surnameDriver = surname;
            this.ageDriver = age;
        }
    }
}
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize){
this.name = name;
this.age = age;
this.footSize = footSize;
}
let Cinderellas = [
    new Cinderella('Sage', 17, 37),
    new Cinderella('Emily', 18, 36),
    new Cinderella('Nona', 17, 35),
    new Cinderella('Sarah', 20, 39),
    new Cinderella('Emma', 19, 40),
    new Cinderella('Lucy', 16, 38),
    new Cinderella('Raze', 21, 39),
    new Cinderella('Chloe', 23, 34),
    new Cinderella('Kylie', 16, 36),
    new Cinderella('Helga', 17, 37),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let princeJames = new Prince('James', 22, 34);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом
for (const princeJame of Cinderellas) {
    if (princeJame.footSize === princeJames.footSize){
        console.log(princeJame);
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = Cinderellas.find(value => value.footSize===princeJames.footSize);
console.log(findCinderella);