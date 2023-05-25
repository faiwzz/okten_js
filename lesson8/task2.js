// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
function User (id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameComp, catchPhrase, bs){
this.id = id;
this.name = name;
this.username = username;
this.email = email;
this.adress = {
    street, suite, city, zipcode, geo: {lat, lng}
}
this.phone = phone;
this.website = website;
this.company = {
    nameComp, catchPhrase, bs
}
}
let person = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(person);
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
function Tag(titleOfTag, action, attrs){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}
let a = new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'}, {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}]);
console.log(a);
