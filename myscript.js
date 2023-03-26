const container = document.querySelector('#container');
const r = document.querySelector(':root');
let grid = "";
let rangeNum = document.getElementById("range");
let showRangeNum = document.getElementById("gridSize");
showRangeNum.innerHTML = rangeNum.value;
let rows = 480 / rangeNum.value + 'px';

buildGrid(rangeNum.value);

// Range slider onchange event
rangeNum.oninput = function() {
  showRangeNum.innerHTML = this.value;
  rows = 480 / rangeNum.value + 'px';
  buildGrid(rangeNum.value);
}


// reset button set
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',  () => {
    showRangeNum.innerHTML = 16;
    rangeNum.value = 16;
    rows = 480 / 16 + 'px';
    buildGrid(16);
});


function buildGrid(size) {
    r.style.setProperty('--grid-size', rows);
    document.querySelectorAll('.grid').forEach(el => el.remove());
    for (let i = 0; i < (size * size); i++) {
        grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}