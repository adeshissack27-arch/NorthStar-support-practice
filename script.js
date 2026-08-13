function classifyIntent(message) {
    const text = message.toLowerCase();

    // Order Status
    if (
        text.includes("where is my order") ||
        text.includes("track my order") ||
        text.includes("order status") ||
        text.includes("what is the status") ||
        text.includes("delivery") ||
        text.includes("tracking") ||
        text.includes("where is my package") ||
        text.includes("track")
    ) {
        return "ORDER_STATUS";
    }

    // Returns and Refunds
    if (
        text.includes("return") ||
        text.includes("refund") ||
        text.includes("exchange") ||
        text.includes("send back") ||
        text.includes("money back")
    ) {
        return "RETURNS_REFUNDS";
    }

    return "UNSUPPORTED";
}


// Find an order ID such as ORD1001
function extractOrderId(message) {
    const match = message.toUpperCase().match(/ORD\d{4}/);

    if (match) {
        return match[0];
    }

    return null;
}


// Look up the order in orders.Json
async function getOrder(orderId) {
    const response = await fetch("data/orders.Json");

    const orders = await response.json();

    const order = orders.find(
        item => item.order_id === orderId
    );

    return order;
}


async function sendMessage() {

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

    // Determine customer intent
    const intent = classifyIntent(message);

    // ORDER STATUS
    if (intent === "ORDER_STATUS") {

        const orderId = extractOrderId(message);

        if (!orderId) {

            chat.innerHTML += `
                <div class="bot-message">
                    Please provide your order ID, for example ORD1001.
                </div>
            `;

            input.value = "";
            return;
        }

        try {

            const order = await getOrder(orderId);

            if (!order) {

                chat.innerHTML += `
                    <div class="bot-message">
                        Sorry, I could not find order ${orderId}.
                    </div>
                `;

            } else {

                chat.innerHTML += `
                    <div class="bot-message">
                        Order ${order.order_id} is currently
                        <strong>${order.status}</strong>.<br>
                        Product: ${order.product}<br>
                        Tracking: ${order.tracking_number}<br>
                        Expected delivery: ${order.expected_delivery}
                    </div>
                `;
            }

        } catch (error) {

            chat.innerHTML += `
                <div class="bot-message">
                    Sorry, I could not access the order information.
                </div>
            `;
        }
    }

    // RETURNS / REFUNDS
    else if (intent === "RETURNS_REFUNDS") {

        chat.innerHTML += `
            <div class="bot-message">
                I can help you with returns and refunds.
            </div>
        `;
    }

    // UNSUPPORTED
    else {

        chat.innerHTML += `
            <div class="bot-message">
                Sorry, I can currently help with order status and returns/refunds.
            </div>
        `;
    }

    input.value = "";
}
