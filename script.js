document.getElementById("deathForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;

    document.getElementById("message").innerHTML = `Dear ${name}, our best health advice for you is:<br><br><strong>JUST STAY ALIVE🫡</strong>`;
    document.getElementById("healthTips").classList.remove("hidden");
});
