const btnDelete = document.querySelector("#btnDel");
const btnExecute = document.querySelector("#btnExe");
const btn = document.querySelector("#btn");
const humanList = document.querySelector("#humanList");
const myResult = document.getElementById("my-Result");
const humanArray = [{
    firstName: "John",
    lastName: "Martinez",
  },
  {
    firstName: "Russel",
    lastName: "Smith",
  },
  {
    firstName: "Luis",
    lastName: "Lopez",
  },
  {
    firstName: "David",
    lastName: "Letsu",
  },
  {
    firstName: "Suzan",
    lastName: "Smith",
  },
]

const updateDom = ()=> {
  const store = localStorage.getItem("user-input");

  if (store) {
    myResult.textContent = store;
  } else {
    myResult.innerHTML = "";
  }
}

updateDom()

const myFunc = () => {
  const state = humanList.style.visibility;
  if (state === "hidden") {
    humanList.style.visibility = "visible";
  } else {
    humanList.style.visibility = "hidden";
  }
}

for (let i = 0; i < humanArray.length; i++) {
  let firstName = humanArray[i].firstName;
  let lastName = humanArray[i].lastName;
  let liElm = document.createElement("li");
  liElm.textContent = `Hello ${firstName} ${lastName}`;
  humanList.appendChild(liElm);
};

const myFuncTwo = () => {
  const userInput = prompt("save to local storage");
  if (userInput) {
    localStorage.setItem("user-input", userInput);
    updateDom()
  } 
};

btnExecute.addEventListener("click", myFuncTwo);

const myFuncDel = ()=> {
  localStorage.removeItem("user-input");
  updateDom()
};


btnDelete.addEventListener("click", myFuncDel);
btn.addEventListener("click", myFunc);