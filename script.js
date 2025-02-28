const gridContainer = document.querySelector('.grid-container');
const buttonContainer = document.querySelector('.button-container');

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

// Create a button, add it to a class and add text
startbtn = document.createElement('button');
startbtn.classList.add('start-button');
startbtn.textContent = 'Make a Grid';
buttonContainer.appendChild(startbtn);

function makeGrid(size) {
    gridContainer.style.width = '740px';
    gridContainer.style.height = '740px';
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

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
    const userInput = prompt('What size grid would you like?');
    makeGrid(userInput);
})