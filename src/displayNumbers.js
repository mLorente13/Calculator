const display = document.getElementById('result');
const seconDisplay = document.getElementById('operation');

function updateDisplay(tile) {
    if (tile.dataset.value === 'backspace') return display.textContent = display.textContent.slice(0, -1) || '0';
    if (tile.dataset.value === 'C') {
        display.textContent = '0';
        seconDisplay.textContent = '0';
        return;
    }
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

function scrollDisplay(direction) {
    if (direction === 'ArrowLeft') {
        display.scrollLeft -= 10;
        seconDisplay.scrollLeft -= 10;
    } else if (direction === 'ArrowRight') {
        display.scrollLeft += 10;
        seconDisplay.scrollLeft += 10;
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key.includes('Arrow')) {
        scrollDisplay(e.key);
    }
});

display.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        display.scrollLeft += 10;
        seconDisplay.scrollLeft += 10;
    } else {
        display.scrollLeft -= 10;
        seconDisplay.scrollLeft -= 10;
    }
});

export { updateDisplay };