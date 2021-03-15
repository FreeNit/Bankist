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