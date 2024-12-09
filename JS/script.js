// Select elements
const userInput = document.querySelector('.unit-input');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const output = document.querySelector('.result-display');

// Unit conversion logic
function convert() {
    // Get most recently selected radio button
    const selectedUnits = document.querySelector('input[type="radio"]:checked');

    // Parse user input number
    const inputValue = parseFloat(userInput.value);

    // Validate selection and number
    if (selectedUnits && inputValue) {

        let result;
        let outputUnit;

        switch (selectedUnits.value) {
            case 'meters-to-feet':
                result = inputValue * 3.28084;
                outputUnit = "Feet";
                break;
            case 'feet-to-meters':
                result = inputValue / 3.28084;
                outputUnit = "Meters";
                break;
            case 'km-to-mi':
                result = inputValue * 0.621371;
                outputUnit = "Miles";
                break;
            case 'mi-to-km':
                result = inputValue / 0.621371;
                outputUnit = "Kilometers";
                break;
            case 'C-to-F':
                result = (inputValue * 9 / 5) + 32;
                outputUnit = "degrees Fahrenheit";
                break;
            case 'F-to-C':
                result = (inputValue - 32) * 5 / 9;
                outputUnit = "degrees Celcius";
                break;
            case 'kg-to-lbs':
                result = inputValue * 2.20462;
                outputUnit = "Pounds";
                break;
            case 'lbs-to-kg':
                result = inputValue / 2.20462;
                outputUnit = "Kilograms";
                break;
            case 'grams-to-oz':
                result = inputValue / 28.3495;
                outputUnit = "Ounces";
                break;
            case 'oz-to-grams':
                result = inputValue * 28.3495;
                outputUnit = "Grams";
                break;
            default:
                result = "Select a conversion option.";
                outputUnit = "";
                break;
        }

        // Format resulting number to two decimal places
        result = result.toFixed(2);

        // Update result display text
        output.textContent = `${result} ${outputUnit}`;

    } else {
        // Handle invalid numbers and inputs
        alert("Enter a valid number.");
        clearSelection();
    }
};


// Clear previous radio button selection if one exists. Update output message to prompt user to make new selection.
function clearSelection() {
    const previousSelection = document.querySelector('input[type="radio"]:checked');
    if (previousSelection) {
        previousSelection.checked = false;
        output.textContent = 'Select a conversion option.';
    }
};

// Listen for change on all radio buttons and run conversion
radioButtons.forEach(button => {
    button.addEventListener('change', () => {
        convert();
    });
});

// Clear previous selection input change 
userInput.addEventListener('input', () => {
    clearSelection();
});
