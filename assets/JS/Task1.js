// TASK 1 AGE CONFIRM FUNCTION
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

// TASK 3 MOVING BUTTON FUNCTION
function move() {
    let button = document.getElementById("moveme");
        button.style.position = "relative";
        button.style.left = button.style.left === "100px" ? "0px" : "100px";
}

// TASK 4 CHANGE BACKGROUND COLOR FUNCTION
function changeBG(color) {
    setTimeout(function() {
        document.body.style.backgroundColor = color;
    }, 2000);

}
// TASK 5 GREET USER FUNCTION
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

// TASK 6 COUNTER FUNCTIONS
let counter = 0;
function increase() {
    counter++;
    document.getElementById("count").innerHTML = counter;
}

function decrease() {
    counter--;
    document.getElementById("count").innerHTML = counter;
}

// TASK 7 LIGHTBULB FUNCTION 
function welcome() {
    alert("welcome");
}

function Bulbon() {
    let on = document.getElementById("lightbulb");
    on.src = "assets/images/onn.png";
}
function Bulboff() {
    let off = document.getElementById("lightbulb");
    off.src = "assets/images/off.png";
}
function Big() {
    let bulb = document.getElementById("lightbulb");
    bulb.style.width = bulb.offsetWidth + 15 + "px";
    if (bulb.offsetWidth > 300) {
        bulb.style.width = "150px";
    }
}

//Task 6 calculator function

function calculate(operator) {
    let first = document.getElementById("number1").value;
    let second = document.getElementById("number2").value;
    let output = document.getElementById("result");

    if (first === "" || second === "") {
        output.textContent = "Please enter both numbers.";
        return;
    }

    let a = Number(first);
    let b = Number(second);
    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            output.textContent = "Cannot divide by zero.";
            return;
        }
        answer = a / b;
    } else {
        output.textContent = "Unknown operation.";
        return;
    }

    output.textContent = "Result: " + answer;
}

// BLOCK BROWSER Function to prevent right-click, copy, cut, select, and certain key combinations
(function () {
    function blockBrowserAction(event) {
        event.preventDefault();
    }

    document.addEventListener("contextmenu", blockBrowserAction);
    document.addEventListener("copy", blockBrowserAction);
    document.addEventListener("cut", blockBrowserAction);
    document.addEventListener("selectstart", blockBrowserAction);

    document.addEventListener("keydown", function (event) {
        const key = event.key.toLowerCase();
        const modifier = event.ctrlKey || event.metaKey;
        const blockedShortcuts = ["a", "c", "p", "s", "u", "x"];
        const developerToolsShortcuts = ["c", "i", "j"];

        if (
            event.key === "F12" ||
            (modifier && blockedShortcuts.includes(key)) ||
            (modifier && event.shiftKey && developerToolsShortcuts.includes(key))
        ) {
            event.preventDefault();
        }
    });
})();
