import { Game } from "../game/game.js";
import { createStartPage } from "./page/startPage.js";
import { createEnterPlayersPage } from "./page/createEnterPlayers.js";

class UI {
    constructor(game) {
        this.game = game;
    }

    getContentDiv() {
        const contentDiv = document.getElementById("content");
        return contentDiv;
    }

    resetContentDiv() {
        const contentDiv = this.getContentDiv();
        contentDiv.innerHTML = "";
    }

    displayStartPage() {
        this.resetContentDiv();
        const startPage = createStartPage();
        this.getContentDiv().appendChild(startPage);

        // attach event listener to the start button
        const startButton = document.getElementById("startButton");
        startButton.addEventListener("click", () => {
            this.displayEnterPlayersPage();
        });
        
    }

    displayEnterPlayersPage() {
        this.resetContentDiv();
        const enterPlayersPage = createEnterPlayersPage();
        this.getContentDiv().appendChild(enterPlayersPage);
    }
}

export {UI};