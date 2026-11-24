// AGE CONFIRM FUNCTION
function Age() {
    let age = prompt("What is your age?");
    if (age>=18) {
        document.getElementById("demo").innerHTML = "You can purchase the tickets to the concert AC/DC.";
    } else {
        document.getElementById("demo").innerHTML = "You are Not an adult: you can not go to the concert";
    }
}
// HIDE BUTTON FUNCTION
function hide() {
    let button = document.getElementById("hideme");
    if (button.style.display === "none") {
        button.style.display = "inline-block";
    } else {
        button.style.display = "none";
    }
}
// MOVING BUTTON FUNCTION
function move() {
    let button = document.getElementById("moveme");
        button.style.position = "relative";
        button.style.left = button.style.left === "100px" ? "0px" : "100px";
}
// CHANGE BACKGROUND COLOR FUNCTION
function changeBG(color) {
    setTimeout(function() {
        document.body.style.backgroundColor = color;
    }, 3000); 

}