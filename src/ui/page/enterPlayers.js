import "../.././css/enterPlayers.css";

function createEnterPlayersPage() {
    const enterPlayersPageDiv = document.createElement("div");
    enterPlayersPageDiv.classList.add("enterPlayersPageDiv");
    
    const header = document.createElement("h1");
    header.textContent = "Welcome to Magnificent Mafia!";
    enterPlayersPageDiv.appendChild(header);

    const playerNumberLabel = document.createElement("label");
    playerNumberLabel.textContent = "Enter the number of players:";
    enterPlayersPageDiv.appendChild(playerNumberLabel);
    const enterPlayerNumber = document.createElement("input");
    enterPlayerNumber.type = "number";
    enterPlayersPageDiv.appendChild(enterPlayerNumber);
    
    const playerInputDiv = document.createElement("div");
    playerInputDiv.classList.add("playerInputDiv");
    enterPlayersPageDiv.appendChild(playerInputDiv);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.id = "submit";
    enterPlayersPageDiv.appendChild(submitButton);

    return {
        enterPlayersPageDiv,
        header,
        playerNumberLabel,
        enterPlayerNumber,
        playerInputDiv,
        submitButton
    };
}

export {createEnterPlayersPage};