const add = (a, b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a, b) => a / b;


const btnSelectr = document.querySelectorAll(".btn");
const txtBx = document.getElementById('display');
for(const btns of btnSelectr){
    btns.addEventListener('click', () => {
        txtBx.value = btns.textContent;
    })
}