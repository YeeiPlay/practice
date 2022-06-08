const output = document.getElementById("output");
const nav = document.querySelector("nav");
const btn = document.querySelector("button");
const offset = 400;
const smallsScreen = 800;

function showHide (e)
{
  if(e.currentTarget.scrollY >= offset){
    nav.classList.add("new-bg");
    }
     else {
        nav.classList.remove("new-bg");
      }
}

window.addEventListener("scroll", showHide)

document.addEventListener("keyup", (e)=> {
output.textContent = e.key;
})

window.addEventListener('resize', (e)=> {
  if(e.currentTarget.outerWidth <= smallsScreen){
    nav.style.display = "none"
  } else {
    nav.style.display = "block"
  }
})

window.addEventListener("contextmenu", (e)=> {
  e.preventDefault();
})

btn.addEventListener("click", ()=>{
  window.removeEventListener("scroll", showHide);
})

// const output = document.getElementById("output");

// window.navigator.onLine ? output.textContent = "Your offline"

// window.addEventListener("online", ()=> {
//   output.textContent = "Your offline"
// });

