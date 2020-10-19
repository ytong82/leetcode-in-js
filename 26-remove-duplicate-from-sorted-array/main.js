var removeDuplicates = function(nums) {
  for (i = 1; i < nums.length; i++) {
    if (nums[i-1] == nums[i]) {
      nums.splice(i - 1, 1);
      i--;
    }
  }
};

//nums = [1, 1, 2];
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums)
console.log(nums);