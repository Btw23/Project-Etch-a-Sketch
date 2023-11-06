const grid = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderDiv = document.getElementById("sliderDiv");
const p = document.querySelector("p")

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

let chooseColor = "#c2c3cf";

function paint(event) {
  let paintCell = event.target.closest(".cell")
  paintCell.style.backgroundColor = chooseColor;
}

grid.addEventListener("mousedown", (event) => {
  paint(event);
  grid.addEventListener("mouseover", paint);
})

document.addEventListener("mouseup", (event) => {
  grid.removeEventListener("mouseover", paint);
})

const erase = document.querySelector("#erase");

erase.addEventListener("click", (event) => {
  createGrid(size);
})

const selectColor = document.querySelector("#selectColor");

selectColor.addEventListener("input", () => {
  chooseColor = selectColor.value;
})

const characters = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function randomColor() {
  chooseColor = "#";
  for (let i = 0; i < 6; i++) {
    chooseColor += characters[Math.floor(Math.random() * 16)];
  }
}

const randomCheckbox = document.querySelector("#randomCheckbox");

randomCheckbox.addEventListener("change", () => {
  if (randomCheckbox.checked) {
    grid.addEventListener("mouseover", randomColor);

  } else {
    grid.removeEventListener("mouseover", randomColor)
    chooseColor = selectColor.value;
  }
})
