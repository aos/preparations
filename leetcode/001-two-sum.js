/*
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = function(nums, target) {
    const map = {};

    /* Naive solution
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if ((nums[i] + nums[j]) === target) {
                    result.push(i);
                }
            }
        }
    }
    return result;
    
    */
    
    // Using one-pass hash table
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.hasOwnProperty(complement)) {
            // Return the index located at the complement (aka the other value)
            // As well as the current value (it is the other complement)
            return [map[complement], i];
        }
         map[nums[i]] = i; 
    }
};
