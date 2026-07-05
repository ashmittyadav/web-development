


function outerFunction() {
    let name = "ashmit";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();

inner();