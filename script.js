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

// (Element) -> ()
// To remove all childs of given element
function removeAllElementChild(element) {
    while(element.firstChild) {
        element.firstChild.remove();
    }
}

// () -> String
// Return code of color randomly
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// (String, String) -> ()
// To set background color of given class selector and type of event
function setGridColor(classSelector, eventType) {
    const allSquare = document.querySelectorAll(classSelector);
    allSquare.forEach(element => element.addEventListener(eventType, () => {
    
        element.style.backgroundColor = getRandomColor();
    }));
}









