function createGrid(size){
    let grid = document.createElement('div');
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.className = 'cell'
            cell.textContent += 'x';
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


createGrid(16);