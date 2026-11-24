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
    }, 2000);
}

function setBulb(isOn) {
    let bulb = document.getElementById("lightbulb");
    bulb.src = isOn ? "assets/images/on.png" : "assets/images/off.png";
    bulb.alt = isOn ? "Lightbulb on" : "Lightbulb off";
}

function greetUser() {
    let name = prompt("What is your name?");
    let day = prompt("Please enter if it is morning, afternoon or evening");

    if(day==="morning") {
        document.getElementById("gu").innerHTML = "Good morning, " + name + "!";
    } else if(day==="afternoon") {
        document.getElementById("gu").innerHTML = "Good afternoon, " + name + "!";
    } else if(day==="evening") {
        document.getElementById("gu").innerHTML = "Good evening, " + name + "!";
    } else {
        document.getElementById("gu").innerHTML = "Hello, " + name + "!";
    }
    document.getElementById("gu").innerHTML += "<br></br>" + " Today is " + new Date();
}

// COUNTER FUNCTIONS
let counter = 0;
function increase() {
    counter++;
    document.getElementById("count").innerHTML = counter;
}

function decrease() {
    counter--;
    document.getElementById("count").innerHTML = counter;
}