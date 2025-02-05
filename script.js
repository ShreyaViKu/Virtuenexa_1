function calculateFactorial(method) {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultDiv.className = 'alert alert-danger mt-3';
        resultDiv.textContent = 'Please enter a valid positive integer!';
        resultDiv.classList.remove('d-none');
        return;
    }

    let factorialValue;
    if (method === 'iterative') {
        factorialValue = factorialIterative(number);
        resultDiv.textContent = `Iterative Method: ${number}! = ${factorialValue}`;
        resultDiv.className = 'alert alert-primary mt-3';
    } else if (method === 'recursive') {
        factorialValue = factorialRecursive(number);
        resultDiv.textContent = `Recursive Method: ${number}! = ${factorialValue}`;
        resultDiv.className = 'alert alert-success mt-3';
    }
    resultDiv.classList.remove('d-none');
}

function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}


