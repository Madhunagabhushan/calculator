let inputField = document.getElementById('type');
let buttons=document.querySelectorAll('.button');

function appendNumber(number) {
    inputField.value += number;
}

function appendSymbol(symbol) {
    inputField.value += symbol;
}

function clearInput() {
    inputField.value = '';
}

function deleteLastCharacter() {
    inputField.value = inputField.value.slice(0, -1);
}
function calculate() {
  try {
      let result = eval(inputField.value);
      inputField.value = result;
  } catch (error) {
      inputField.value = 'Error';
  }
}
