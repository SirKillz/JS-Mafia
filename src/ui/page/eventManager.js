import { Player } from "../../game/player.js";

class EventManager {
    constructor() {

    }

    registerStartPageEvents(domRefs, nextPage) {
        const startButton = domRefs.startButton;
        startButton.addEventListener("click", () => {
            nextPage();
        });
    }

    registerEnterPlayersPageEvents(domRefs, game, nextPage) {
        const enterPlayerNumber = domRefs.enterPlayerNumber;
        const playerInputDiv = domRefs.playerInputDiv;

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
        });


        const submitButton = domRefs.submitButton;
        submitButton.addEventListener("click", () => {
            const playerInputs = document.querySelectorAll('input[type="text"]');
            
            // check to ensure each name has an input
            let validInputs = true;
            playerInputs.forEach((input) => {
                if (input.value === "") {
                    validInputs = false;
                }
            })
            if (!validInputs) {
                alert("You must provide a valid input for each player input!");
            }
            else {
                playerInputs.forEach((input) => {
                    const player = new Player(input.value);
                    game.players.push(player);
                })
            }
        });
    }
}

export {EventManager}