import { setColorScheme } from './applyColorScheme.js';
import { updateDisplay } from './displayNumbers.js';


window.onload = () => {
    setColorScheme();
};

let tiles = document.getElementsByTagName('button');
tiles = Array.from(tiles);

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        updateDisplay(tile);
    });
});
