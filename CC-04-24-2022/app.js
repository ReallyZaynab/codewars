// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5

function arrayMadness(a, b) {
    if (a.map(x => x**2).reduce((a,b)=>a+b,0)>b.map(x => x**3).reduce((a,b)=>a+b,1)){
      return true
    }else {
      return false
    }
   
 }
 