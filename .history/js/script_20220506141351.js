const num1=document.getElementById('num1');
const result=document.getElementById('result');
const plus=document.getElementById('plus');

const data=document.querySelector('[data-operation]');

const resultBtn=document.querySelector('#result-btn');

const clearBtn=document.getElementById('clear');




// data.addEventListener('click',()=>{
//     console.log(this.nextElementSibling);
// })

// num1.addEventListener('click',()=>{
//     result.innerHTML+=num1.getAttribute('value');
    
// })

// resultBtn.addEventListener('click',()=>{
//     alert('result');
// })


// const clear=()=>result.innerHTML="";

// clearBtn.addEventListener('click',clear);


// plus.addEventListener('click',()=>{
//     alert(result.value);
// })











const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      
  }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


const appendNumber=(number)=> {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();

}


numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.nextElementSibling.value);
    })
})
