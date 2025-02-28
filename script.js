// Select the html containers
const gridContainer = document.querySelector('.grid-container');
const buttonContainer = document.querySelector('.button-container');
const colorButtonsContainer = document.querySelector('.color-buttons-container');

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

// Make a grid of size by size numbers of squares with a fixed grid container size.
function makeGrid(size) {
    gridContainer.style.width = '400px';
    gridContainer.style.height = '400px';
    const numOfSquares = size * size;
    const adjustedSize = (gridContainer.getBoundingClientRect().height) / size;
    for (let i = 0; (i < numOfSquares); i++) {
        const square = document.createElement('div');
        square.style.height = adjustedSize + 'px';
        square.style.width = adjustedSize + 'px';
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
    addEventListenersToSquares();
}

// Empty the current grid
function restartGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Ask user for size of grid, delete the current grid and replace with new size
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
    let userInput = prompt('What size grid would you like?');
    Number(userInput);
    // const errorMessage = document.createElement('div');
    if (userInput > 0) {
        gridContainer.style.display = 'flex';
        restartGrid();
        makeGrid(userInput);
    } else {
        alert('Please enter a valid number')
    }
})

// Select all buttons that change color of sketch 
blackButton = document.querySelector('#black-button');
redButton = document.querySelector('#red-button');
blueButton = document.querySelector('#blue-button');
yellowButton = document.querySelector('#yellow-button');
greenButton = document.querySelector('#green-button');
let chosenColor = 'black';

blackButton.addEventListener('click', () => {
    chosenColor = 'black';
    opacity = 5;
})
redButton.addEventListener('click', () => {
    chosenColor = 'red';
    opacity = 5;
})
blueButton.addEventListener('click', () => {
    chosenColor = 'blue';
    opacity = 5;
})
yellowButton.addEventListener('click', () => {
    chosenColor = 'yellow';
    opacity = 5;
})
greenButton.addEventListener('click', () => {
    chosenColor = 'green';
    opacity = 5;
})

// Adds a hover event to add a color and increasing opacity
function addEventListenersToSquares() {
    let gridBoxes = document.querySelectorAll('.grid-square');
    gridBoxes.forEach(box => {
        let opacity = 5;
        box.addEventListener('mouseover', () => {
            const colorButtons = document.querySelectorAll('.color-buttons');
            colorButtons.forEach(button => {
                button.addEventListener('click', () => {
                    opacity = 5;
                })
            })
            box.style.backgroundColor = chosenColor;
            opacity += 15;
            box.style.opacity = `${opacity}%`;
        })
    });
}

// Make a starting grid of 10 x 10 size
makeGrid(10);
