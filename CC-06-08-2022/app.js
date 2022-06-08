// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    arr1 = str.split('')
    console.log(arr1)
    arr2 = ending.split('')
    console.log(arr2)
    i = arr2.length
    console.log(i)
    arr1.slice(i) === arr2 ? true: false
}