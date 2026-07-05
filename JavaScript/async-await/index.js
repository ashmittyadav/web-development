
// async function

// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set Timeout block")        
//     },3000);
// }

// getData();





// await - ?



// fetch API
// async function getData() {
    
//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     // parse json - async
//     let data = await response.json();
//     console.log( response );
//     console.log( data);
// }
// getData();

// scenerio:
// prepare url / api endpoint -> sync
// await / fetch data -> network call -> async
// process data -> sync








const myHeaders = new Headers();
myHeaders.append("Constant-Type","applicatopn/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Ashmit yadav" }),
    headers: myHeaders,
};
async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data : ", data);
}
async function postData() {
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("post data : ", data);
}

async function processData() {

   await postData();  
   await getData();
}

processData();