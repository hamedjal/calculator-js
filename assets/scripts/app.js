
const defaultResult = 0;
const currentResult = [];
let result;
const allButtons = document.querySelectorAll('span');
const currentCalculationOutput = document.getElementById('txt');
allButtons.forEach(function (button, index) {
  button.addEventListener('click', () => {
    if (event.target.innerText == 'C') {
      currentCalculationOutput.value = '';
      currentResult.splice(0);
      result = undefined;
    }
    if (event.target.innerText !== 'C' && event.target.innerText !== '=') {
      (currentCalculationOutput.value += event.target.innerText);
      if (event.target.innerText !== '+' && event.target.innerText !== '-' && event.target.innerText !== '*' && event.target.innerText !== '/')
        currentResult.push(+event.target.innerText);
      else {
        currentResult.push(event.target.innerText);
      }
    }
    else if (event.target.innerText === '=') {
      for (i = 0; i < currentResult.length; i++)
        if (currentResult[i] === '+') {
          currentResult.splice(i, 1)
          add();
        }
        else if (currentResult[i] === '-') {
          currentResult.splice(i, 1)
          subtract();
        }
        else if (currentResult[i] === '*') {
          currentResult.splice(i, 1)
          multiply();
        }
        else if (currentResult[i] === '/') {
          currentResult.splice(i, 1)
          divide();
        }
      currentCalculationOutput.value = result
    }
  });
});

const add = () => {
  result = currentResult.reduce((p, c) => p + c)
  return result;
};

const subtract = () => {
  result = currentResult.reduce((p, c) => p - c)
  return result;
}

const multiply = () => {
  result = currentResult.reduce((p, c) => p * c)
  return result;
}

const divide = () => {
  result = currentResult.reduce((p, c) => p / c)
  return result;
}