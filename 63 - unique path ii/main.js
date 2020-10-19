var uniquePathsWithObstacles = function(obstacleGrid) {
  let dp = new Array(obstacleGrid.length);
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp[i] = new Array(obstacleGrid[0].length);
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (i === 0) {
        if (obstacleGrid[i][j] === 0) {
          if (j === 0) {
            dp[i][j] = 1;
          } else {
            dp[i][j] = dp[i][j - 1];
          }
        } else {
          dp[i][j] = 0;
        }
      } else {
        if (j === 0) {
          if (obstacleGrid[i][j] === 0) {
            dp[i][j] = dp[i-1][j];
          } else {
            dp[i][j] = 0;
          }
        } else {
          if (obstacleGrid[i][j] === 0) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
          } else {
            dp[i][j] = 0;
          }        
        }
      }
    }
  }
  return dp[obstacleGrid.length-1][obstacleGrid[0].length-1];
};

//let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
let obstacleGrid = [[1, 0]];
console.log(uniquePathsWithObstacles(obstacleGrid));