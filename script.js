const slider = document.getElementById('gridSize');
const displaySize = document.getElementById('size');
const grid = document.querySelector('#grid');
displaySize.innerHTML = slider.value;
displaySize.innerHTML = 16;
createGrid(16);

slider.oninput = function() {
    displaySize.innerHTML = this.value;
    createGrid(this.value);
}

function createGrid(size){
    if(document.getElementById('grid') !== ""){
        document.getElementById('grid').innerHTML = "";
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

grid.addEventListener('mouseover', function(c){
    if(c.target.matches('.cell')){
        c.target.classList.add('draw');
    }
});