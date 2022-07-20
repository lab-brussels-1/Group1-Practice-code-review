/** ..........
 * This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */
/* @example 1*/

let arr1 = [french, english, german];
let arr2 = [french, dutch, german];

let intersection = arr1.filter(x => arr2.includes(x));


/* @example 2 */