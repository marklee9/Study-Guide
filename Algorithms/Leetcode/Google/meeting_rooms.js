// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Example 1:

// Input: [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: [[7,10],[2,4]]
// Output: true

// function Interval(start, end) {
//   * this.start = start;
//   * this.end = end;
//   *
// }

var canAttendMeetings = function (intervals) {
  let arr = intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) return false;
  }

  return true;
};