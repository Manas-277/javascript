//GLOBAL SCOPE

// let b = 22;
// let c  = 30;
// { // BLOCK SCOPE
//     var a = 1; // var has global scope whereever you declare it
//     let b = 2; // let has block scope
//     const c= 3; 
// }

// console.log(a); //op-> 1 as var can been accessed outside the block scope
// console.log(b); //op-> b is not defined as let has a block scope and doesnt have any existence outside the block
// console.log(c); //op-> b is not defined as const has a block scope and doesnt have any existence outside the block

// INTERVIEW QUES: Difference between scope in the code base and the scope in the browser inspect element

//nested scope
// const one = ()=>{ // block scope 1 started
//     const username = "Manas";
//     const two = ()=>{ // block scope two started
//         const website = "manas.com";
//         console.log(username); // username can be accessed by block scope 2 from bs1 ✅
//     }
//     console.log(website); //website cannot be accessed by bs1 from bs2 ❌ because bs2 ended
//     two();
// }

// one();

// if(true){
//     const name = "manas";
//     if(name == "manas"){
//         const age = 23;
//         console.log(name + age); // can access name ✅
//     }
//     console.log(age); //cannot access age ❌
// }
// console.log(name); // cannot access name ❌

// ------------------Intersting----------------------



console.log(addTwo(10)); //op-> 12 ✅ because here we are simply calling a function 
function addTwo(value){
    return value+2;
}

console.log(addOne(10)); //op-> Cannot access 'addOne' before initialization ❌ because we are holding the function declaration in one variable
const addOne = (value)=>{
    return value+1;
}

