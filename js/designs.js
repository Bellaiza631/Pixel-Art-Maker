// Select color input
// Select size input
//When size is submitted by the user, call makeGrid()

const size = document.getElementById("sizePicker");
const height = document.getElementById("input_height");
const width = document.getElementById("input_width");
const color = document.getElementById("colorPicker");
const grid = document.getElementById("pixel_canvas");



size.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let heightGrid = height.value;
    let widthGrid = width.value;
    makeGrid(heightGrid, widthGrid);
});

function makeGrid(height, width) {
    //console.log(height, width);
    grid.innerHTML = ""; //clean the html
    for (let i = 0; i < height; i++) {
        let row = grid.insertRow();

        for (let j = 0; j < width; j++) {
            let cell = row.insertCell();
            cell.addEventListener("click", function() {
                cell.style.backgroundColor = colorPicker.value;
            });

        }
    }
}
