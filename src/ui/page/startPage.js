import "../.././css/startPage.css";

function createStartPage() {
    const startPage = document.createElement("div");
    startPage.classList.add("startPage");
    const header = document.createElement("h1");
    header.textContent = "Welcome to Magnificent Mafia!";
    startPage.appendChild(header);

    const startButton = document.createElement("button");
    startButton.id="startButton";
    startButton.textContent = "Start Game";
    startPage.appendChild(startButton);

    return startPage;
}

export {createStartPage};