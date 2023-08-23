# Number Functions

## Question 1 - Perfect Number Check

Write a function that determines whether a given number is perfect, abundant, or deficient. A number is considered perfect if the sum of its factors (excluding the number itself) is equal to the number.

### Output

- Return "Perfect" if the number is perfect.
- If the sum of factors is greater than the input, return "Abundant".
- If the sum of factors is less than the input, return "Deficient".

**Solution:**

```javascript
function checkNumberType(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum === n) {
    return "Perfect";
  } else if (sum > n) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}

const number = 45;
console.log(checkNumberType(number)); 




## Question-2 How many trails to 1 ?

-Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat -the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
-Given a number x, return the number of steps required to reach 1.

**Solution:**

```javascript

function countStepsToReachOne(n) {
  let count = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    count++;
  }
  return count;
}

const numberToReachOne = 17;
console.log(countStepsToReachOne(numberToReachOne)); // Output: 12