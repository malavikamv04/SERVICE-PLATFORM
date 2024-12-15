// Function to handle user input and generate responses
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        // Add user message
        addMessage(userInput, 'user');

        // Generate bot response (simple example)
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000);

        // Clear input field
        document.getElementById('user-input').value = '';
    }
});

// Function to add messages to the chat
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.textContent = message;

    document.querySelector('.chatbox-body').appendChild(messageDiv);

    // Scroll to the bottom of the chatbox
    document.querySelector('.chatbox-body').scrollTop = document.querySelector('.chatbox-body').scrollHeight;
}

// Simple function to generate bot responses
function getBotResponse(userInput) {
    // Example responses based on user input
    if (userInput.toLowerCase().includes('hello')) {
        return 'Hi there! How can I help you?';
    } else if (userInput.toLowerCase().includes('how are you')) {
        return 'I am just a bot, but I am doing great! Thanks for asking.';
    } else {
        return 'I didn\'t quite understand that. Could you please clarify?';
    }
}
