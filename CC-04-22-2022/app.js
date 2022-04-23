// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sumArr1;
    sumArr1 = arr1.reduce(x,y => {return x + y},0)
    let sumArr2;
    sumArr2 = arr2.reduce(x,y => {return x + y},0)
    let total;
    total = sumArr1 + sumArr2
    return total;
  }

  array1 = [3,5,2,5]
  array2 = [94,83.92,93,93]

  console.log(array1,array2)