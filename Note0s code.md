//  Que no se repita el punto

const newOperand = this.currentOperand + digit;
const newOperandNumber = Number(newOperand);
const newOperandIsValid = !isNaN(newOperandNumber);

if (!newOperandIsValid) {return} ;



// otra opcion de lo mismo de arriba.

if(Number.isNaN(Nunber(this.currentOperand + digit))) return; 