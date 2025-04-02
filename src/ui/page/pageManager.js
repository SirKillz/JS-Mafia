import { createStartPage } from "./start";
import { createEnterPlayersPage } from "./enterPlayers";

class PageManager {
    constructor() {
        this.currentPage = null;
    }

    getStartPageDOM() {
        const startPageRefs = createStartPage();
        return startPageRefs;
    }

    getEnterPlayersDOM() {
        const enterPlayersDOM = createEnterPlayersPage();
        return enterPlayersDOM;
    }


}

export {PageManager}