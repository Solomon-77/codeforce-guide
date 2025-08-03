// Activity Selection

const activities = [[1, 3], [2, 4], [3, 5]];
activities.sort((a, b) => a[1] - b[1]); // sort by end time

let count = 1, end = activities[0][1];

for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= end) {
        count++;
        end = activities[i][1];
    }
}
console.log(count); // Outputs max non-overlapping tasks
