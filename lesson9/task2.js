// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
for (const course of coursesArray) {
    let bigBox = document.createElement('div');
    bigBox.style.height = '100vh';
    bigBox.style.width = '100vw';
    bigBox.style.display = 'flex';
    bigBox.style.alignItems = 'center';
    bigBox.style.flexDirection = 'column';
    document.body.appendChild(bigBox);
    let header = document.createElement('div');
    header.style.height = '20vh';
    header.style.width = '100vw';
    header.style.backgroundColor = 'pink';
    header.innerText = course.title;
    header.style.textAlign = 'center';
    bigBox.appendChild(header);
    let month = document.createElement('div');
    month.innerText = course.monthDuration;
    month.innerText = `Тривалість курсу: ${course.monthDuration}`;
    month.style.color = 'white';
    month.style.height = '20vh';
    month.style.width = '50vw'
    month.style.backgroundColor = 'purple';
    month.style.textAlign = 'center';
    bigBox.appendChild(month);
    let hour = document.createElement('div');
    hour.innerText = course.hourDuration;
    hour.innerText = `Тривалість курсу у годинах: ${course.hourDuration}`;
    hour.style.color = 'white';
    hour.style.height = '20vh';
    hour.style.width = '50vw'
    hour.style.backgroundColor = 'purple';
    hour.style.textAlign = 'center';
    bigBox.appendChild(hour);
    let ul = document.createElement('ul');
    bigBox.appendChild(ul);
    for (const element of course.modules) {
        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);
    }
}