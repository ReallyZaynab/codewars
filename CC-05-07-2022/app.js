// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 

function minSum(arr) {
    // your code here
     arr.sort((a,b)=>a-b,0)
        let product=null
        let sum=null
        do{
            product = arr.shift()*arr.pop()
            sum += product
        }while(arr.length != 0)
      return sum;
  }
  console.log(minSum([2,5,3,4]))