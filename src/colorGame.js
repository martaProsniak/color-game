const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

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
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again!'
        }
    });
}

function changeAllSquaresColorAfterWin(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}