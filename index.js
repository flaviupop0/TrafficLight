let colorChange = 1;
const colors = ["green", "red", "yellow"];

function changeColor() {
    document.getElementById(colors[colorChange]).style.backgroundColor =
        "white";
    colorChange = (colorChange + 1) % colors.length;
    document.getElementById(colors[colorChange]).style.backgroundColor =
        colors[colorChange];
}

function automaticalColor() {
    setInterval(changeColor, 10000);
}

automaticalColor();
