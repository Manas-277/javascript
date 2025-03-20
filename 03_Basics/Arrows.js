const user = {
    username: "manas",
    price: 999,
    welcomeMsg:  function(){
        console.log(`hello ${this.username}!`); // this is used to refer to currect context
        console.log("Current Context is: ", this);
    }
}

// user.welcomeMsg();
// user.username = "sanam"; //context changes
// user.welcomeMsg();

// console.log(this); // op-> {} (because there is no context till now globally)

// Global Object in browser is : Window Object

// function chai(){
//     const flavour = "eliachi"
//     // console.log(this);
//     console.log(this.flavour); // undefined (cannot use this in function)
    
// }
// chai();

// const chai = ()=>{
//     const flavour = "eliachi";
//     console.log(this);
//     console.log(this.flavour); // undefined (cannot use this in function)
// }

// console.log(chai());

//implicit 
const addOne = (val)=> (val + 1); //no need to write return
console.log(addOne(10));

//return object
const printObj = ()=> ({ username: "manas"})
console.log(printObj());





