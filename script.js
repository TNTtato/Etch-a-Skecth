const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_bgCELL_COLOR = '#ffffff';

const gridCont = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const gridSizeSelector = document.getElementById('grid-size-selector');
const eraser = document.getElementById('eraser');

let gridSize = DEFAULT_SIZE;
let cellColor = DEFAULT_COLOR;

createGrid(gridSize);

function createGrid(gridSize) {
  setGridSize(gridSize);
  for (let row = 1; row <= gridSize; row++){
    for (let column = 1; column <= gridSize; column++) {
      const cell = document.createElement('div');
      cell.style.cssText = `box-sizing: border-box;
      background-color: ${DEFAULT_bgCELL_COLOR};`;
      cell.setAttribute('class', 'cell');
      gridCont.appendChild(cell);
    }   
  }
}
function setGridSize(gridSize) {
  gridCont.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
  grid-template-rows: repeat(${gridSize}, 1fr);`;
}

function updateGrid(gridSize) {
  gridCont.innerHTML = "";
  createGrid(gridSize);
}

function pickCellColor() {
  colorPicker.addEventListener('change', (e) => cellColor = e.target.value);
}

//corrections needed
function fillCells(fullCells){
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

let gridClicked = false;

gridSizeSelector.addEventListener('change', function(e) {
  let sizeLabel = document.getElementById('count-size');
  gridSize = e.target.value;
  updateGrid(gridSize);
  sizeLabel.innerText = `${gridSize}`;
}, false);

////changes coming

function congfCellBehavior() {
const fullCells = document.querySelectorAll('.cell');
fillCells(fullCells);
}

gridCont.addEventListener('mousedown', function() {
  gridClicked = true;
  pickCellColor();
  congfCellBehavior();
});

gridCont.addEventListener('mouseup', function(){
  gridClicked = false;
  congfCellBehavior();
});

eraser.addEventListener('click', () => cellColor = DEFAULT_bgCELL_COLOR);