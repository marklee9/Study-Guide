/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let int = intervals[i];

    if (!result.length) result.push(int);
    let last = result[result.length - 1];

    if (last[1] >= int[0]) {
      last[1] = Math.max(last[1], int[1]);
    } else {
      result.push(int);
    }
  }

  return result;
}