const display = document.getElementById("result");
const seconDisplay = document.getElementById("operation");
let startX = 0;
let mouseUp = false;

function updateDisplay(tile) {
    if (tile.dataset.value === "backspace")
        return (display.textContent = display.textContent.slice(0, -1) || "0");
    if (tile.dataset.value === "plus-minus") {
        if (containsMoreThanOneNumber()) {
                let numbers = display.textContent.split(/[-+*\/%]/);
                let lastNumber = numbers.pop();
                let newNumber = lastNumber * -1;
                if (newNumber === -0) return display.textContent = "Error";
                numbers.push(newNumber);
                let newDisplay = numbers.join("");
                display.textContent = newDisplay;
        } else {
            display.textContent = display.textContent * -1;
        }
        return;
    }
    if (tile.dataset.value === "C") {
        display.textContent = "0";
        seconDisplay.textContent = "0";
        return;
    }
    if (tile.dataset.value === "=")
        return calculateOperation(display.textContent);
    if (display.textContent == "0" && tile.dataset.value !== ".")
        return (display.textContent = tile.dataset.value);
    display.textContent += tile.dataset.value;
}

function containsMoreThanOneNumber() {
    if (display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("*") || display.textContent.includes("/") || display.textContent.includes("%")) {
        return true;
    } else {
        return false;
    }
}

function calculateOperation(operation) {
    try {
        display.textContent = eval(operation);
    } catch (e) {
        display.textContent = "Error";
    }
    seconDisplay.textContent = operation;
}

function scrollDisplay(direction) {
    if (direction === "ArrowLeft") {
        display.scrollLeft -= 10;
        seconDisplay.scrollLeft -= 10;
    } else if (direction === "ArrowRight") {
        display.scrollLeft += 10;
        seconDisplay.scrollLeft += 10;
    }
}

window.addEventListener("keydown", (e) => {
    if (e.key.includes("Arrow")) {
        scrollDisplay(e.key);
    }
});

display.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        display.scrollLeft += 10;
        seconDisplay.scrollLeft += 10;
    } else {
        display.scrollLeft -= 10;
        seconDisplay.scrollLeft -= 10;
    }
});

function startScroll(e) {
    mouseUp = false;
    e.preventDefault();
    startX = e.clientX || e.touches[0].clientX;
    display.style.cursor = "grabbing";
}

function scrollMove(e) {
    if (mouseUp) return;
    const currentX = e.clientX || e.touches[0].clientX;
    display.scrollLeft += startX - currentX;
    seconDisplay.scrollLeft += startX - currentX;
    startX = currentX;
}

function stopScroll() {
    mouseUp = true;
    display.style.cursor = "grab";
}

display.addEventListener("mousedown", startScroll);
display.addEventListener("touchstart", startScroll);

display.addEventListener("mousemove", scrollMove);
display.addEventListener("touchmove", scrollMove);

window.addEventListener("mouseup", stopScroll);
window.addEventListener("touchend", stopScroll);
window.addEventListener("touchcancel", stopScroll);

export { updateDisplay };
