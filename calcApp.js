const add = (a, b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a, b) => a / b;

const operate = (x, y, operator) => {
    if(operator == "+")
        return add(x, y);
    if(operator == "-")
        return subtract(x, y);
    if(operator == "x")
        return multiply(x, y);
    if(operator == "/")
        return divide(x, y);
};




//adds functionality to buttons
const btnSelectr = document.querySelectorAll(".btn");
const txtBx = document.getElementById('display');
for(const btns of btnSelectr){
    btns.addEventListener('click', () => {
        txtBx.value += btns.textContent;
    })
}

//clear button
const clear_button = document.querySelector(".btnClear");
clear_button.addEventListener('click', () =>{
    txtBx.value = '';
})


const enter_button = document.querySelector(".btnEnter");
enter_button.addEventListener('click', () => {
    let input = txtBx.value;
    const newInput = input.split(" ");
    let oeprand1 = Number(newInput[0]);
    let operand2 = Number(newInput[2]);
    let operator = newInput[1];
    txtBx.value = operate(oeprand1, operand2, operator);
})