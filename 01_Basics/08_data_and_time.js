let myDate = new Date();
console.log(typeof myDate);

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

let myOwnDate = new Date(2023,0, 12) // month starts from 0 in JS like 0 is for January
let myOwnDate2 = new Date("03-07-2015") //MM/DD/YY
console.log(myOwnDate.toDateString());
console.log(myOwnDate2.toDateString());

//timestamps
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myOwnDate.getTime());

console.log(Math.floor(Date.now() / 1000)) // important questions-> convert into second

let newDate = new Date();
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric"
}))





