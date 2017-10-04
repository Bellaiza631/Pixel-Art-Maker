// Select color input
// Select size input
//When size is submitted by the user, call makeGrid()
let size = document.getElementById("sizePicker");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let color = document.getElementById("colorPicker");
let grid = document.getElementById("pixel_canvas");



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

            //row.appendChild(cell); //Insert content, specified by the parameter, to the end of each element
        }
    }
}
//const $colorPicker = document.getElementById("colorPicker");
//let width = document.getElementById("input_width").value;
//then you need to pass them to a function called
//and you also need to define this function
//now for that you will have to think of the logic
//and also you need a fnction to change color when clicked
//so also make a small function for that
