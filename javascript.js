const grid = document.querySelector(".container");

function makeGrid() {
  for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");    
    grid.appendChild(gridDiv);
    gridDiv.classList.add("gridDiv");
  }
 }
 
makeGrid();


