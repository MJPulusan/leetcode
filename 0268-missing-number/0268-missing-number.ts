function missingNumber(nums: number[]): number {
 const n = nums.length;
 let sum = 0;
 let expectedSum = (n * (n + 1)) / 2;


 for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
 }
 return expectedSum - sum;
};