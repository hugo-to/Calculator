//  DOM elements
    //1.Display
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
    //2.Buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');


// constructor

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement)  {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;

        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;

    }

    allClear ( ) {

    }

    deleteDigit ( ) {
        this.currentOperand = this.currentOperand.slice(0, -1);
        
    }

    appendDigit(digit){
        // allow only one decimal separator 
        if(digit === '.' && this.currentOperand.includes('.')) return;

        // if the first digit is a decimal separator, add a zero to the left 
        if(digit === '.' && this.currentOperand === '') 
        this.currentOperand = '0' + this.currentOperand;

        // if the first digit is a zero, don't allow any more zeros
                if ( digit === '0' && this.currentOperand === '0' ) return;

        // append the digit
        this.currentOperand = this.currentOperand + digit;

    }

    selectOperator(){

    }

    calculate(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }

    getOperandFromDisplay(){

    }
} /* class calculator */


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); 



// event listeners

allClearButton.addEventListener('click', button => {
    calculator.allClear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',  ()  => {
    calculator.deleteDigit() ; 
    calculator.updateDisplay() ; 
    
})


numberButtons.forEach(button => {
    button.addEventListener('click',  ()  => {
        calculator.appendDigit(button.innerText);
        calculator.updateDisplay();
    })
})



//


