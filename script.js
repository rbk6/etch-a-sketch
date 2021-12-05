
let slider = document.getElementById('grid');
let rowcol = document.getElementById('value');
rowcol.innerHTML = slider.value;

slider.oninput = function() {
    rowcol.innerHTML = this.value;
}

function createGrid() {
    let x = slider;
    let grid = document.createElement('div');
    for(let i = 0; i < x; i++){
        let newRow = document.createElement('div');
        newRow.id = 'row' + i;
        newRow.className = 'square';
        for(let j = 0; j < x; j++){
            let newCol = document.createElement('div');
            newCol.id = 'col' + i;
            newCol.className = 'square';
            newRow.appendChild(newCol);
        }
        grid.appendChild(newRow);
    }
}
