// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr,pos){
    return arr.sort((a,b)=>a>b?1:-1)[pos-1]
}