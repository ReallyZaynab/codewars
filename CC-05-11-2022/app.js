// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names){
    //map function to act on each element
    //convert each element to lower case
    //change the first letter of each element to uppercase
    //return array

    return names.map(a=>a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
    //const arr = arry.map(b=>b.charAt(0).toUpperCase()+b.slice(1))
    //return arry
}
    
console.log(capMe(['jo', 'nelson','jurie']))
