// Function to calculate BMI
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Weight and height must be positive numbers.";
    }

    const bmi = weight / (height * height);
    return bmi.toFixed(2);
}

// Event listener for form submission
document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = calculateBMI(weight, height);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your BMI is ${bmi}`;
});
