// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upperCase1 = str1.toUpperCase();
let upperCase2 = str2.toUpperCase();
let upperCase3 = str3.toUpperCase();
console.log(upperCase1, upperCase2, upperCase3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCase1 = upperCase1.toLowerCase();
let lowerCase2 = upperCase2.toLowerCase();
let lowerCase3 = upperCase3.toLowerCase();
console.log(lowerCase1, lowerCase2, lowerCase3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str4 = 'Ревуть воли як ясла повні';
let split = str4.split(' ');
console.log(split);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr1.map(ccc=> ccc.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
const sortNums = (direction, arr) =>{
    if (direction==='ascending'){
        return arr.sort((a, b)=>a-b);
    }else{
        return arr.sort((a, b)=>b-a);
    }
}
console.log(sortNums('ascending', nums));
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration);
console.log(sortMonth);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonth = coursesAndDurationArray.filter(value => {
    return value.monthDuration>5;
});
console.log(filterMonth);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((course, index)=>{
return {id:index, title:course.title, monthDuration:course.monthDuration}
});
console.log(map);
// описати колоду карт (від 6 до туза без джокерів)
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
let aceSpade = cards.filter(value=> value.cardSuit==="spade"&& value.value==='ace');
console.log(aceSpade);
// - всі шістки
 aceSpade = cards.filter(value=> value.value==='6');
console.log(aceSpade);
// - всі червоні карти
aceSpade = cards.filter(value=> value.color==='red');
console.log(aceSpade);
// - всі буби
aceSpade = cards.filter(value=> value.cardSuit==='diamond');
console.log(aceSpade);
// - всі трефи від 9 та більше
aceSpade = cards.filter(value=> value.cardSuit==='clubs' && (value.value>='9' || +value.value>=9));
console.log(aceSpade);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((acc, card)=>{
    if (card.cardSuit === 'spades'){
        acc.spadeSuit.push(card)
    }else if (card.cardSuit === 'diamonds'){
        acc.diamondSuit.push(card)
    }else if (card.cardSuit === 'hearts'){
        acc.heartSuit.push(card)
    }else{
        acc.clubSuit.push(card)
    }
    return acc;
    }, {spadeSuit: [], diamondSuit: [], heartSuit: [], clubSuit: []});
console.log(reduce);
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
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
let filter1 = coursesArray.filter(value =>
    value.modules.includes('sass'));
console.log(filter1);
// --написати пошук всіх об'єктів, в який в modules є docker
let filter2 = coursesArray.filter(value =>
    value.modules.includes('docker'));
console.log(filter2);