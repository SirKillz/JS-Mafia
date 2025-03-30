import {UI} from "./ui/ui.js";
import { Game } from "./game/game.js";

console.log("Hello, from the webpack-template!");

const game = new Game();
const ui = new UI(game);

document.addEventListener("DOMContentLoaded", () => {
    ui.displayStartPage();
});