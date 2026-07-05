
// // promise syntax

// let firstPromise = new Promise((resolve,reject) => {
//     console.log("Ash");
//     // resolve(1001);
//     reject(new Error("Server error"));
// });






// // Async code

// function sayMyName() {
//     console.log("my name is ashmit yadav");
// }
// setTimeout(sayMyName,10000)







// // async function written in setTimeout

// setTimeout(function sayMyName() {
//     console.log("my name is ashmit yadav");},10000);



// // contained inside promise

// let firstPromise = new Promise((resolve,reject) => {
//    setTimeout(function sayMyName() {
//     console.log("my name is ashmit yadav");},10000);
//     resolve(1);
// });








// using then to add more task after promise

// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     // let success = false;
//     if(success) {
//         resolve("Promise fulfilled");
//     }
//     else {
//         reject("Promise rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("the message is : " +message);
// }).catch((error) => {
//     console.log("Error : " + error);
// });







// // chaining promises
// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     // let success = false;
//     if(success) {
//         resolve(10);
//     }
//     else {
//         reject(-1);
//     }
// });

// promise1.then((message) => {
//     console.log("first message: " +message);
//     return 20;
// }).then((message) => {
//     console.log("second message: " +message);
//     return  30;
// }).then((message) => {
//     console.log("third message: "+message);
// }).catch((error) => {
//     console.log("Error : " + error);
// }).finally(() => {
//     console.log("main to final hu chalunga hi chalunga: ");  
// });






// //handling multiple promises by promise.all

let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject) => {
    setTimeout(reject,3000,"Third");
})

Promise.all([promise1,promise2,promise3])
.then((values) => {
    console.log(values)
})
.catch((error) => {
    console.log("error: " +error);
    
})