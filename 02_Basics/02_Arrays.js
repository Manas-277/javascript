const a = ["manas", "rajat", "saiyam"]
const b = ["ruddu", "devu", "maanu"]

// b.push(a);
// console.log(b); // array mein array ajaayega
// console.log(b[3]); // returns the whole array
// console.log(b[3][1]); // returns the first element in the  whole array

// const concat_res = b.concat(a); //returns a new array combining both the arrays properly
// console.log(concat_res);

const spread = [...a, ...b] //also returns combined array result in new array, (PREFFERED to USE as can be used for combining more than two arrays)
console.log(spread);

const arr2 = [1,2,3,4, [23, 23,34], 234, [342,345,555], 10 , 12];
const flat_array = arr2.flat(Infinity); //flat all the elements into a single array
console.log(flat_array)

console.log(Array.isArray("hitesh")); // check if it is an array
console.log(Array.from("hitesh")); // convert whatever you give into an array
console.log(Array.from({name: "manas"})); // INTRESTING CASE





