document.getElementById("uselessForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Display the "found" information with some humor
    document.getElementById("result").innerHTML = `
        <div class="alert alert-success mt-4">
            <h4>🔥 BOOM! We found your details! 🔥</h4>
            <ul class="list-group">
                <li class="list-group-item bg-dark text-success"><strong>Name:</strong> ${name}</li>
                <li class="list-group-item bg-dark text-success"><strong>Address:</strong> ${address}</li>
                <li class="list-group-item bg-dark text-success"><strong>Phone:</strong> ${phone}</li>
                <li class="list-group-item bg-dark text-success"><strong>Email:</strong> ${email}</li>
            </ul>
            <p class="mt-3">Wow! Our system is truly amazing! 🤡</p>
        </div>
    `;

    // Add a little useless animation
    const button = document.querySelector(".btn-danger");
    button.innerText = "🚀 HACKING INTO THE MAINFRAME...";
    setTimeout(() => {
        button.innerText = "🔍 Reveal My Info";
    }, 2000);
});
