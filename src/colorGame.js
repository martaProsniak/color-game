let numSquares = 6;
let colors = generateRandomColorsArray(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let title = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons= document.querySelectorAll('.mode');

colorDisplay.textContent = pickedColor;

// *** ADDING EVENT LISTENERS ****

for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
        reset();
    });
}

resetButton.addEventListener('click', function () {
    reset();
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

// **** FUNCTIONS ***

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

function reset(){
    // generate new colors array depend on the mode
    colors = generateRandomColorsArray(numSquares);
    // pick new color to guess
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = ''
    title.style.backgroundColor = 'steelblue'

    // change color of all squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = 'block';
            //add initial colors to squares
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}