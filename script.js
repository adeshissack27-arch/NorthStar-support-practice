function classifyIntent(message) {
    const text = message.toLowerCase();

    // Order Status keywords
    if (
        text.includes("where is my order") ||
        text.includes("track my order") ||
        text.includes("order status") ||
        text.includes("delivery") ||
        text.includes("tracking") ||
        text.includes("where is my package")
    ) {
        return "ORDER_STATUS";
    }

    // Returns and Refunds keywords
    if (
        text.includes("return") ||
        text.includes("refund") ||
        text.includes("exchange") ||
        text.includes("send back") ||
        text.includes("money back")
    ) {
        return "RETURNS_REFUNDS";
    }

    // Anything else
    return "UNSUPPORTED";
}


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

    // Classify the customer's intent
    const intent = classifyIntent(message);

    // Display the detected intent
    chat.innerHTML += `
        <div class="bot-message">
            Detected intent: ${intent}
        </div>
    `;

    // Clear input
    input.value = "";
}
