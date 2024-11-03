// Review Array.prototype.map()

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
    return currentElement + ' ice cream';
});

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map((num) => {
    return num * 2;
})

console.log('\nExercise 1:');
console.log(nums2);

// Review: Array destructuring
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

// Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings;

console.log('\nExercise 2:');
console.log(firstTopping);
console.log(secondTopping);

// Review: Object destructuring
const person = {
    name: 'Alex',
    role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'

//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

// Your code here
const { make, model } = car;
console.log('\nExercise 3:');

console.log(make);
console.log(model);

// Review: Applying the spread operator on arrays
const originalArray = [1, 2, 3];
const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log('\nExercise 4:');
console.log(controversialPizzaToppings);

// Review: Applying the spread operator on objects
const originalObject = {
    foo: 'Hello',
    bar: 100,
};

const clonedObject = originalObject;
clonedObject.foo = 'Goodbye';

//   console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };

const myCar = car;
myCar.model = 'q7'
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
console.log('\nExercise 5:');
console.log(myCar);
