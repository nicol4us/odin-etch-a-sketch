// Constants Declaration
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const container             = document.querySelector("#container");
const horizontalContainer   = document.querySelector(".horizontal-container");
const firstSquare           = document.createElement("div");
firstSquare.classList.add("square");
const squareSelector        = ".square";
const hoverEvent            = "mouseover";


// Variable Declaration
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
let gridSize = 16;



// Functions Declaration
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//(Element, Element, Integer) -> ()
// To duplicate and and append element into parent element
function duplicateAndAppendElement(parentElement, childElement, number) {
    for(i=0; i < number; i++) {
        parentElement.appendChild(childElement.cloneNode(true));
    }
}

//(Element, Element, Element, Integer) -> ()
// To create grid according to number
function createGrid(mainContainer, horizontalContainer, element, number) {
    duplicateAndAppendElement(horizontalContainer,element,number);
    duplicateAndAppendElement(mainContainer,horizontalContainer, (number-1));
}





