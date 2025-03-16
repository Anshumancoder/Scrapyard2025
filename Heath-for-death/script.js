document.getElementById("deathForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const healthTipsDiv = document.getElementById("healthTips");
    const message = document.getElementById("message");

    const messages = [
        "Avoid stress... oh wait, too late.",
        "   "
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    message.textContent = randomMessage;

    healthTipsDiv.classList.add("show");
});
