

//     function changeText(event) {
//         console.log(event);
//         let fpara = document.getElementById('fpara');
//         fpara.textContent = "ashmit"; 
//     }
//     let fpara = document.getElementById('fpara');
//     fpara.addEventListener('click', changeText);
//     // fpara.removeEventListener('click', changeText);





//default action
// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "done sir"
// });



//avoiding too many listeners
// let paras = document.querySelectorAll('p');

function alertPara(event) {
    if(event.target.nodeName == 'SPAN'){

        alert("you have clicked on para : "+ event.target.textContent);
    }
}

// for(let i = 0; i < paras.length ; i++) {
//     let para = paras[i];
//     para.addEventListener('click',alertPara)
//         // alert("you have clicked on para : "+(i+1));
// }



//using div
let mydiv = document.getElementById('wrap');
    document.addEventListener('click',alertPara)
