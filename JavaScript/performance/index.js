

// code 1

const t1 = performance.now();       //performance calculate

for(let i = 1; i <= 100 ; i++) {
    let para = document.createElement('p');
    para.textContent ="this is para " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

//performance print
// console.log(t1);
// console.log(t2);
console.log("total time by code 1 :"+ (t2-t1));



// code 2

const t3 = performance.now();

let mydic = document.createElement('div');
for(let i = 1; i <= 100; i++) { 
    let para = document.createElement('p');
    para.textContent ="this is para " + i;
    mydic.appendChild(para);
}
document.body.appendChild(mydic);

const t4 = performance.now();

console.log("total time by code 2 :"+ (t4-t3));



// best code using document fragment
let t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "this is para : " +i;
    // no reflow no repaint
    fragment.appendChild(para);
}

// 1 reflow 1 repaint
document.body.appendChild(fragment);

let t6 = performance.now();
console.log("total time by code 3 : " + (t6-t5));
