// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.
//P: positive integer that is not 0, limit that is higher than the base
//R: a list of multiples of the integer such that the list starts at the integer and ends at the limit
//If limit is a multiple of integer then the limit is included as well.
//E: (2,6) => [2, 4, 6]
//P: Use a while loop with condition being return value is less than or equal to limit

function multiples(int,limit){
    const result = []
    for(i=int; i<=limit; i+=int){
        result.push(i)
    }
    return result;
}

console.log(multiples(2,6))