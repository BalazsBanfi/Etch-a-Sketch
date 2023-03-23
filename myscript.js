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
    colsShow.innerHTML = 16;
    cols.value = 16;
    rows = 480 / 16 + 'px';
    resetFunction(16);
});


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

//document.querySelectorAll('.divGrid').forEach(el => el.style.backgroundColor = "black");

const black = document.querySelectorAll('.divGrid')
black.addEventListener("mouseenter", (event) => {
    event.style.backgroundColor = "black";
});


// change the colors
/*
let divChange = document.getElementsByClassName('.divGrid');
console.log(divChange);
divChange.addEventListener("mousemove", function(e) {

divChange.style.backgroundColor = 'white';
});
//style.backgroundColor = "black";
divChange.addEventListener("mouseover", function(e) {
        e.target.style.background = "black";
    });*/
