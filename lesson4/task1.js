// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S(a, b) {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return 3.14*r**2;
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r){
    return 2*3.14*r*h;
}
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(array) {
        for (let item of array) {
            console.log(item);
        }
}
let movies = [1, 2, 3];
arr(movies);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(info) {
    document.write(`<p>${info}</p>`);
}
let j = 'lorem ipsum';
text(j);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function wishList(peace) {
    document.write(`<ul>
    <li>${peace}</li>
    <li>${peace}</li>
    <li>${peace}</li>
</ul>`)
}
let wish = 'phone';
wishList(wish);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(brands, counts) {
    document.write(`<ul>`)
    for (let count = 0; count<counts; count++) {
        document.write(`<li>${brands}</li>`)
    }
    document.write(`</ul>`)
}
list('prada', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = [32, 'male', true];
function anton(elementArray) {
    document.write(`<ul>`)
    for (let i = 0; i < elementArray.length; i++) {
        const EE = elementArray[i];
            document.write(`<li>${EE}</li>`)
    }
    document.write(`</ul>`)
}
anton(elements);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objects = [
    {
        id:1,
        name: 'name1',
        age: 12,
    },{
        id:2,
        name: 'name2',
        age: 13,
    },{
        id:3,
        name: 'name3',
        age: 14,
    }
];
function dataList(data) {
    for (let datum of data) {
        document.write(`<div>`);
        document.write(`<h3>${datum.id}</h3>`);
        document.write(`<h3>${datum.name}</h3>`);
        document.write(`<h3>${datum.age}</h3>`);
        document.write(`</div>`);
    }
}
dataList(objects);
// - створити функцію яка повертає найменше число з масиву
let nums = [1, 2, 3, 4, 5, 6, 7];
function minimum(numbers) {
    let min = numbers[0];
    for (let s = 0; s<numbers.length; s++){
        if (min>numbers[s]){
            min = numbers[s];
        }
        }
return min;
}
console.log(minimum(nums));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let points = [4, 10, 6];
function sum(p1) {
    let ss = 0;
    for (let r = 0; r < p1.length; r++) {
        ss += p1[r];
    }
    return ss;
}
console.log(sum(points));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let f = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=f;
    return arr;
}
console.log(swap([11, 22, 33, 44], 3, 2))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, Value, nCurrency) {
    let money = 0;
    for (let n = 0; n < Value.length; n++) {
        if (Value[n].currency===nCurrency){
            money = sumUAH/Value[n].value
        }
    }
    return money;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))