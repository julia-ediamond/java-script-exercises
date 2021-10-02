function showMessage() {
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("name").value;
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message + name;
    console.log(message);
}

window.onload = function () {
    console.log("page has loaded");
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);


    //takes all the stuff aboce and moves it to the div with id output
    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};





