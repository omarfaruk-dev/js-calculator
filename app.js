let display = document.getElementById('display');
        let currentInput = '';
        let operator = null;
        let previousInput = '';

        function appendNumber(number) {
            if (currentInput.includes('.') && number === '.') return;
            currentInput += number;
            updateDisplay();
        }

        function appendOperator(op) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function calculate() {
            if (operator === null || currentInput === '') return;
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            operator = null;
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            operator = null;
            previousInput = '';
            updateDisplay();
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentInput || '0';
        }