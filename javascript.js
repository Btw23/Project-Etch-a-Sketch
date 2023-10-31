const grid = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement("div");    
  grid.appendChild(gridDiv);
  gridDiv.classList.add("gridDiv");
 }

function paint(event) {
  event.target.closest(".gridDiv")?.setAttribute("style", "background: blue;");
}

grid.addEventListener("mousedown", (event) => {
  paint(event);
  grid.addEventListener("mouseover", paint);
})

grid.addEventListener("mouseup", (event) => {
  grid.removeEventListener("mouseover", paint);
})


