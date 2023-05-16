// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc1 = (a, b) => a*b;
console.log(calc1(2, 4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calc2 = (r) => 3.14*r**2;
console.log(calc2(21));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calc3 = (r, h) => 2*3.14*r*h;
console.log(calc3(2, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3];
arr1 = array => {
    for (let item of array) {
        console.log(item);
    }
}
arr1(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
par = text =>{document.write(`<p>${text}</p>`)};
par('vasya');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
list1 = element1 =>{
    document.write(`<ul>
<li>${element1}</li>
<li>${element1}</li>
<li>${element1}</li>
</ul>`);
}
list1('petya');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
list2 = (text, count) =>{
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
list2('disney', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let smth = [2, 'tomas', false];
list3 = prim =>{
    document.write(`<ul>`);
    for (let primElement of prim) {
        document.write(`<li>${primElement}</li>`);
    }
    document.write(`</ul>`);
}
list3(smth);
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
blocks = obj =>{
    for (let objElement of obj) {
        document.write(`<div>`);
        document.write(`<h3>${objElement.id}</h3>`);
        document.write(`<h3>${objElement.name}</h3>`);
        document.write(`<h3>${objElement.age}</h3>`);
        document.write(`</div>`);
    }
}
blocks(objects);
// - створити функцію яка повертає найменше число з масиву
let nums = [3, 10, 18, 51, 16, 2];
small = num =>{
    let min = num[0];
    for (let i = 0; i < num.length; i++) {
        if (min>num[i]){
            min = num[i];
        }
    }
    return min;
}
console.log(small(nums));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let xd = [3, 4, 5];
sum = array =>{
let ss = 0;
    for (let s = 0; s < array.length; s++) {
        ss += array[s];
    }
    return ss;
}
console.log(sum(xd));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
swap = (arr, index1, index2) =>{
    let a = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=a;
    return arr;
}
console.log(swap([2, 4, 6, 8, 10, 12], 3, 0));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
exchange = (sumUAH, Value, nCurrency) =>{
    let money = 0;
    for (let i = 0; i < Value.length; i++) {
        if (Value[i].currency===nCurrency){
            money = sumUAH/Value[i].value;
        }
    }
    return money;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))