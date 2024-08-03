let display = document.querySelector('.display');
        let currentInput = '';

        function appendNumber(num) {
            currentInput += num;
            display.textContent = currentInput;
        }

        function appendOperator(operator) {
            currentInput += operator;
            display.textContent = currentInput;
        }

        function calculate() {
            try {
                currentInput = eval(currentInput);
                display.textContent = currentInput;
            } catch (error) {
                display.textContent = 'Error';
            }
        }

        function clearDisplay() {
            currentInput = '';
            display.textContent = '0';
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        }