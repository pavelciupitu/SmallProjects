let messageFromTheField = document.querySelector('#messageIn');
const button = document.querySelector('#send');
let displayMessage = document.querySelector('#sendHere');

button.addEventListener('click', transferResult);

function transferResult() {
    if (messageFromTheField.value === "") {
        alert('Insert a value in the input field');
    } else {
        displayMessage.innerHTML = messageFromTheField.value;
        messageFromTheField.value = '';
    }

}
