const gridContainer = document.querySelector('.grid-container');

/* I tried writing a dynamic grid that changes with screen size.
I managed to dynamically change the container size, but the gris squares stay the same
size when resizing the screen

function makeGrid(size) {
    const adjustedSize = (gridContainer.getBoundingClientRect().height) / size;
    for (let i = 0; (i < size * size); i++) {
        const square = document.createElement('div');
        square.style.height = adjustedSize + 'px';
        square.style.width = adjustedSize + 'px';
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}
*/

function makeGrid(size) {

    const adjustedSize = (gridContainer.getBoundingClientRect().height) / size;
    for (let i = 0; (i < size * size); i++) {
        const square = document.createElement('div');
        square.style.height = adjustedSize + 'px';
        square.style.width = adjustedSize + 'px';
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}

function restartGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // makeGrid(4);
}