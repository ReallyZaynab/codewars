// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//parameters: 2 arrays
//return: an array containing what is unique to the first array
//example: arrayDiff([1,2,2,2,3],[2]) == [1,3]
//pseudocode: compare each element in second array with first array using a loop and if it is in first array remove it

function arrayDiff(a, b){
    let i
    let j

    for(i=0; i<b.length; i++){
        for(j=0; j<a.length; j++){
            while(b[i]===a[j]){
               a.splice(j,1)
            }
        }
    }
    return a;
}