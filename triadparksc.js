let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');
let a5 = document.querySelector('#a5');
let a6 = document.querySelector('#a6');
let a7 = document.querySelector('#a7');
let a8 = document.querySelector('#a8');
let a9 = document.querySelector('#a9');
let a10 = document.querySelector('#a10');
let a11 = document.querySelector('#a11');
let a12 = document.querySelector('#a12');
let a13 = document.querySelector('#a13');
let a14 = document.querySelector('#a14');
let a15 = document.querySelector('#a15');
let a16 = document.querySelector('#a16');
let a17 = document.querySelector('#a17');
let a18 = document.querySelector('#a18');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let b7 = document.querySelector('#b7');
let b8 = document.querySelector('#b8');
let b9 = document.querySelector('#b9');
let b10 = document.querySelector('#b10');
let b11 = document.querySelector('#b11');
let b12 = document.querySelector('#b12');
let b13 = document.querySelector('#b13');
let b14 = document.querySelector('#b14');
let b15 = document.querySelector('#b15');
let b16 = document.querySelector('#b16');
let b17 = document.querySelector('#b17');
let b18 = document.querySelector('#b18');
let c1 = document.querySelector('#c1');
let c2 = document.querySelector('#c2');
let c3 = document.querySelector('#c3');
let c4 = document.querySelector('#c4');
let c5 = document.querySelector('#c5');
let c6 = document.querySelector('#c6');
let c7 = document.querySelector('#c7');
let c8 = document.querySelector('#c8');
let c9 = document.querySelector('#c9');
let c10 = document.querySelector('#c10');
let c11 = document.querySelector('#c11');
let c12 = document.querySelector('#c12');
let c13 = document.querySelector('#c13');
let c14 = document.querySelector('#c14');
let c15 = document.querySelector('#c15');
let c16 = document.querySelector('#c16');
let c17 = document.querySelector('#c17');
let c18 = document.querySelector('#c18');


let btnAdd = document.querySelector('#button');
let result1 = document.querySelector('#total1');
let result2 = document.querySelector('#total2');
let result3 = document.querySelector('#total3');
let result4 = document.querySelector('#total4');


btnAdd.addEventListener('click', () => {
    let total = parseInt(a1.value) + parseInt(a2.value) + parseInt(a3.value) + parseInt(a4.value) + parseInt(a5.value) + parseInt(a6.value) + parseInt(a7.value) + parseInt(a8.value)
        + parseInt(a9.value) + parseInt(a10.value) + parseInt(a11.value) + parseInt(a12.value) + parseInt(a13.value) + parseInt(a14.value) + parseInt(a15.value) + parseInt(a16.value) + parseInt(a17.value) + parseInt(a18.value);
    result1.innerText = total;
    let total2 = parseInt(b1.value) + parseInt(b2.value) + parseInt(b3.value) + parseInt(b4.value) + parseInt(b5.value) + parseInt(b6.value) + parseInt(b7.value) + parseInt(b8.value)
        + parseInt(b9.value) + parseInt(b10.value) + parseInt(b11.value) + parseInt(b12.value) + parseInt(b13.value) + parseInt(b14.value) + parseInt(b15.value) + parseInt(b16.value) + parseInt(b17.value) + parseInt(b18.value);
    result2.innerText = total2;
    let total3 = parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value) + parseInt(c4.value) + parseInt(c5.value) + parseInt(c6.value) + parseInt(c7.value) + parseInt(c8.value)
        + parseInt(c9.value) + parseInt(c10.value) + parseInt(c11.value) + parseInt(c12.value) + parseInt(c13.value) + parseInt(c14.value) + parseInt(c15.value) + parseInt(c16.value) + parseInt(c17.value) + parseInt(c18.value);
    result3.innerText = total3;
    let total4 = parseInt(d1.value) + parseInt(d2.value) + parseInt(d3.value) + parseInt(d4.value) + parseInt(d5.value) + parseInt(d6.value) + parseInt(d7.value) + parseInt(d8.value)
        + parseInt(d9.value) + parseInt(d10.value) + parseInt(d11.value) + parseInt(d12.value) + parseInt(d13.value) + parseInt(d14.value) + parseInt(d15.value) + parseInt(d16.value) + parseInt(d17.value) + parseInt(d18.value);
    result4.innerText = total4;

});