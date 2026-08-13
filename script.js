function sendMessage() {

    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Display customer's message
    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    // Temporary response
    chat.innerHTML += `
        <div class="bot-message">
            I received your question.
        </div>
    `;

    // Clear input
    input.value = "";
}
