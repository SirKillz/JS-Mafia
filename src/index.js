import {UI} from "./ui/ui.js";
import { Game } from "./game/game.js";

console.log("Hello, from the webpack-template!");

const game = new Game();
const ui = new UI(game);

// Expose to window for debugging
window.game = game;
window.ui = ui;

document.addEventListener("DOMContentLoaded", () => {
    ui.displayStartPage();
});