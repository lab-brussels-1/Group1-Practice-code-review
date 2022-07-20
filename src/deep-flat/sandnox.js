import { deepFlat } from './deepFlat.js';


// multi dimensional array into single array

const numbers = [1, 2, [3],
    [4], 5, [6, 7]
];
const returnArr = deepFlat(numbers);
console.log(returnArr); // [1,2,3,4,5,6,7]