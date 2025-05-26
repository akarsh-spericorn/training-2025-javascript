// IF , ELSE, ELSE IF STATEMENT

// let a = false;

// console.log(typeof a);

// if (a) {
//   console.log('a is true');
// } else if (typeof a === 'boolean') {
//   console.log('a is boolean');
// } else {
//   console.log('last else');
// }

// LOGICAL OPERATORS

// let a = 11;
// let b = '11';

// <= less than or equal to

// if (a <= b) {
//   console.log('a is less than or equal to b');
// }
// >= greater than or equal to
// == equal to
// === equal to (strict)
// != not equal to
// if (a !== b) {
//   console.log('a is not equal to b');
// }
// !== not equal to (strict)
// && and
// if (ab > 10) {
//   console.log('a and b are greater than 10');
// }
// || or
// ! not

// break and continue

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

// switch statement
// let a = 1;
// switch (a) {
//   case 3:
//     console.log('a is 3');
//   case 1:
//     console.log('a is 1');
//     break;

//   case 2:
//     console.log('a is 2');
// }

// variable and block scope

let c = 1;

if (true) {
  let a = 2;
  console.log(a);
}

console.log(a);
