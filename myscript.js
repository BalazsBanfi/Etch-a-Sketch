let rows = 10;

const container = document.querySelector('#container');

for (let i = 0; i < (rows * rows); i++) {
    const divGrid = document.createElement('div');
    divGrid.classList.add('divGrid');
    container.appendChild(divGrid);
}