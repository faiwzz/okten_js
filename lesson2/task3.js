// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = false;
if (x===NaN || x===false || x===undefined || x===null || x===0 || x===""){
x = "default";
console.log(x);
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер');
}