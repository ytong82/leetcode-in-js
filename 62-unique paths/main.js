var uniquePaths = function(m, n) {
  dp = new Array(m);
  for (i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (i == 0) {
        dp[i][j] = 1;
      } else {
        if (j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }
  return dp[m-1][n-1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));