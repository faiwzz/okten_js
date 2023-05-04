// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 4;
if (x!==0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть число в діапазоні 0-59');
if (time>=0 && time<=14){
    console.log('Перша');
}else if (time>=15 && time<=29){
    console.log('Друга');
}else if (time>=30 && time<=44){
    console.log('Третя');
}else if (time>=45 && time<=59){
    console.log('Четверта');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Вкажіть число у діапазоні 1-31');
if (day>=1 && day <=10){
    console.log('Перша декада');
}else if (day>=11 && day<=20){
    console.log('Друга декада');
}else if (day>=21 && day<=31){
    console.log('Третя декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dday = +prompt('Введіть порядковий номер дня тижня 1-7');
switch (dday){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('Введіть порядковий номер дня тижня 1-7');
}
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let first = +prompt('Введіть перше число');
let second = +prompt('Введіть друге число');
if (first>second){
    console.log(first);
}
if (first<second){
    console.log(second);
}else if (first===second){
    console.log('Числа рівні між собою');
}