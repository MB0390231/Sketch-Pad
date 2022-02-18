function generateGrid (size) {
    clearGrid()
    if (size > 100) {
        window.alert("100 is the max height");
        let size = 100
    }
    const grid = document.querySelector('.grid');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++){
            const square = document.createElement('div')
            square.setAttribute('id','square')
            row.appendChild(square)
        }
        grid.appendChild(row);
    }
}

function clearGrid() {
    const grid = document.querySelector('.grid') 
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }   
}

function chooseSize () {
    choice = window.prompt("What would you like the height to be? (must be under 100)");
    if (parseInt(choice) > 100) {
        return 100;
    }
    else {
        return parseInt(choice)
    }
}

function logText(e) {
    console.log(this.classList.value);
    console.log(this);
}

let size = chooseSize()
generateGrid(size)
color = 'black';

const colors = document.querySelectorAll('.color')
colors.forEach(choice => choice.addEventListener('click',function () {
    color = `${choice.id}`;
})
)

const squares = document.querySelectorAll("#square");
squares.forEach(square => square.addEventListener('mouseover', function () {
    square.style.cssText = `background-color: ${color};`;
}))

const clear = document.querySelector('.clear').addEventListener('click',function () {
    squares.forEach(square => square.setAttribute('style','background-color: white'))
})

const newSize = document.querySelector('.size').addEventListener('click',function() {
    let size = chooseSize()
    generateGrid(size)

    const squares = document.querySelectorAll("#square");
    squares.forEach(square => square.addEventListener('mouseover', function () {
    square.style.cssText = `background-color: ${color};`;
    }))

    const clear = document.querySelector('.clear').addEventListener('click',function () {
    squares.forEach(square => square.setAttribute('style','background-color: white'))
    })
})






