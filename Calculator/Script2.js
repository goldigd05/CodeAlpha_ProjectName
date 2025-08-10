const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC') {
            currentInput = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if ((e.key >= 0 && e.key <= 9) || ['+', '-', '*', '/', '%', '.'].includes(e.key)) {
        currentInput += e.key;
    } else if (e.key === 'Enter') {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
    } else if (e.key === 'Escape') {
        currentInput = '';
    }
    display.value = currentInput;
});
