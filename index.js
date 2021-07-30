window.onload = function() {
    this.alert("Страница загружена");
}


function searceMessage () {

let inputMessage = document.querySelector(".newMesssage").value;

    if(inputMessage != 0) {
            let blockMessage = document.querySelector(".blockMessage");
            let listMessage = document.createElement("li");
            listMessage.className = "userMessage";
            blockMessage.appendChild(listMessage);


            let message = document.createElement("div");
            message.className = "message";
            message.innerHTML = inputMessage;
            listMessage.appendChild(message);
    }
}