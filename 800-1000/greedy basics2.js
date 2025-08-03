/**
 * Activity Selection
 * 
 * Find the maximum number of non-overlapping activities you can attend.
 * Each activity has a start and end time, e.g. [1, 3] means it runs from time 1 to 3.
 * 
 * Steps:
 * 1. Sort activities by their end time.
 * 2. Always pick the earliest-ending activity that doesn't overlap with the last one you picked.
 * 
 * ex: [1, 3] -> [startTime, endTime]
 * 
 * Process:
 * 1. Pick [1, 3] (ends at 3)
 * 2. Skip [2, 4] (starts at 2 < 3) — overlaps
 * 3. Pick [3, 5] (starts at 3 ≥ 3) — no overlap
 * Total picked = 2 non-overlapping activities
 */

const activities = [[1, 3], [2, 4], [3, 5]];
activities.sort((a, b) => a[1] - b[1]); // sort by end time

let count = 1, end = activities[0][1];

for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= end) {
        count++;
        end = activities[i][1];
    }
}
console.log(count); // Output: 2
