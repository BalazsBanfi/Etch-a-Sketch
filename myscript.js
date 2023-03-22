const container = document.querySelector('#container');
let cols = 2;
let rows = 480 / cols + 'px';

// reset button set
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',  () => {
    resetFunction(cols);
});

const r = document.querySelector(':root');
function myFunction_set() {
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