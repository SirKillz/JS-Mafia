import { PageManager } from "./page/pageManager.js";
import { Player } from "../game/player.js";


class UI {
    constructor(game) {
        this.game = game;
        this.pageManager = new PageManager();
    }

    getContentDiv() {
        const contentDiv = document.getElementById("content");
        return contentDiv;
    }

    resetContentDiv() {
        const contentDiv = this.getContentDiv();
        contentDiv.innerHTML = "";
    }

    renderStartPage() {
        this.resetContentDiv();
        const startPageRefs = this.pageManager.getStartPageDOM();
        this.getContentDiv().appendChild(startPageRefs.startPageDiv);

        // attach event listener to the start button
        const startButton = document.getElementById("startButton");
        startButton.addEventListener("click", () => {
            this.renderEnterPlayersPage();
        });
        
    }

    renderEnterPlayersPage() {
        this.resetContentDiv();
        const enterPlayersRefs = this.pageManager.getEnterPlayersDOM();
        this.getContentDiv().appendChild(enterPlayersRefs.enterPlayersPageDiv);
    }

    // renderEnterPlayersPage() {
    //     this.resetContentDiv();
    //     const enterPlayersPage = createEnterPlayersPage();
    //     this.getContentDiv().appendChild(enterPlayersPage);

    //     // attach the event listener to the submit button
    //     const submitButton = document.querySelector("#submit");
    //     submitButton.addEventListener("click", () => {
    //         const playerInputs = document.querySelectorAll('input[type="text"]');
            
    //         // check to ensure each name has an input
    //         let validInputs = true;
    //         playerInputs.forEach((input) => {
    //             if (input.value === "") {
    //                 validInputs = false;
    //             }
    //         })
    //         if (!validInputs) {
    //             alert("You must provide a valid input for each player input!");
    //         }
    //         else {
    //             playerInputs.forEach((input) => {
    //                 console.log("Adding players to players array")
    //                 const player = new Player(input.value);
    //                 this.game.players.push(player);
    //             })
    //         }

            

    //     })
    // }
}

export {UI};