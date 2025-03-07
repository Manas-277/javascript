const name = "manas"
const repo_count = 12

console.log(`hello my name is ${name} and my repo count is ${repo_count}`);

let user = "Alice";
let greet = `Welcome ${user}, your ID is ${`ID_${100 + 23}`}`;
console.log(greet);
// Output: Welcome Alice, your ID is ID_123

const substr = name.substring(0,2) //excludes last index element
console.log(substr)

// Method	Use Case	Output Example	How Important 🔥🔥🔥
// .length	Count characters	"Code".length ➡️ 4	🔥🔥 Must-Know
// .toUpperCase()	Convert to UPPERCASE	"hello".toUpperCase() ➡️ "HELLO"	🔥 Must-Know
// .toLowerCase()	Convert to lowercase	"HELLO".toLowerCase() ➡️ "hello"	🔥 Must-Know
// .charAt()	Get character by index	"Hello".charAt(1) ➡️ "e"	🔥 For Interviews
// .indexOf()	Find index of first match	"Hello".indexOf("l") ➡️ 2	🔥🔥 Important
// .lastIndexOf()	Find index of last match	"Hello".lastIndexOf("l") ➡️ 3	💪 Advanced
// .includes()	Check if string contains substring	"Coding".includes("ing") ➡️ true	🔥🔥🔥 Important for Projects
// .startsWith()	Check if string starts with	"JavaScript".startsWith("Java") ➡️ true	💪 Important
// .endsWith()	Check if string ends with	"React".endsWith("ct") ➡️ true	💪 Important
// .slice()	Cut string with start and end index	"Hello".slice(1, 4) ➡️ "ell"	🔥🔥 Most Asked in Interviews
// .substring()	Same as .slice() but without negative index	"Hello".substring(1, 4) ➡️ "ell"	🔥 Tricky in Interviews
// .replace()	Replace first match	"Hello".replace("l", "z") ➡️ "Hezlo"	🔥🔥 Important
// .replaceAll()	Replace all matches	"Hello".replaceAll("l", "z") ➡️ "Hezzo"	🔥🔥🔥 Modern JS (2021)
// .split()	Split string into array	"Coding is fun".split(" ") ➡️ ["Coding", "is", "fun"]	🔥🔥🔥 Used in Projects
// .concat()	Merge two strings	"Hello".concat(" World") ➡️ "Hello World"	🔥 But not used much
// .trim()	Remove spaces from both sides	" Hello ".trim() ➡️ "Hello"	🔥🔥🔥 Clean Input Data
// .repeat()	Repeat string n times	"Hi ".repeat(3) ➡️ "Hi Hi Hi "	💪 Fun Trick
// .padStart()	Add characters at start	"5".padStart(4, "0") ➡️ "0005"	🔥🔥 Important in Time or ID Numbers
// .padEnd()	Add characters at end	"5".padEnd(4, "0") ➡️ "5000"	🔥🔥
// .match()	Return array of matches using Regex	"Hello 123".match(/\d+/) ➡️ ["123"]	🔥 Advanced for Regex

const str = "manas"
console.log(str);

console.log(str.slice(-8,4))
