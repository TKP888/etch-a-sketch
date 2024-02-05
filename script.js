const clear = document.querySelector('#clear');
const changeGrid = document.querySelector('#gridNum');
const containerGrid = document.getElementById('containerGrid');
const black = document.querySelector('#black');
// const random = document.querySelector("#random");
const eraser = document.querySelector('#eraser');
let currentColor = "black"; 

function createGrid(rows, cols) {
  let fragment = document.createDocumentFragment(); // Create a document fragment
 
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.classList.add('grid-item');
    cell.style.width = `${containerGrid.offsetWidth / cols}px`;
    cell.style.height = `${containerGrid.offsetHeight / rows}px`;
    fragment.appendChild(cell); // Append the cell to the fragment
  }

  // Append the whole fragment to the container
  containerGrid.appendChild(fragment);
}
  
  createGrid(16, 16); // Creates grid based on row and column
  



  containerGrid.addEventListener('mouseover', function(event) {
    // Check if the mouseover event is on a grid item
    if (event.target.classList.contains('grid-item')) {
      event.target.style.background = currentColor;
    }
  });




  function erase(){
    currentColor = "white";
      };




function blackInk(){
  currentColor = "black";
};










function restart() {
   const cells = containerGrid.querySelectorAll('div'); // selects all divs

  cells.forEach(cell => {
    cell.style.background = "white"; // Set each cell to white
  });
}






function gridNumber() {
let gridSize = prompt("Choose a grid size between 1 and 100");

  // Convert the user input to an integer
  gridSize = parseInt(gridSize, 10);

  // checks if the value is within the range 1-100
  if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {

      clearGrid();

    // Create a new grid with the specified size
    createGrid(gridSize, gridSize);
  } else {
      alert("Please enter a valid number between 1 and 100.");
  }
}

 function clearGrid() {
    // clears all child nodes from the containerGrid
 while (containerGrid.firstChild) {
      containerGrid.removeChild(containerGrid.firstChild);
    }
  };



  // function changeColor() {
  //   currentColor = "blue";
  // }

changeGrid.onclick = function() {
gridNumber()
};


black.onclick = function() {
  blackInk();
};

eraser.onclick = function() {
  erase();
};


// random.onclick = function(){
//   changeColor();
// }
 



clear.onclick = function() {
  restart();
};


// function multiColor() {

//   let currentColor = [];
//   for (let i = 0; i < 3; i++) {
//     currentColor.push(Math.floor(Math.random() * 256));
//   }
//   return 'rgb(' + currentColor.join(', ') + ')';
// }




// function randomColor(){
//   let colorMode = false; // New flag to track color mode state

//   containerGrid.addEventListener('mouseover', function(event) {
//     if (event.target.classList.contains('grid-item')) {
//       if (colorMode) {
//         // Apply a new random color for each hover
//         event.target.style.background = multiColor();
//       } else {
//         // Apply the currentColor (black or white from blackInk or erase function)
//         event.target.style.background = currentColor;
//       }
//     }
//   });

// };
//   colorMode = !colorMode; // Toggle color mode on each click


//   // Optionally reset to default behavior (e.g., black ink) when exiting color mode
//   if (!colorMode) {
//     currentColor = "black"; // Reset to black when color mode is turned off
//   }
// };














