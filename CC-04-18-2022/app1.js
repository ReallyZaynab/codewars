// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    //convert to string, split into individual digits and store them in an array
    numberAsString = n.toString.split('')
    console.log(numberAsString)
    
    //array to store reverse of array
    let reverseString = []
    for (let i=numberAsString.length-1; i>=0; i--){
        reverseString.push(+(numberAsString[i]))
        console.log (reverseString)
    }
    return reverseString
}