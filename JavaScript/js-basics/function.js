// normal function

// function name(firstName, lastName){
//     return firstName + " " + lastName;

// }
// console.log(name("ashmit" , "yadav"));



// function stored in variable

// const name = function(firstName, lastName){
//         return firstName + " " + lastName;
// }
// console.log(name("ashmit" , "ji"));


// arrow function

// const greet = (message,code) =>{
//         return message+ ":" + code;
// }
// console.log(greet("printed", "404")); 



// arrow function without arguments
// const greet = () =>{
//        console.log("function runs")
// }
// console.log(greet()); 


// default parameter
function sayName(myName = "gojo") {
       console.log(myName);
}
sayName("ashu");
sayName();