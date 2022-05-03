const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_bgCELL_COLOR = '#ffffff';

const gridCont = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const gridSizeSelector = document.getElementById('grid-size-selector');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const mode = document.getElementById('mode');
const defaultBtn = document.getElementById('default-btn');
const sizeLabel = document.getElementById('count-size');

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
  }

rainbow.addEventListener('click', () => {
  rainbowActivated = true;
  mode.innerText = 'RAINBOW';
});

eraser.addEventListener('click', () => {
  cellColor = DEFAULT_bgCELL_COLOR;
  rainbowActivated = false;
  mode.innerText = 'ERASER';
});

colorPicker.addEventListener('change', (e) => {
  cellColor = e.target.value;
  rainbowActivated = false;
  mode.innerText = 'COLOR';
});
colorPicker.addEventListener('click', (e) => {
  cellColor = e.target.value;
  rainbowActivated = false;
  mode.innerText = 'COLOR';
});

gridSizeSelector.addEventListener('change', function(e) {
  gridSize = e.target.value;
  updateGrid(gridSize);
  sizeLabel.innerText = `${gridSize}`;
}, false);

gridCont.addEventListener('mousedown', function() {
  gridClicked = true;
  congfCellBehavior();
});

gridCont.addEventListener('mouseup', function(){
  gridClicked = false;
  congfCellBehavior();
});

defaultBtn.addEventListener('click', function () {
  rainbowActivated = false;
  cellColor = DEFAULT_COLOR;
  colorPicker.value = DEFAULT_COLOR;
  gridSizeSelector.value = DEFAULT_SIZE;
  gridSize = DEFAULT_SIZE;
  updateGrid(gridSize);
  mode.innerText = 'COLOR';
  sizeLabel.innerText = '16';
});
