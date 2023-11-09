let colourChange = 1;
const colors = ['green', 'red', 'yellow'];

function changeColour() {
    document.getElementById(colors[colourChange]).style.backgroundColor = 'white';
    colourChange = (colourChange + 1) % colors.length;
    document.getElementById(colors[colourChange]).style.backgroundColor = colors[colourChange];
}

function automaticalColor() {
    setInterval(changeColour, 10000);
}

automaticalColor();
