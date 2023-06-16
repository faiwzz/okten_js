let userId = new URL(location.href).searchParams.get('userId');
fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
.then((res) => res.json())
.then((user) =>{
    let box = document.getElementsByClassName('wrap')[0];
    let ul = document.createElement('ul');
    recursive(user, ul);
    box.appendChild(ul);
})
function liBuilder(key, value, parent){
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}</b>: ${value}`;
    parent.appendChild(li);
}
function ulBuilder(key, obj, parent){
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursive(obj, ul);
}
function recursive(obj, parent) {
    for (const key in obj) {
        typeof obj[key] === 'object'
            ? ulBuilder(key, obj[key], parent)
            : liBuilder(key, obj[key], parent)
    }
}
// пости юзера
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((posts) => {
    for (let i = 0; i<5; i++) {
        let box2 = document.getElementsByClassName('wrap2')[0];
        let post_box = document.createElement('div');
        post_box.innerHTML = `<b>${posts[i].title}</b>`;
        post_box.classList.add('post_box');
            box2.appendChild(post_box);
        //     кнопка з посиланням на сам пост
            let post_button = document.createElement('button');
            post_button.innerText = `Post Info`;
            post_box.appendChild(post_button);

            post_button.onclick = () => {
                location.href = `../mini-project/post-details.html?postId=${posts[i].id}`
            }
        }
        for (let a = 5; a<10; a++) {
            let box21 = document.getElementsByClassName('wrap21')[0];
            let post_box2 = document.createElement('div');
            post_box2.innerHTML = `<b>${posts[a].title}</b>`;
            post_box2.classList.add('post_box2')
            box21.appendChild(post_box2);
            //     кнопка з посиланням на сам пост
            let post_button2 = document.createElement('button');
            post_button2.innerText = `Post Info`;
            post_box2.appendChild(post_button2);

            post_button2.onclick = () => {
                location.href = `../mini-project/post-details.html?postId=${posts[a].id}`
            }
        }
    })
