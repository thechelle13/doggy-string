// const dog = {
// 	name: "Ringer",
// 	age: 4,
// 	breed: "Cocker Spaniel"
// }

// console.log(`${dog.name} the ${dog.breed} is ${dog.age} years old.`)


// Object representing Ringer
const dog = {
	name: "Ringer",
	age: 4,
	breed: "Cocker Spaniel"
}

// Define a function to convert the object to a string
const dogHTMLMaker = (dogObject) => {
	// Make some HTML to represent the dog
	const dogHTMLSection = `<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old</section>`

	// Return the HTML
	return dogHTMLSection
}

// Invoke the function and give the minion what it needs to do its job.
const stringReturnedFromFunction = dogHTMLMaker(dog)

console.log(stringReturnedFromFunction)

