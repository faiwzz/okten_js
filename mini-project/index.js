fetch('http://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((users) => {
    let box1 = document.getElementsByClassName('wrap1')[0];
    let box2 = document.getElementsByClassName('wrap2')[0];
    // блоки і кнопки для юзерів:
    for (let i = 0; i < 5; i++) {
        const user = users[i];

        let user_box1 = document.createElement('div');
        user_box1.innerText = `ID: ${user.id}, Name: ${user.name}`;
        user_box1.classList.add('user_box1');
        box1.appendChild(user_box1);

        let user_button1 = document.createElement('button');
        user_button1.innerText = `More Info`;
        user_box1.appendChild(user_button1);


    //     посилання з кнопки:
        user_button1.onclick = () =>{
            location.href = `../mini-project/user-details.html?userId=${user.id}`
        }
    }
    for (let a = 5; a < 10; a++) {
        const item = users[a];

        let user_box2 = document.createElement('div');
        user_box2.innerText = `ID: ${item.id}, Name: ${item.name}`;
        user_box2.classList.add('user_box2');
        box2.appendChild(user_box2);

        let user_button2 = document.createElement('button');
        user_button2.innerText = `More Info`;
        user_box2.appendChild(user_button2);

        //     посилання з кнопки:
        user_button2.onclick = () =>{
            location.href = `../mini-project/user-details.html?userId=${item.id}`
        }
    }
})