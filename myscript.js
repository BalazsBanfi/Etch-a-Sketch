const container = document.querySelector('#container');
const r = document.querySelector(':root');
let color = "green";
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

const blackBtn = document.querySelector('#blackBtn');
blackBtn.addEventListener('click',  () => {
    color = "black";
});

const erasor = document.querySelector('#erasor');
erasor.addEventListener('click',  () => {
    color = "#eeeeee";
});

const randomColorBtn = document.querySelector('#randomColorBtn');
randomColorBtn.addEventListener('click',  () => {
    color = "random";
});

const colorPalette = document.querySelector('#colorPalette');
colorPalette.addEventListener('input',  () => {
    color = colorPalette.value;
});

function buildGrid(size) {
    r.style.setProperty('--grid-size', rows);
    document.querySelectorAll('.gridCl').forEach(el => el.remove());
    for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', paintIt);
        grid.classList.add('gridCl');
        container.appendChild(grid);
    }
}

function paintIt() {
    if (color === "random") {
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else {
      this.style.backgroundColor = color;
    }
}
