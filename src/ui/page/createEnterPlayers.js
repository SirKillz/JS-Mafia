import "../.././css/createPlayers.css";

function createEnterPlayersPage() {
    const enterPlayersPage = document.createElement("div");
    enterPlayersPage.classList.add("enterPlayersPage");
    enterPlayersPage.classList.add("enterPlayersPage");
    
    const header = document.createElement("h1");
    header.textContent = "Welcome to Magnificent Mafia!";
    enterPlayersPage.appendChild(header);

    const playerNumberLabel = document.createElement("label");
    playerNumberLabel.textContent = "Enter the number of players:";
    enterPlayersPage.appendChild(playerNumberLabel);
    const enterPlayerNumber = document.createElement("input");
    enterPlayerNumber.type = "number";
    enterPlayerNumber.addEventListener("input", () => {
        const playerCount = parseInt(enterPlayerNumber.value);
        playerInputDiv.innerHTML = '';
        if (playerCount > 0) {
            for (let i = 0; i < playerCount; i++) {
                const playerInput = document.createElement("input");
                playerInput.type = "text";
                playerInput.placeholder = `Player Name`;
                playerInputDiv.appendChild(playerInput);
            }
        }
    })
    enterPlayersPage.appendChild(enterPlayerNumber);
    
    const playerInputDiv = document.createElement("div");
    playerInputDiv.classList.add("playerInputDiv");
    enterPlayersPage.appendChild(playerInputDiv);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    enterPlayersPage.appendChild(submitButton);

    return enterPlayersPage;
}

export {createEnterPlayersPage};