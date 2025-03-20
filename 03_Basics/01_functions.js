const Person1 = "Manas";
const Person2 = "Rajat";
//function expression
const sayHello = function(){
    console.log(`Hello ${Person2}!, I am ${Person1}`);
}
//arrow
const sayHi = ()=>{
    console.log(`Hii ${Person1}!, I am ${Person2}`);
}

sayHello();
sayHi();


const add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(12,8));
console.log(add(12,"8"));
console.log(add(12,"a"));
console.log(add(12,null));
console.log(add(12,"a"));

const loginUSerMessage = (username)=> {
    if(username)
        return `${username} just logged in`;
    else 
        return `Please Enter a username!`;
    
}

// console.log(loginUSerMessage(Manas));
console.log(loginUSerMessage()); //no value given

const calculateCartPrice = (val1, val2, ...num1)=>{ //rest/ spread operator -> we can pass multiple values in the funciton and it will return an array with all those values
    return num1;
}

console.log(calculateCartPrice(200,400,500,1000,1500)); // 200 and 400 is taken by val1 and val2

//PASS Object in function
const user = {
    username: "Manas",
    email: "anbv@gmail.com"
}


const handleObj = (anyObj) =>{  
    console.log(`username is ${anyObj.username} and email.is ${anyObj.email}`);
}

handleObj(user);
handleObj({
    username: "Rajat",
    email: "a@ndvnsjvf.com"
});

//PASS Arrays in functions
const arr = [12,23,4,4,54,["34m45km"]];

const printArray = (getarr)=>{
    console.log(`printing elements`);
    for(let i=0; i<getarr.length; i++){
        console.log(getarr[i], " ");
    }
    console.log("\n");

    console.log("Array is: ");
    
    console.log(getarr)
}

printArray(arr);
printArray([1,2,23,3,4,4,4,5,5,6,6,6]);





