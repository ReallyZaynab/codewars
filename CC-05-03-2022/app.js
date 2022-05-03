// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

function largestPairSum (numbers) {
    //TODO: Write your Code here
    //order in descending order
    let arry = numbers.sort((a,b)=>a-b)
    num1 = arry.pop()
    num2 = arry.pop()
    return num1+num2
  }

  console.log(largestPairSum( [10, 14, 2, 23, 19]))