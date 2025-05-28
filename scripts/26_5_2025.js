// // greet();

// // function greet() {
// //   const greeting = 'Hello, World!';
// //   console.log(greeting);
// // }

// // convert the above function using const greet
// // const greet = function () {
// //   const greeting = 'Hello, World!';
// //   console.log(greeting);
// // };

// // console.log(greet());
// // const sum = function (a, b = 3) {
// //   return a + b;
// // };

// // console.log(sum(1, 2)); // Outputs: 3

// // const subtract = (a, b) => a - b;

// // const greet = (a) => console.log('Hello, World!' + a);

// // const food = ['rice', 'beans', 'chicken', 'fish'];

// // food.forEach((element) => console.log(element));

// // Callback function that logs the item
// function logFruit(item) {
//   console.log('Fruit:', item);
// }

// function addNumber(item) {
//   console.log(item + 1);
// }

// // Function that takes an array and a callback
// function processArray(arr, cb1, cb2) {
//   for (let i = 0; i < arr.length; i++) {
//     // callback(arr[i]); // invoke the callback with current item

//     if (typeof arr[i] === 'string') {
//       cb1(arr[i]); // Call the logFruit function for string items
//     } else if (typeof arr[i] === 'number') {
//       cb2(arr[i]); // Call the addNumber function for number items
//     }
//   }
// }

// // Example usage
// const fruits = ['apple', 1, 'cherry'];
// processArray(fruits, addNumber, logFruit);
// // processArray(fruits, logItem);

const items = document.querySelector('.items');

let htmlString = '';

[2, 3, 4].forEach((item) => {
  const li = `<li class="item">Video - ${item}</li>`;
  htmlString += li;
  //   console.log(htmlString);
});

console.log(items.innerHTML);

items.innerHTML += htmlString;
