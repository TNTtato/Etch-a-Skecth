const gridCont = document.getElementById('grid-container');
//createin 16x16 grid
for (let row = 1; row <= 16; row++) {
  for (let column = 1; column <= 16; column++) {
    const cellElement = document.createElement('div');
    cellElement.setAttribute('class', 'cell');
    gridCont.appendChild(cellElement);
  }
}


function fillCells(){
  fullCells.forEach(cell => {
    cell.addEventListener('mousemove', function() {
      if(gridClicked) {
      cell.classList.add('hovered');
      }
    });
    cell.addEventListener('click', function() {
      cell.classList.add('hovered');
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


