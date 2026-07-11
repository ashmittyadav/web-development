// add element
let mydiv = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "Ashmit yadav";
// mydiv.insertAdjacentElement('afterend', newElement);

// remove element
let parent = document.querySelector('#mydiv');    //select the parent
let child = document.querySelector('#fpara');     ////select the child
parent.removeChild(child);