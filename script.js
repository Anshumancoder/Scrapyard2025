//document.getElementById("deathForm").addEventListener("submit", function(event) {
//    event.preventDefault(); 

//    const name = document.getElementById("name").value;

//    document.getElementById("message").innerHTML = `Dear ${name}, our best health advice for you is:<br><br><strong>  JUST STAY ALIVE 🫡</strong>`;
//    document.getElementById("healthTips").classList.remove("hidden");
//});


document.getElementById("deathForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const healthTipsDiv = document.getElementById("healthTips");
    const message = document.getElementById("message");
    
    // Example spooky message
    const messages = [
        "Avoid stress... oh wait, too late.",
        "Just try to stay alive..."
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    

    healthTipsDiv.classList.add("show");


    message.innerHTML = ""; 
    let i = 0;
    function type() {
        if (i < randomMessage.length) {
            message.innerHTML += randomMessage.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
});
