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
        //checks to see if input box has too many chars or not
        if(txtBx.value.length < 18)
            txtBx.value += btns.textContent;
    })
}

const operatorSelector = document.querySelectorAll(".operator");
for(const operatorBtn of operatorSelector){
    operatorBtn.addEventListener('click', () => {
        //if the operator is already in the string and you try to add another 
        //operator then complete the operation
        //the else statement is for normal adding of inputs
        if(txtBx.value.includes(" + ") || txtBx.value.includes(" - ") ||
        txtBx.value.includes(" / ") || txtBx.value.includes(" x ")){
            let input = txtBx.value;
            const newInput = input.split(" ");
            let operand1 = Number(newInput[0]);
            let operand2 = Number(newInput[2]);
            let operator = newInput[1];
            txtBx.value = operate(operand1, operand2, operator);
            txtBx.value += operatorBtn.textContent;
        }
        else {
            txtBx.value += operatorBtn.textContent;
        }
    })
}


//clear button
const clear_button = document.querySelector(".btnClear");
clear_button.addEventListener('click', () =>{
    txtBx.value = '';
})

//delete button
const delete_button = document.querySelector(".btnDelete");
delete_button.addEventListener('click', () => {
    txtBx.value = txtBx.value.slice(0, txtBx.value.length - 1);
})


const enter_button = document.querySelector(".equal");
enter_button.addEventListener('click', () => {
    if (txtBx.value.length >= 5){
        let input = txtBx.value;
        const newInput = input.split(" ");
        let operand1 = Number(newInput[0]);
        let operand2 = Number(newInput[2]);
        let operator = newInput[1];
        txtBx.value = operate(operand1, operand2, operator);
        //gets rid of long trailing decimals
        if (txtBx.value.length > 15){ 
            txtBx.value = txtBx.value.slice(0, 14);
        }
    }
})



