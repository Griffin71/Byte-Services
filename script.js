// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function() {
    'use strict';

    // Function to add event listeners to buttons
    function addEventListeners() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    }

    // Event handler for button clicks
    function handleButtonClick(event) {
        event.preventDefault();
        alert('Button clicked!');
    }

    // Function to sanitize user input
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(input));
        return div.innerHTML;
    }

    // Example usage of sanitizeInput function
    function handleUserInput() {
        const userInput = document.getElementById('user-input').value;
        const sanitizedInput = sanitizeInput(userInput);
        console.log('Sanitized Input:', sanitizedInput);
    }

    // Add event listeners on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        addEventListeners();
    });

// Function to handle form submission and validate user input
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    const sanitizedMessage = sanitizeInput(message);
    console.log('Sanitized Message:', sanitizedMessage);
    alert('Form submitted successfully!');
}

    // Add event listener for form submission
    document.querySelector('form').addEventListener('submit', handleFormSubmission);

})();
// Add event listener for user input handling
document.getElementById('submit-button').addEventListener('click', handleUserInput);

// Function to dynamically add a new button to the page
function addNewButton() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    document.body.appendChild(newButton);
    newButton.addEventListener('click', handleButtonClick);
}

// Add event listener for adding a new button
document.getElementById('add-button').addEventListener('click', addNewButton);

// Function to remove all buttons from the page
function removeAllButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.remove());
}

// Add event listener for removing all buttons
document.getElementById('remove-button').addEventListener('click', removeAllButtons);

