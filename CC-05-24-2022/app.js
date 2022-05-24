// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .

//Parameters: first parameter is an object with ints or an array with ints. Second parameter is an integer.  
//Return: A product of the largest ints. Number of largest ints is taken from the second parameter
//Example: ({8, 10 , 9, 7}, 3) ==>  return (720)
//Pseudocode: first convert an object to array if it is an object. Then order using sort in descending order. 
//Then select the numbers based on second parameter using slice. 
//use reduce to return a product of all the numbers

function maxProduct(numbers, size){
    //your code here
    if (typeof(numbers) === Object){
        objArr = Object.values(numbers)
        objArr.sort((a,b)=>b-a)
        return objArr.slice(0,size).reduce((acc,curr)=>acc*curr,1)
    }else {
        numbers.sort((a,b)=>b-a) 
        return numbers.slice(0,size).reduce((acc,curr)=>acc*curr,1)
    }
  }