// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let anime = [
    'Demon Slayer',
    'Your name',
    'Naruto',
    'Hunter X hunter',
    '86',
    'BlueLock',
    'A silent voice',
    'Violet Evergarden',
    'Howls moving castle',
    'In the Forest of the Fireflies Light'
];
console.log(anime[0]);
console.log(anime[1]);
console.log(anime[2]);
console.log(anime[3]);
console.log(anime[4]);
console.log(anime[5]);
console.log(anime[6]);
console.log(anime[7]);
console.log(anime[8]);
console.log(anime[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {
        title: 'Me before you',
        pageCount: 80,
        genre: 'Romance Fiction'
    }, {
        title: 'The Picture of Dorian Gray',
        pageCount: 100,
        genre: 'Philosophical Novel'
    }, {
        title: 'The Little Prince',
        pageCount: 112,
        genre: 'Novella'
    },
]
    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books2 = [
    {
        title: 'Me before you',
        pageCount: 80,
        genre: 'Romance Fiction',
        authors: [
            {
                name: 'Jojo Moyes',
                age: 53
            },
        ]
    }, {
        title: 'The Picture of Dorian Gray',
        pageCount: 100,
        genre: 'Philosophical Novel',
        authors: [
            {
                name: 'Oscar Wilde',
                age: 46
            },
        ]
    }, {
        title: 'The Little Prince',
        pageCount: 112,
        genre: 'Novella',
        authors: [
            {
                name: 'Antoine de Saint-Exupéry',
                age: 44
            },
        ]
    },

]
    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya',
    username: 'vasko',
    password: 'vasyl123'},
    {name: 'halyna',
    username: 'halya',
    password: 'halya123'},
    {name: 'kateryna',
    username: 'katya',
    password: 'katya123'},
    {name: 'mariya',
    username: 'marichka',
    password: 'mariya123'},
    {name: 'oksana',
    username: 'sana',
    password: 'sana123'},
    {name: 'marta',
    username: 'tusya',
    password: 'tusya123'},
    {name: 'artem',
    username: 'tyoma',
    password: 'tyoma123'},
    {name: 'anton',
    username: 'toha',
    password: 'toha123'},
    {name: 'alina',
    username: 'lina',
    password: 'lina123'},
    {name: 'valeriya',
    username: 'lera',
    password: 'lera123'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);