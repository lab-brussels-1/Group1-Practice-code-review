import { difference } from './difference.js';

const array1 = [11, 22, 33];
const array2 = [22, 33];
const diffArray = difference(array1, array2);
console.log(diffArray); // [11]

const number1 = ['english', 'dutch', 'german'];
const number2 = ['german', 'english', 'french'];
const number3 = ['english'];
const diffNumber = difference(number1, number2, number3);
console.log(diffNumber); // [dutch, french]

// testing

const errorArray = [];
const errorArray1 = [888, 444];
const arrayOutput = difference(errorArray, errorArray1);
console.log(arrayOutput); // throw an error