

    // function changeText(event) {
    //     console.log(event);
    //     let fpara = document.getElementById('fpara');
    //     fpara.textContent = "ashmit"; 
    // }
    // let fpara = document.getElementById('fpara');
    // fpara.addEventListener('click', changeText);
    // // fpara.removeEventListener('click', changeText);

let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "done sir"
});