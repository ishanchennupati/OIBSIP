function convertTemperature() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result;

    if (isNaN(degrees)) {
        alert('Please enter a valid number');
        return;
    }

    if (type === 'fahrenheit') {
        result = (degrees - 32) * 5 / 9;
    } else if (type === 'celsius') {
        result = (degrees * 9 / 5) + 32;
    }

    document.getElementById('result').value = result.toFixed(4) + (type === 'fahrenheit' ? ' °C' : ' °F');
}
