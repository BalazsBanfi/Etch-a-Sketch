const container = document.querySelector('#container');
const r = document.querySelector(':root');
let cols = document.getElementById("range");
let colsShow = document.getElementById("gridSize");
colsShow.innerHTML = cols.value;
let rows = 480 / cols.value + 'px';
resetFunction(cols.value);


cols.oninput = function() {
  colsShow.innerHTML = this.value;
  rows = 480 / cols.value + 'px';
  resetFunction(cols.value);
}


// reset button set
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',  () => {
    resetFunction(cols.value);
});


function myFunction_set() {
    console.log(rows);
    r.style.setProperty('--grid-size', rows);
}

function resetFunction(rows) {
    myFunction_set();
    document.querySelectorAll('.divGrid').forEach(el => el.remove());
    for (let i = 0; i < (rows * rows); i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('divGrid');
        container.appendChild(divGrid);
    }
}