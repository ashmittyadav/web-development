/* function as first class citizen

1. assign to variables

2. passing value as arguments

3. return values

4. return functions

5. use function as Data Structures( Array )

6. use fntn as property
*/

// 1

let greet = function(){
    console.log("variable greet is assigned to the function");
}
greet();


// 2

const param = (message) => {
    console.log(message);
}
param("argument is passed");

// 3  &  4

function b(sum){
    console.log("function returned");
    return 3+2;
 }
function a(result){
    return b(result);
}
let sum;
console.log(a(sum));

// 4

// let add = (a) => {
//     return 3+2;
// }
// let result;
// console.log(add(result));


// 5

let obj = {
    age : 21,
    wt : 68,
    ht : "5'6",
    greet: ()=>{
        console.log("function used in ds(array)");
    }
}
console.log(obj);
obj.greet();

