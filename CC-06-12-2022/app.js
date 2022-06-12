function findEvenIndex(arr){
    if(arr.slice(-(arr.length-1)).reduce((c,d)=>c+d,0)===0) return 0

    if(arr.slice(0,arr.length-1).reduce((c,d)=>c+d,0)===0) return arr.length-1

    for(let i=1; i<=arr.length; i++){
        if ((arr.slice(0,i).reduce((c,d)=>c+d))===(arr.slice(-(arr.length-i-1)).reduce((c,d)=>c+d,0))){
            return i
        } 
    } 
    for(let i=1; i<=arr.length; i++){
        if ((arr.slice(0,i).reduce((c,d)=>c+d))!=(arr.slice(-(arr.length-i-1)).reduce((c,d)=>c+d,0))){
        return -1
        }
    }
}

findEvenIndex([1,2,3,4,3,2,1])