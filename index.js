/*
    LEETCODE CHALLENGES WITH LINKS TO THE CHALLENGE 
*/

/* 
 ------------------------------------------------------------------------------------------------
EASY CHALLENGES
 ------------------------------------------------------------------------------------------------
*/

// ----------------------------------------------------------------------------------------------
// Problem - Is Palindrome
// Challenge link - https://leetcode.com/problems/palindrome-number/'

// Iteration One : Convert the number to string and check against that. My solution
function isPalindrome(x) {
  var reversedNum = String(x).split("").reverse().join("");

  if (reversedNum == x) {
    return true;
  } else {
    return false;
  }
}

//console.log(isPalindrome(525));
//console.log(isPalindrome(527));
//console.log(isPalindrome(-123));
//console.log(isPalindrome(122));

// Iteration Two : LEETCODE Solution page solution
// Time Complexity: o(log10(n)) | Space Complexity O(1)

function isPalindromeTwo(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x /= 10;
  }

  return x == revertedNumber || x == revertedNumber / 10;
}

//console.log(isPalindromeTwo(525));
//console.log(isPalindromeTwo(527));
//console.log(isPalindromeTwo(-123));
//console.log(isPalindromeTwo(122));
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem -  FizzBuzz
// Challenge Link - https://leetcode.com/problems/fizz-buzz/

// Iteration One

function fizzbuzz(n) {
  let myArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      myArray.push("FizzBuzz");
    } else if (i % 3 == 0) {
      myArray.push("Fizz");
    } else if (i % 5 == 0) {
      myArray.push("Buzz");
    } else {
      myArray.push(`${i}`);
    }
  }

  return myArray;
}

//console.log(fizzbuzz(5));
//console.log(fizzbuzz(37));

// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------

// Problem - Root Sum
// Challenge Link -

function checkTree(root) {
  console.log(root[0]);

  if (root[1] + root[2] == root[0]) {
    return true;
  } else {
    return false;
  }
}

//console.log(checkTree([10, 4, 6]));

// ------------------------------------------------------------------------------------------------

// Problem - Two Sum
// Challenge Link - https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
};
