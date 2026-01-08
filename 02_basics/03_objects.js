//                              objects
// -----------------------------------------------------------------------------

// In JavaScript, objects are collections of key-value pairs.
// They can store various types of data and are fundamental to the language.

// Creating an object      
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "traveling", "gaming"],
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing object properties
console.log(person.name); // Dot notation
console.log(person['age']); // Bracket notation

// Modifying object properties
person.age = 31;
person['isStudent'] = true;

// Adding new properties
person.email = "vibhorg62@gmail.com";
person['phone'] = "123-456-7890";

// Deleting properties
delete person.phone;

// Calling a method
person.greet();

// Looping through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Checking if a property exists
console.log('hobbies' in person); // true
console.log(person.hasOwnProperty('address')); // true

// Getting all keys and values
console.log(Object.keys(person)); // Array of keys
console.log(Object.values(person)); // Array of values

// Cloning an object
const clonedPerson = Object.assign({}, person);
console.log(clonedPerson);

// Merging objects
const additionalInfo = {
    occupation: "Engineer",
    nationality: "Wonderlandian"
};
const mergedPerson = Object.assign({}, person, additionalInfo);
console.log(mergedPerson); 
Object.freeze(person); // Freezing the object to prevent modifications
// person.age = 32; // This will not change the age property
console.log(person.age); // 31