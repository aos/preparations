/* 011 Container With Most Water

Given `n` non-negative integers (a1, a2, ..., an), where each represents
a point at coordinate (i, ai). `n` vertical lines are drawn such that
the two endpoints of line `i` is at (i, ai) and (i, 0).

Find two lines, which together with x-axis forms a container, such that 
the container contains the most water.

Note: You may not slant the container and `n` is at least 2.

Input: [1, 2, 3, 4]
*/

const min = (i, j) => Math.min(i, j);
const max = (i, j) => Math.max(i, j);

// Brute force approach O(n^2)
const maxArea = (height) => {
  let maxA = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      maxA = max(((j - i) * min(height[j], height[i])), maxA);
    }
  }

  return maxA;
}

console.log(maxArea([4, 2, 10, 1, 5]));
