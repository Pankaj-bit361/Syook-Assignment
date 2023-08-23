

Question 1->Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
Output
Return “Perfect” if the number is perfect
if the sum of factors is greater than the input return “Abundant”
if the sum of factors is lesser than the input return “Deficient”.


soloution ->
 let n = 45

 let sum = 0
 for(let i=1; i<n; i++){
  if(n%i==0){
    sum+=i
   }
 }
 console.log(sum)

 if(sum == n){
   console.log('perfect number')
 } else if(sum > n){
   console.log('Abundant')
 } else{
   console.log('Deficient')
 }




question 2->How many trails to 1?

Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
Given a number x, return the number of steps required to reach 1.


let n = 17
let count = 0
while(n!=1){
  if(n%2==0){
    n = n/2
  } else{
    n = (3*n+1)
  }
  count++
}

console.log(count)