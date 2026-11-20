const output = document.getElementById('output');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (button.classList.contains('clear')) {
      output.value = '0';
      history.textContent = '';
    } else if (button.classList.contains('delete')) {
      output.value = output.value.slice(0, -1);
      if (output.value === '') {
        output.value = '0';
      }
    } else if (button.classList.contains('equals')) {
      const formula = output.value;
      const calcFormula = formula.replace(/×/g, '*').replace(/÷/g, '/');
      history.textContent = formula + ' =';
      output.value = eval(calcFormula);
    } else {
      if (output.value === '0') {
        output.value = value;
      } else {
        output.value += value;
      }
    }
  });
});