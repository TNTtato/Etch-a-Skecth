const gridCont = document.getElementById('grid-container');

let cont = 0;
for (let row = 1; row <= 16; row++) {
  for (let column = 1; column <= 16; column++) {
    const cellElement = document.createElement('div');
    cellElement.setAttribute('class', 'cell');
    gridCont.appendChild(cellElement);
    cont++;
  }
}
console.log(cont);
