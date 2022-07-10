const defaultResult = 0;
const currentResult = [];
let result;
let first;
const allButtons = document.querySelectorAll('span');
const currentCalculationOutput = document.getElementById('txt');
allButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    if (event.target.innerText == 'C') {
      currentCalculationOutput.value = '';
      currentResult.splice(0);
      result = undefined;
    }
    if (event.target.innerText === '.' && currentResult.includes('.') || event.target.innerText === '0' && currentResult.includes(0) || event.target.innerText === '00' && currentResult.includes(0)) {
      return;
    }
    else if (event.target.innerText !== 'C' && event.target.innerText !== '=') {
      (currentCalculationOutput.value += event.target.innerText);
      if (event.target.innerText !== '+' && event.target.innerText !== '-' && event.target.innerText !== '*' && event.target.innerText !== '/' && event.target.innerText !== '.')
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
          console.log(currentResult)
          subtract();
        }
        else if (currentResult[i] === '*') {
          currentResult.splice(i, 1)
          console.log(currentResult)
          multiply();
        }
        else if (currentResult[i] === '/') {
          if (currentResult.length == 4) {
            first = [currentResult[i - 2], currentResult[i - 1]];
          }
          if (currentResult.length == 3) {
            first = [currentResult[i - 1]];
          }
          let second = [currentResult[i + 1]];
          currentResult.splice(i, 1)
          divide(first, second);
        }
      currentCalculationOutput.value = result;
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

const divide = (first, second) => {
  if (first.length === 2)
    return result = (+(first[0].toString() + first[1].toString()) / second[0]);
  if (first.length === 1) {
    return result = (first[0] / second[0]);
  }
}
