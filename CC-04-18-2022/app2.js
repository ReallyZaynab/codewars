// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    
    const sumWithInitial = marks.reduce((previousValue, currentValue) => {return previousValue + currentValue},0);
    
    let average = math.floor(sumWithInitial/marks.length)
    return average;
}

let arr = [34,235,89,34,43]

console.log(getAverage(arr))
