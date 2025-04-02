import { PageManager } from "./page/pageManager.js";
import { EventManager } from "./page/eventManager.js";


class UI {
    constructor(game) {
        this.game = game;
        this.pageManager = new PageManager();
        this.eventManager = new EventManager();
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

        // register the event listeners
        this.eventManager.registerStartPageEvents(startPageRefs, () => {
            this.renderEnterPlayersPage();
        });
        
    }

    renderEnterPlayersPage() {
        this.resetContentDiv();
        const enterPlayersRefs = this.pageManager.getEnterPlayersDOM();
        this.getContentDiv().appendChild(enterPlayersRefs.enterPlayersPageDiv);

        // register the event listeners
        this.eventManager.registerEnterPlayersPageEvents(enterPlayersRefs, this.game, () => {
            console.log("test");
        });
    }
}

export {UI};