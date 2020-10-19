var validMountainArray = function(A) {
  if (A.length < 3) {
    return false;
  }  

  ascend = false;
  descend = false; 
  for (var i = 1; i < A.length; i++) {
    if (A[i-1] === A[i]) {
      return false;
    } else if (A[i - 1] < A[i]) {
      if (!ascend) {
        if (!descend) {
          ascend = true;
        } else {
          return false;
        }
      } else {
        if (descend) {
          return false;
        }
      }
    } else {
      if (!ascend) {
        return false;
      } else {
        if (!descend) {
          descend = true;
        } 
      }
    }
    if (ascend === false && descend === false && A[i-1] < A[i]) {
      ascend = true;
    }
  }
  if (ascend && descend) {
    return true;
  } else {
    return false;
  }
};

//A = [2, 1];
//A = [3, 5, 5];
A = [0, 3, 2, 1];
console.log(validMountainArray(A));