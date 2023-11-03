const grid = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderDiv = document.getElementById("sliderDiv");
const p = document.querySelector("p")

// fix slider

slider.addEventListener("change", () => {
  size = slider.value;
  createGrid(size);
})

slider.addEventListener("input", () => {
  size = slider.value;
  p.textContent = `${size} x ${size}`;
})

function createGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size; i++) {
    if (size > 100) {
      size = 16;
      alert("The size cannot be higher than 100! \n16 set by default.")
    }

    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    row.style.height = 100 + "%";

    for (j = 0; j < size; j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell");
      row.appendChild(cell);
      cell.style.height = ((500 / size) - 2) + "px";
    }
  }
}

let test = "blue";

function paint(event) {
  let paintCell = event.target.closest(".cell")
  paintCell.style.backgroundColor = test;
}

grid.addEventListener("mousedown", (event) => {
  paint(event);
  grid.addEventListener("mouseover", paint);
})

document.addEventListener("mouseup", (event) => {
  grid.removeEventListener("mouseover", paint);
})

const button = document.querySelector("#changeColor")

button.addEventListener("click", () => {
  test = "green";
})

const erase = document.querySelector("#erase");

erase.addEventListener("click", (event) => {
  createGrid(size);
})


