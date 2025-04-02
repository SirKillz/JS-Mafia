import "../.././css/startPage.css";

function createStartPage() {
    const startPageDiv = document.createElement("div");
    startPageDiv.classList.add("startPageDiv");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Magnificent Mafia!";
    startPageDiv.appendChild(header);

    const startButton = document.createElement("button");
    startButton.id="startButton";
    startButton.textContent = "Start Game";
    startPageDiv.appendChild(startButton);

    return {
        startPageDiv,
        header,
        startButton
    };
}

export {createStartPage};