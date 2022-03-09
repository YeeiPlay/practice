const element = document.querySelector(".images"); //dot for class... #for id
const btn = document.querySelector("#btn");  

const url = [
    "https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/02/14/09/50/sea-4847987_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/02/14/09/50/sea-4847987_960_720.jpg"
]

function changeMe(){
    for (let i = 0; i < url.length; i++) {
        let imgElement = document.createElement("img");
        imgElement.src = url[i];
        element.appendChild(imgElement)
    }
}

btn.addEventListener("click", changeMe)

const BTN = {
    tag: "Hugais",
    id: undefined,
    class: undefined,
    "my-name": "Yusuf"
}

console.log(BTN.tag)
console.log(BTN["my-name"])

