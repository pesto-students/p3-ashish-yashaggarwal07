//Maximum Subarray
//Brute Force
var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (currentSum >= maxSum) {
                maxSum = currentSum
            }
        }
    }
    return maxSum
}

// Kadanes Algo 

var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
