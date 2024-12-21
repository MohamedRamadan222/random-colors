const colors = [
    "red",
    "blue",
    "black",
    "white",
    "green",
    "orange",
    "yellow",
]

const button = document.querySelector("button");
const span = document.querySelector("span");
button.addEventListener("click", (e) => {
    const body = document.body;
    const rValue = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[rValue];
    span.style.color = colors[rValue];
    span.innerHTML = colors[rValue];
})
