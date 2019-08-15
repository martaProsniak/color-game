const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorDisplay = document.getElementById('color-display');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener('click', function() {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor
        //compare color to the picked color
        if (clickedColor === pickedColor){
            alert('Correct!');
        } else {
            alert('Wrong!')
        }
        console.log(clickedColor, pickedColor)
    });
}