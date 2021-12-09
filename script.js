const slider = document.getElementById('gridSize');
const displayHeight = document.getElementById('size');
const displayWidth = document.getElementById('width');
const grid = document.querySelector('#grid');
displayHeight.innerText = slider.value;
displayHeight.innerText = 16;
displayWidth.innerText = slider.value;
displayWidth.innerText = 16;
createGrid(16);

slider.oninput = function() {
    displayHeight.innerText = this.value;
    displayWidth.innerText = this.value;
    createGrid(this.value);
}

function clearGrid(){
    createGrid(displayHeight.innerHTML);
}

function createGrid(size){
    if(document.getElementById('grid') !== ""){
        document.getElementById('grid').innerHTML = "";
    }
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    document.getElementById('before').appendChild(grid);
    grid.id = 'grid';
    adjustCell(size);
}

function adjustCell(size){
    let fix = document.getElementsByClassName('cell');
    let value = 650/size;
    let styles = {
        "height" : value+"px",
        "width" : value+"px",
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