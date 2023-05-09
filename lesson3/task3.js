let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (let u = 0; u<users.length; u++){
    const arrayElement = users[u];
    if (arrayElement.status===true){
        console.log(arrayElement)
    }
}
// - користувачів зі статусом false
for (let w = 0; w<users.length; w++){
    const showElement = users[w];
    if (showElement.status===false){
        console.log(showElement);
    }
}
// - користувачів які старші за 30 років
for (let q = 0; q<users.length; q++){
    const Element = users[q];
    if (Element.age>30){
        console.log(Element);
    }
}