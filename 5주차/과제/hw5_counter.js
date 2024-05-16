function increment() {
    let numberElement = document.getElementById('number');
    let currentNumber = parseInt(numberElement.textContent, 10);
    numberElement.textContent = currentNumber + 1;
}

function decrement() {
    let numberElement = document.getElementById('number');
    let currentNumber = parseInt(numberElement.textContent, 10);
    if (currentNumber > 0) {
        numberElement.textContent = currentNumber - 1;
    }
}
