// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

//  Note that you can receive floats as well.
// parameters: a sequence of numbers in an array represented as strings. Numbers can be floats
// return: an array of the strings converted to numbers 
// example: ie:["1", "2", "3"] to [1, 2, 3]
// pseudocode: Use map and convert to number by multiplying by 1, then return

function toNumberArray(stringarray){
    return stringarray.map(x => 1*x)
}