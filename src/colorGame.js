let numSquares = 6;
let colors = generateRandomColorsArray(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let title = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyButton = document.querySelector('#easy');
let hardButton = document.querySelector('#hard');


colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function () {
    colors = generateRandomColorsArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    title.style.backgroundColor = '#232323'
    messageDisplay.textContent = ''
})

easyButton.addEventListener('click', function () {
    hardButton.classList.toggle('selected');
    easyButton.classList.toggle('selected');
    numSquares = 3;
    colors = generateRandomColorsArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none'
        }
    }
    title.style.backgroundColor = '#232323'
})

hardButton.addEventListener('click', function () {
    hardButton.classList.toggle('selected');
    easyButton.classList.toggle('selected');
    numSquares = 6;
    colors = generateRandomColorsArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block'
    }
    title.style.backgroundColor = '#232323'
})


for (let i = 0; i < colors.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener('click', function () {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor
        //compare color to the picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            changeAllSquaresColorAfterWin(clickedColor);
            title.style.backgroundColor = clickedColor;
            resetButton.textContent = 'Play Again'
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again'
        }
    });
}

function changeAllSquaresColorAfterWin(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // randomly pick a winning color from colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColorsArray(num) {
    let colorsArray = [];

    for (let i = 0; i < num; i++) {
        // get random color and push into array
        colorsArray.push(generateRandomColor());
    }
    return colorsArray;
}

function generateRandomColor() {
    // pick a 'red' from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // pick a 'green' from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}