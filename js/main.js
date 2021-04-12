// console.log(window); // Parent of all object

// Single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item')); // not recommended
// console.log(document.getElementsByTagName('li')); // not recommended

//- DOM accessing
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// const ul = document.querySelector('.items');
// ul.remove(); // remove all
// ul.lastElementChild.remove() // remove last
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Ibnu';
// ul.lastElementChild.innerHTML = '<h4>Edited</h4>'


// DOM elements accessing
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e);

//     document.querySelector('#my-form').style.background = '#ccc';

//     document.querySelector('body').classList.add('bg-dark');

//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}
