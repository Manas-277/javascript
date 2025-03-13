const arr = [0,1,2,3,4,5];
// const arr1 = new Array(1,2,3,4)
// console.log(arr);
// console.log(arr1);


// arr.push(12);
// console.log(arr);
// arr.pop(12);
// console.log(arr);

// arr.unshift(0); // added element 0 in front of the array, this makes right shift all values which gives load to the system
// console.log(arr);
// arr.shift();// pop the front element
// console.log(arr);


// console.log(arr.indexOf(10));
// console.log(arr.includes(10));

// const newArray = arr.join(); // convert to string type
// console.log(newArray);
// console.log(arr);

//slice / splice

console.log("Original array ", arr);

const slice_op = arr.slice(1,3);

console.log("slice op", slice_op);
console.log("array after slice", arr);

const splice_op = arr.splice(1,3);
console.log("splice output", splice_op);
console.log("array after splice", arr);



