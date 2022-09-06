let one = document.querySelector('#a1');
let two = document.querySelector('#a2');

let btnAdd = document.querySelector('#button');
let result = document.querySelector('#total');


btnAdd.addEventListener('click', () =>{
    let total = parseInt(one.value) + parseInt(two.value);
    result.innerText = total;
});