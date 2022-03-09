const heading = document.getElementById("heading");
const btn = document.getElementById("gas");

//I'm Loading some Style
heading.style = "color: blue; padding: 15px;"

//our game counter starts here
let counter = 0;

function change() {
    if (counter === 100) {  //you can hit the gas pedal 100 times.
        btn.disabled=true;
        alert("you win")
        btn.removeEventListener("click", change);
        return console.log("Out of Gas");
    }

    heading.append("⛽")
    counter++;
    console.log(counter);
}

btn.addEventListener("click", change)