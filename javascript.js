const grid = document.querySelector(".container");

function createGrid(size) {
  size = prompt("Choose a size");
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

createGrid()


function paint(event) {
  event.target.closest(".cell")?.classList.add("blue")
}

grid.addEventListener("mousedown", (event) => {
  paint(event);
  grid.addEventListener("mouseover", paint);
})

grid.addEventListener("mouseup", (event) => {
  grid.removeEventListener("mouseover", paint);
})


