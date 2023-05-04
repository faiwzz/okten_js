// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
console.log('hello');
let owu = 'owu';
console.log('owu');
let com = 'com';
console.log('com');
let ua = 'ua';
console.log('ua');
let q = 1;
console.log(q);
let w = 10;
console.log(w);
let r = -999;
console.log(r);
let d = 123;
console.log(d);
let e = 3.14;
console.log(e);
let f = 2.7;
console.log(f);
let g = 16;
console.log(g);
let check1 = true;
console.log(check1);
let check2 = false;
console.log(check2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Ilona';
let middleName = 'Yuriivna';
let lastName = 'Volkova';

let user = `${lastName} ${firstName} ${middleName}`
console.log(user);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    // let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Your name')
console.log(name);
let midname = prompt('Your midname');
console.log(midname);
let age = +prompt('Your age');
console.log(age);
