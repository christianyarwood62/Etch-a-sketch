// Select the html containers
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

makeGrid(10);

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
        console.log(typeof(userInput))
        gridContainer.style.display = 'flex';
        restartGrid();
        makeGrid(userInput);
    } else {
        alert('Please enter a valid number')
    }
})

function addEventListenersToSquares() {
    let gridBoxes = document.querySelectorAll('.grid-square');
    gridBoxes.forEach(box => {
        let opacity = 0;
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'red';
            opacity += 15;
            box.style.opacity = `${opacity}%`;
        })
    });
}

    // sqr.addEventListener('mouseover', (e) => {
    //     const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     e.target.style.backgroundColor = '#' + randomColor;
    // })