const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const viewDiv = document.getElementById("view");
const restartBtn = document.getElementById("restart");
const exitApp = document.getElementById("goodBye")
let counter = 0;

let titleHeader = () => {
   viewDiv.textContent = "Welcome to Endless Game, a game where you never win or lose. 👾";
}

const userResponse = "You have reached the max amount of points, would you like to restart? 🤨";

const updateView = () => {
    viewDiv.textContent = counter;    
};
const resetCounter = () => {
    counter = 0;
    viewDiv.innerHTML = "Welcome to Endless Game, a game where you never win or lose. 👾";  
    if (counter === 0) {
        restartBtn.style.visibility= "hidden";
        exitApp.style.visibility= "hidden";
        incBtn.style.visibility="visible";
        return;
    }
}

const increment = () => {
    if (counter < 0) {
        decBtn.style.visibility="hidden";
    }
    else {
        decBtn.style.visibility="visible";
    }
    
    if (counter === 10) {
        viewDiv.textContent = userResponse;
        exitApp.style.visibility= "visible";
        restartBtn.style.visibility= "visible";
        incBtn.style.visibility="hidden";
        decBtn.style.visibility="hidden";        
        return;
    }
    
    counter++;
    updateView();
};

const decrement = () => {
    if (counter === 1) {
        decBtn.style.visibility="hidden"; 
    }
    
    else {
            decBtn.style.visibility="visible";
    }

    counter--;
    updateView();
};

const exitNow = () => {
    counter = 0;
    viewDiv.textContent = "Thank you for Playing 🤠";  
    if (counter === 0) {
        restartBtn.style.visibility= "hidden";
        exitApp.style.visibility= "hidden";
        incBtn.style.visibility="hidden";
        return;
    }
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
restartBtn.addEventListener("click", resetCounter);
exitApp.addEventListener("click", exitNow);

titleHeader()