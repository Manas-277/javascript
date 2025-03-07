// const isSafe = true;
// const name = "Manas";
// let userEmail;
// console.log(userEmail);

// const id = Symbol('123')
// const id2 = Symbol('123')
// console.log(id);
// console.log(id2);
// console.log(id == id2)
// console.log(typeof id);
// console.log(typeof id2);


//stack and Heap memory in JS
// Stack ( primitive DT)
// HTMLTableCaptionElement( Non- primitive)

let myChannelName = "techbaaz"
let anotherName = myChannelName
anotherName = "chaiaurcode"
console.log(anotherName); // output: chaiaurcode -> another name was given copy of myChannelname, change in copy never effects the original block
console.log(myChannelName); // output: techbaaz

//here since object is a non primitive data type
let user1 = {
    id : Symbol('12345'),
    name: "Manas"
}
let user2 = user1
//user 2 will also pont to the memory location of user1
// therefore the change in user2 will reflect in the user1 originally

console.log(user1);
console.log(user2);


user2.id = Symbol('3455')
user2.name = "Sanam"

console.log(user1);
console.log(user2);



