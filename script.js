const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
  console.log({ acc, curr });
  acc = acc + curr;
  return acc;
}, 0);
console.log(sum);
const mappedItems = numbers.map((elem) => {
  return elem * 2;
});

// console.log(mappedItems);
const filteredItems = numbers.filter((elem) => {
  return elem % 2 === 0;
});

// console.log(filteredItems === numbers, filteredItems);

const foodItems = [
  {
    name: 'pasta',
    price: 100,
  },
  {
    name: 'sphagetti',
    price: 10,
  },
];

// console.log(
//   foodItems.filter((elem) => {
//     return elem.price > 50;
//   }),
// );

const newArray = foodItems
  .map((foodItem, index) => {
    return {
      ...foodItem,
      isCostly: foodItem.price > 50 ? true : false,
      index: index,
    };
  })
  .filter((elem) => {
    return elem.isCostly !== true;
  });

console.log(newArray, newArray === foodItems);
