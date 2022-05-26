const Calculator = { //calculator object will keep track of the values
    Display_Value: '0',
    First_Operand: null, //this holds the first operand; null to start
    Wait_Second_Operand: false, //checks if operand has second input
    operator: null, //this holds the operand
};

function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand === true) { //checks if true and sets Display_Value to value of keys pressed
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit; //overwrites Display_Value if current value is 0; otherwise it adds to it
    }
}

function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true)  return;
    if(!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; //if Display_value does not contain a dot, add a dot
    }
}

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator
    const Value_of_Input = parseFloat(Display_Value); //converts number diplayed to a number
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //check if operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        result = Number(result).toFixed(9) // 9 places after the decimal point
        result = (result * 1).toString() //removes trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //updates screen with contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {target} = event;
    if (!target.matches('button')) { //if element clicked was not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})