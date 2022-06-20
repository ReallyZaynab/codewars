// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  //if number is less than 10
  
    let arr = []
    if(n<10 && n>0){
    for(let i=1; i<=n; i++){
      arr.push(i)
    }
    console.log(arr)
    return arr.reduce((a,b)=>a+b,0)
    }
    //if number is greater than 10
    if (n>=10){
      let num = 1
      //create array of the numbers from 1 to n
      for(let i=0; i<=n-1; i++){
        arr.push(num++)
      }

      // convert elements in array to string
      let arrOfStrings = arr.map(elem => elem.toString())

      let arrJointString =''

      for(let i=0; i<=arrOfStrings.length-1; i++){
        arrJointString += arrOfStrings[i]
        
      }
      console.log(arrJointString)
        let arrOfOnes = arrJointString.split('')
        let intArrOfOnes = arrOfOnes.map(elem=>parseInt(elem))

        return intArrOfOnes.reduce((a,b)=>a+b,0)
    }
  }

console.log (twistedSum(15))