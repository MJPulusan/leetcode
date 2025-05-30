function singleNumber(nums: number[]): number {
 const countMap: { [key: number]: number } = {};

  for (const num of nums) {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  for (const num of nums) {
    if(countMap[num] === 1) {
        return num;
    }
  }
  return -1;
};