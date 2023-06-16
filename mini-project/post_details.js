let postId = new URL(location.href).searchParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then((res) => res.json())
.then((post) => {
let box1 = document.getElementsByClassName('wrap1')[0];
    let ul = document.createElement('ul');
    recursive(post, ul);
    box1.appendChild(ul);
})
function liCreator(key, value, parent){
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}</b>: ${value}`;
    parent.appendChild(li);
}
function ulBuilder(key, obj, parent) {
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
            : liCreator(key, obj[key], parent)
    }
}
//коментарі поста
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then((res) => res.json())
.then((comm) => {
    for (let commElement of comm) {
        let box2 = document.getElementsByClassName('wrap2')[0];
        let comm_box = document.createElement('div');
        let comm_ul = document.createElement('ul');
        comm_box.classList.add('comm_box');
        recursive(commElement, comm_ul);
        comm_box.appendChild(comm_ul);
        box2.appendChild(comm_box);
    }
})
