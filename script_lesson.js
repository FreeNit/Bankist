'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE - NOT mutate original array
// console.log('SLICE');
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE - mutate original array
// console.log('SPLICE')
// //console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE - mutate original array
// console.log('REVERSE');
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - not mutate original arrays
// console.log('CONCAT');
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log('JOIN');
// console.log(letters.join(' - '));

// FOR - loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for(const movement of movements){
// for(const [i, movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement ${i + 1} you deposited ${movement}`);
//   }else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// // FOREACH
// console.log(`-------------- FOREACH - method ---------------`);
// movements.forEach(function(mov, index, arr){
//   if(mov > 0){
//     console.log(`Movement ${index + 1} you deposited ${mov}`);
//   }else {
//     console.log(`Movement ${index + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

// MAP - method
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);
//   console.log(currencies.get(`${key}`))
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// // key and value is the same value, so we can use the same name for both parameters - value
// currenciesUnique.forEach(function(value, _value, map){
//   console.log(`${value}: ${value}`);
// })

// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJuliaslice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   // const dogs = [...dogsJuliaCorrected, ...dogsKate]; // with spread ... operator
//   dogs.forEach(function(dog, i){
//     if(dog >= 3){
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy.`);
//     }
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov){
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);  // using arrow function
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) =>

//   `Movement ${i + 1} You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)}` // use ternary operator
//   // if(mov > 0){
//   //   return `Movement ${i + 1} you deposited ${mov}`;
//   // }else {
//   //   return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`;
//   // }
// );
// console.log(movementsDescriptions);

// ****** FILTER *****
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov){
//   return mov > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter((mov) => {
//   return mov < 0;
// });
// console.log(withdrawals);

// ****** REDUCE ******
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // accumulator -> SNOWBALL
// const balance = movements.reduce(function(accumulator, currentValue, i, arr){
//   console.log(`Iteration ${i}: ${accumulator}`);
//   return accumulator + currentValue;
// }, 0);
// console.log(balance);
// // REDUCE in for of loop representation, for loop requires additional declaration of variable
// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// // RECUDE - arrow function representation
// const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance3);

// ****** REDUCE ******
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // accumulator -> SNOWBALL
// const balance = movements.reduce(function(accumulator, currentValue, i, arr){
//   console.log(`Iteration ${i}: ${accumulator}`);
//   return accumulator + currentValue;
// }, 0);
// console.log(balance);
// // REDUCE in for of loop representation, for loop requires additional declaration of variable
// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// RECUDE - arrow function representation
// const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance3);
// REDUCE - maximum value
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov) return acc;
//   else
//     return mov;
// }, movements[0]);
// console.log(max);
// REDUCE - maximum value with ternary operator
// const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
// console.log(max);

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age => age <=2 ? 2 * age : 16 + age * 4);
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(`Adults dogs ${adults}`);

//   //const average = adults.reduce((acc, age) => acc + age,0) / adults.length;
//   const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(`Average value ${average}`);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/* ******* Rewrite 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
 */
// const calcAverageHumanAge = function(ages){
//   const average = ages.map(age => age <=2 ? 2 * age : 16 + age * 4).
//   filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(`Average value ${average}`);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/* ****** FIND method ****** */
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };
// const account22 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 3,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const firstWithdrawal = movements.find(mov => mov < 0);
// // console.log(firstWithdrawal);

// // const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// // console.log(account);

// // Find method through the "for of" loop
// for(const acc of accounts){
//   if(acc.owner === 'Jessica Davis'){
//     const newAccount = acc;
//     console.log(newAccount);
//     break;
//   }
// }

/* ***** SOME and EVERY array methods ***** */

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // EVERY - return true if all the elements of array satisfy the condition
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/* ***** flat and flatMap methods ***** */

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// const allMovements = accountMovements.flat();
// // console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flat
// const overalBalance_Chining = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(`flat method: ${overalBalance_Chining}`);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements) // only 1 level deep
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(`flatMap method: ${overalBalance2}`);

/* SORT method - mutate the original array*/

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // if return < 0 -> A(currentValue) before B(nextValue) - keep order
// // if return > 0 -> B before A - switch order

// // Ascending
// // movements.sort((currentValue, nextValue) => {
// //   if(currentValue > nextValue)
// //     return 1;
// //   if(nextValue > currentValue)
// //     return -1;
// // });
// movements.sort((a, b) => a - b)
// console.log(movements);

// // Descending
// // movements.sort((currentValue, nextValue) => {
// //   if(currentValue > nextValue)
// //     return -1;
// //   if(nextValue > currentValue)
// //     return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

/* ***** More Ways of Creating and Filing Arrays ***** */
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method
// const x = new Array(7);
// // console.log(x);
// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);
// arr.fill(23, 4, 6);
// console.log(arr);

// Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(`y array: ${y}`);

// const z = Array.from({length: 7}, (cur, i) => i + 1 )
// console.log(`Array Z: ${z}`);

// const r = Array.from({length: 7}, (_, i) => i + 1 )
// console.log(`Array R: ${z}`);

// const randomArray = Array.from({length: 100}, (_, i) => Math.random() * 100);
// console.log(randomArray);

/* ***** Array Methods Practice ***** */

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1
// const bankDepositSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // Prfixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       //console.log(sums);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// /* Codding challange 4 */
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // const addRecomendedPortion = function (dogs) {
// //   dogs.forEach(function (dog) {
// //     dog.recomendedPortion = ((dog.weight * dog.curFood) / 1000) * 0.75 * 28;
// //   });
// // };
// // addRecomendedPortion(dogs);
// // console.log(dogs);

// // 1.
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2.
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// // 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// // "Matilda and Alice and Bob's dogs eat too much!"
// // "Sarah and John and Michael's dogs eat too little!"
// console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended *  1.10)
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);


// const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4))
// console.log(days1);


// const ingredients = ['olives', 'spinach']
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients);
// console.log('Waiting...');

// if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);



// // setTimeout
// setInterval(function() {
//   const now = new Date();
//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   console.log(`Current time is ${hour}:${minutes}:${seconds}`);
// }, 1000);

