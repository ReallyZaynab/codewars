// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    
    //convert string to array with each word a separate element in array. 
    let arr1 = []
    arr1 = this.split(' ')
    let arr2 = []
    
    //convert first letter to uppercase
    for(let i = 0; i < arr1.length; i++){
        arr2.push = arr1[i].substr(0,1).toUpperCase()
    }

    //join elements in array to a string
    return arr2.join(' ')
  };

  console.log("How can mirrors be real if our eyes aren't real".toJadenCase())