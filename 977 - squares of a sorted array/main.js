var sortedSquares = function(A) {
  nums = A.map(item => item * item).sort((a, b) => a - b);
  return nums;
};

A = [-4, -1, 0, 3, 10];
nums = sortedSquares(A);

console.log(nums);