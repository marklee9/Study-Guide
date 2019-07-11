/*

Implement next permutation, which rearranges numbers into 
the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as 
the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand 
column and its corresponding outputs are in the right-hand column.

 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1

*/

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i + 1] <= arr[i]) i--;

  if (i === -1) {
    reverse(0);
    return;
  }

  let j = arr.length - 1;
  
  while (j >= 0 && arr[j] <= arr[i]) j--;
  swap(i, j);
  reverse(i + 1);
  return;

  // helper functions
  function swap(start, end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }

  function reverse(start) {
    let end = arr.length - 1;
    while (start < end) swap(start++, end--);
  }
}