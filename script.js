const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_bgCELL_COLOR = '#ffffff';

const gridCont = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const gridSizeSelector = document.getElementById('grid-size-selector');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');

let gridSize = DEFAULT_SIZE;
let cellColor = DEFAULT_COLOR;
let gridClicked = false;
let rainbowActivated = false;

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
  colorPicker.addEventListener('change', (e) => {
    cellColor = e.target.value;
    rainbowActivated = false;
  });
  colorPicker.addEventListener('click', (e) => {
    cellColor = e.target.value;
    rainbowActivated = false;
  });
  eraser.addEventListener('click', () => {
    cellColor = DEFAULT_bgCELL_COLOR;
    rainbowActivated = false;
  });
}

//corrections needed
function fillCells(fullCells){
  fullCells.forEach(cell => {
    cell.addEventListener('mousemove', function() {
      if(gridClicked) {
        if(rainbowActivated) genRainbow();
        cell.style.cssText = `background-color: ${cellColor};`;
      }
    });
    cell.addEventListener('click', function() {
      if(rainbowActivated) genRainbow();
      cell.style.cssText = `background-color: ${cellColor};`;
    });
  });
}

function congfCellBehavior() {
  const fullCells = document.querySelectorAll('.cell');
  fillCells(fullCells);
}

function genRainbow() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  cellColor = `rgb(${R}, ${G}, ${B})`;
  console.log(cellColor)
  }

rainbow.addEventListener('click', () => rainbowActivated = true);

gridSizeSelector.addEventListener('change', function(e) {
  let sizeLabel = document.getElementById('count-size');
  gridSize = e.target.value;
  updateGrid(gridSize);
  sizeLabel.innerText = `${gridSize}`;
}, false);

////changes coming

gridCont.addEventListener('mousedown', function() {
  gridClicked = true;
  pickCellColor();
  //genRainbow();
  congfCellBehavior();
});

gridCont.addEventListener('mouseup', function(){
  gridClicked = false;
  congfCellBehavior();
});
