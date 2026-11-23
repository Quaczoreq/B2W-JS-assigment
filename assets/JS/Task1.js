function Age() {
    let age = prompt("What is your age?");
    if (age>=18) {
        document.getElementById("demo").innerHTML = "You can purchase the tickets to the concert AC/DC.";
    } else {
        document.getElementById("demo").innerHTML = "You are Not an adult: you can not go to the concert";
    }
}
function hide() {
    let button = document.getElementById("hideme");
    if (button.style.display === "none") {
        button.style.display = "inline-block";
    } else {
        button.style.display = "none";
    }
}
