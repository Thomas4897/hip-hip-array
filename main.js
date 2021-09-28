/* This assignment will give you some practice with creating arrays and using their methods. */

//? ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.

//! Challenge 1

//! Loop through the following array, console.logging out each value.
console.log("Challenge 1");
const students = [
	"Tre",
	"Sonny",
	"Crystal",
	"Ilyas",
	"Greg",
	"Fernando",
	"Timothy",
	"Patrick",
	"Steve",
	"Jimothy",
	"Pat",
	"Arnold",
	"Andy",
];

for (let i = 0; i < students.length; i++) {
	console.log(students[i]);
}

//! Challenge 2
//! Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
console.log("\nChallenge 2");
const grades = [100, 80, 110, 75, 83, 64];

for (let i = grades.length - 1; i >= 0; i = i - 1) {
	console.log(grades[i]);
}

//! Challenge 3
//! Console.log out only the even numbers in the following array.
console.log("\nChallenge 3");
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
	if (positiveNumbers[i] % 2 === 0) {
		console.log(positiveNumbers[i]);
	}
}

//! Challenge 4
//! Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
console.log("\nChallenge 4");
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
	if (mixedSignNumbers[i] % 2 === 0) {
		console.log(mixedSignNumbers[i]);
	}
}

//! Challenge 5
//! Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
console.log("\nChallenge 5");
const symmetricalCapitals = ["I", "M", "O", "T", "U", "V", "W", "X"];

for (let i = 0; i < symmetricalCapitals.length; i++) {
	console.log(symmetricalCapitals[i]);
}

//! Challenge 6
//! Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
console.log("\nChallenge 6");
const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for (let i = 0; i < fibonacciNumbers.length; i++) {
	console.log(fibonacciNumbers[i]);
}

//! Challenge 7
//! Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
console.log("\nChallenge 7");
const cars = ["Jeep", "Ford", "Honda", "Toyota", "Subaru"];

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

//! Challenge 8
//! Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
console.log("\nChallenge 8");
const num = [];

num.push(2);
num.unshift(1);
num.push(3);
num.unshift(0);
num.push(4);

for (let i = 0; i < num.length; i++) {
	console.log(num[i]);
}

//! Challenge 9
//! Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
console.log("\nChallenge 9");

for (let i = 2; i <= 10; i++) {
	console.log(students[i]);
}

//! Challenge 10
//! Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
console.log("\nChallenge 10");
const students2 = [];

for (let i = 2; i <= 9; i++) {
	students2.push(students[i]);
	let i2 = i - 2;
	console.log(students2[i2]);
}

//! Challenge 11
//! Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
console.log("\nChallenge 11");

let students3 = students.slice(2, 10);

for (let i = 0; i < students3.length; i++) {
	console.log(students3[i]);
}

console.log("\nOriginal Students Array");
for (let i = 0; i < students.length; i++) {
	console.log(students[i]);
}

//! Challenge 12
//! Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
console.log("\nChallenge 12");
const dinosaurs = [
	"Velociraptor",
	"T-Rex",
	"Stegosaurus",
	"Triceratops",
	"Dimetrodon",
	"Allosaur",
	"Spinosaurus",
	"Gigantosaur",
];

console.log(dinosaurs.splice(3, 3));

console.log("\nOriginal Dinosaur Array");
for (let i = 0; i < dinosaurs.length; i++) {
	console.log(dinosaurs[i]);
}

//! Challenge 13
//! Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log("\nChallenge 13");

const dinoJoin = dinosaurs.join("*");

console.log(dinoJoin);

//! Challenge 14
//! Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
console.log("\nChallenge 14");

const dinoReverse = dinosaurs.reverse();

console.log(dinoReverse);

console.log("\nOriginal Dinosaur Array");
console.log(dinosaurs);

//! Challenge 15
//! Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
console.log("\nChallenge 15");
const primaries = ["red", "yellow", "blue"];
const secondaries = ["orange", "green", "purple"];

const both = primaries.concat(secondaries);

console.log("\nBoth");
for (let i = 0; i < both.length; i++) {
	console.log(both[i]);
}

console.log("\nPrimaries");
for (let i = 0; i < primaries.length; i++) {
	console.log(primaries[i]);
}

console.log("\nSecondaries");
for (let i = 0; i < secondaries.length; i++) {
	console.log(secondaries[i]);
}
