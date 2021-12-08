var slider = document.getElementById('gridSize');
var displaySize = document.getElementById('size');
displaySize.innerHTML = slider.value;
slider.oninput = function() {
    displaySize.innerHTML = this.value;
    createGrid(this.value);
}

function createGrid(size){
    if(document.getElementById('grid') !== ""){
        document.getElementById('grid').innerHTML = "";
    }
    else {
        let grid = document.getElementById('grid');
    }
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            grid.appendChild(cell);
        }
    }
    document.body.appendChild(grid);
    grid.id = 'grid';
    adjustCell(size);
}

function adjustCell(size){
    let fix = document.getElementsByClassName('cell');
    let value = 500/size;
    let styles = {
        "height" : value+"px",
        "flex-basis" : value+"px"
    };
    for(let i = 0; i < fix.length; i++){
        let div = fix[i];
        Object.assign(div.style, styles);
    }
}

displaySize.innerHTML = 16;
createGrid(16);