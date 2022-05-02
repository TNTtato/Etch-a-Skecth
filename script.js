const DEFAULT_SIZE = 64;
const DEFAULT_COLOR = '#000000';

let gridSize = DEFAULT_SIZE;
let cellColor = DEFAULT_COLOR;

const gridCont = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');

function createGrid(gridSize) {
  gridCont.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
  grid-template-rows: repeat(${gridSize}, 1fr);`;
  for (let row = 1; row <= gridSize; row++) {
    for (let column = 1; column <= gridSize; column++) {
      const cellElement = document.createElement('div');
      cellElement.setAttribute('class', 'cell');
      gridCont.appendChild(cellElement);
    }
  }
}

function pickCellColor() {
  colorPicker.addEventListener('change', function(e) {
    cellColor = e.target.value;
    console.log(cellColor);
  }, false);
  console.log(cellColor);
  //return cellColor
}

createGrid(gridSize);
pickCellColor();


function fillCells(){
  fullCells.forEach(cell => {
    cell.addEventListener('mousemove', function() {
      if(gridClicked) {
        cell.style.cssText = `background-color: ${cellColor};`;
      }
    });
    cell.addEventListener('click', function() {
      cell.style.cssText = `background-color: ${cellColor};`;
    });
  });
}


const fullCells = document.querySelectorAll('.cell');
let gridClicked = false;

gridCont.addEventListener('mousedown', function() {
  gridClicked = true;
  fillCells();
});

gridCont.addEventListener('mouseup', function(){
  gridClicked = false;
  fillCells();
});


