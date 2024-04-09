let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue !== '') {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
