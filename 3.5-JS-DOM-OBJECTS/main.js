const element = document.querySelector(".images");
const btnHome = document.querySelector("#btnhome");
const containerOne = document.querySelector(".containerOne");
const sectionHidden = document.querySelector("#sectionHidden");
const url = [
  "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg"
];

function changeMe() {
  for (let i = 0; i < url.length; i++) {
    let imgElement = document.createElement("img")
    imgElement.src = url[i];
    element.appendChild(imgElement);
  }


  sectionHidden.style.visibility= "visible";
  
}

//We call the function above.
btn.addEventListener("click", changeMe);

// this function takes me to a new container style with no background
function removebg() {
    containerOne.style.visibility= "hidden"; 
    containerOne.replaceWith("sectionHidden");
    btnHome.style.visibility= "visible";
}

//calling function above
btn.addEventListener("click", removebg);