const container = document.getElementById("container");
let currentSize = 16;

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.addEventListener("mouseover", () => {
      let r, g, b;
      do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
      } while (r + g + b > 600);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
    container.appendChild(square);
  }
}

createGrid(16);

document.getElementById("btn_size").addEventListener("click", () => {
  let size = parseInt(prompt("Combien de cases par côté ? (max 100)"));
  if (size > 100) size = 100;
  if (!size || size < 1) return;
  currentSize = size;
  createGrid(size);
});

document.getElementById("btn_reset").addEventListener("click", () => {
  createGrid(currentSize);
});
