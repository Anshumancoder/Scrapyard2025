document.getElementById("deathForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const healthTipsDiv = document.getElementById("healthTips")
    const message = document.getElementById("message")
    
    const messages = [
        "Avoid stress... oh wait, too late."
    ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    

    healthTipsDiv.classList.add("show")


    message.innerHTML = "" 
    let i = 0
    function type() {
        if (i < randomMessage.length) {
            message.innerHTML += randomMessage.charAt(i)
            i++
            setTimeout(type, 50)
           }
    }
    type()
})