//singleton --> object declared by constructor (ek hi object hai bsssss)
// Object.create


//object literals

// Q- take a symbol add it into the object and print it
const mySym = Symbol("key1")

const Employee = {
    name: "Manas",
    "full_name": "Manas Bhardwaj",
    age: 23,
    gender: "male",
    EmployeeId :"X340",
    [mySym]: "123@12" //to access symbol write it into square brackets
}


// two ways to output
// console.log(Employee.EmployeeId);
// console.log(Employee["EmployeeId"]); // behind the scene Employee Id is treated as a string
// console.log(Employee["full_name"]); // behind the scene Employee Id is treated as a string

Employee.age = 22;
// console.log(Employee.age);
// Object.freeze(Employee); //freeze the values of the objects

// Employee.gender = "Female";
// console.log(Employee.gender); //stills remains the same
// console.log(Employee); //stills remains the same

// ....................FUNCTIONS................................

Employee.greetings = function(){
    console.log(`Hello ${this.full_name}! Welcome to LG Soft India`);
}

console.log(Employee.greetings); 
console.log(Employee.greetings()); 
