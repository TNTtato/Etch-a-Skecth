const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_bgCELL_COLOR = '#ffffff';

const gridCont = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const gridSizeSelector = document.getElementById('grid-size-selector');

let gridSize = DEFAULT_SIZE;
let cellColor = DEFAULT_COLOR;

function updateGrid(gridSize) {
  createGrid(gridSize);
  fillCells();
}

gridSizeSelector.addEventListener('change', function(e) {
  gridSize = e.target.value;
  console.log(gridSize);
  updateGrid(gridSize);
});

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

const fullCells = document.querySelectorAll('.cell');
let gridClicked = false;

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

gridCont.addEventListener('mousedown', function() {
  gridClicked = true;
  fillCells();
});

gridCont.addEventListener('mouseup', function(){
  gridClicked = false;
  fillCells();
});

/////jfhdhgdshdhsagdsh
