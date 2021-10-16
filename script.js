const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operator = '';
let awaitingNextValue = false;

function sendNumberValue(number){
    // Replace current display value if first value is entered
    if(awaitingNextValue)
    {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    }
    else
    {
        // If the current display value is 0, replace it, if not add a number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal(){
    // If operator pressed, don't add decimal
    if(awaitingNextValue) return;
    // If no decimal, add one
    if(!calculatorDisplay.textContent.includes('.'))
    {
        calculatorDisplay.textContent += '.';
    }
}

function useOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign first value if no value
    if(!firstValue)
    {
        firstValue = currentValue;
    }
    else
    {

    }
    // Ready for the next value, store operator
    awaitingNextValue = true
    operatorValue = operator;

}

// Add event listeners for numbers, operatorrs, decimal buttons
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0)
    {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
    else if(inputBtn.classList.contains('operator'))
    {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }
    else if(inputBtn.classList.contains('decimal'))
    {
        inputBtn.addEventListener('click', addDecimal);
    }
});

// Reset display
function resetAll(){
    calculatorDisplay.textContent = '0';
    firstValue = 0;
    operator = '';
    awaitingNextValue = false;
}

// Event listener
clearBtn.addEventListener('click', resetAll);