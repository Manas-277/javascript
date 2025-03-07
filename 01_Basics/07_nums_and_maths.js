 const num = new Number(100)
 console.log(num)

 const score = 123
 console.log(score);

 console.log(typeof num) //--> object
 console.log(typeof score); // --> number
 console.log(num.toString().length); 
 console.log(typeof num.toString());  

 console.log(num.toFixed(3))

 const other = 100
 console.log(other.toPrecision(3));
 

 //maths

console.log(Math.abs(-2))
console.log(Math.round(2.74657)) //round off
console.log(Math.ceil(2.24657)) // always takes the top value
console.log(Math.floor(2.74657)) // always taked the low value
console.log(Math.max(2,3,4,4,5,5,112)) // max value among all
console.log(Math.min(2,3,4,4,5,5,112)) // min value among all
console.log(Math.random()) //any value btw 0 and 1
console.log(Math.random() * 10) //shift one value
console.log(Math.round(((Math.random() * 10) + 1))) // more than 0 always 

//formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 