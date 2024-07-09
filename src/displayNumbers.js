const display = document.getElementById('result');
const seconDisplay = document.getElementById('operation');

function updateDisplay(tile) {
    if (tile.dataset.value === 'backspace') return display.textContent = display.textContent.slice(0, -1) || '0';
    if (tile.dataset.value === 'C') return display.textContent = '0';
    if (tile.dataset.value === '=') return calculateOperation(display.textContent);
    if (display.textContent == '0' && tile.dataset.value !== '.') return display.textContent = tile.dataset.value;
    display.textContent += tile.dataset.value;
}

function calculateOperation(operation) {
    try {
        display.textContent = eval(operation);
    } catch (e) {
        display.textContent = 'Error';
    }
    seconDisplay.textContent = operation;
}

export { updateDisplay };