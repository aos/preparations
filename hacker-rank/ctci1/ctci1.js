/*
 * A left rotation operation on an array of size  shifts each of the array'selements 2 unit to the left. For example, if  left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Input: 
First line:
2 space separated integers:
- n (number of integers)
- d (number of left rotations)

Ssecond line:
- n separated integers describing the respective elements of array

Output: Single line of n space-separated integers, denoting final state of array after d left rotations
*/

const rotate_left = (array, rotations) => {
    let n = 0;

    while (n < rotations) {
        const num = array.shift();
        array.push(num);
        n++;
    }

    return array.join(" ");
}


console.log( rotate_left([5,4,3,2,1], 3) )
