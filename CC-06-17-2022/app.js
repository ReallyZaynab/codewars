// Check if given chord is minor or major.

// Rules:

// Basic minor/major chord have three elements.

// Chord is minor when interval between first and second element equals 3 and between second and third -> 4.

// Chord is major when interval between first and second element equals 4 and between second and third -> 3.

// In minor/major chord interval between first and third element equals... 7.

// There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

// notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

// Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

// Input: String of notes separated by whitespace, e. g. 'A C# E'

// Output: String message: 'Minor', 'Major' or 'Not a chord'.


//P: a string of 3 notes separated by white space
//R: output message, whether the input parameter is a major, minor or not a chord
//E: Input String of notes separated by whitespace, e. g. 'A C# E' Output: String message: 'Minor', 'Major' or 'Not a chord'
//P: Check the difference between 1st and 2nd element. If it is 4, check the difference between 2nd and 3rd element. If it is 3 then it is a major chord. 

// function minorOrMajor(chord){

//     //create a getInterval method that calculates the interval between 2 notes
//     const getInterval = (note1, note2) => {
//       const note1Index = notes.findIndex((note) => note.includes(note1)); //if element in notes array includes note1 assign the index of that element to note1Index
//       const note2Index = notes.findIndex((note) => note.includes(note2)); //if element in notes array includes note2 assign the index of that element to note2Index
//       const interval = note2Index - note1Index; //calculate interval between note1 and note2
//       const isNegative = interval < 0; //store negative intervals in isNegative
//       if (isNegative) return 12 + interval;//add 12 to negative intervals
//       return interval;
//     };
  
//     const notes = ["C",["C#", "Db"],"D",["D#", "Eb"],"E","F",["F#", "Gb"],"G",["G#", "Ab"],"A",["A#", "Bb"],"B",];
  
//     const chordNotes = chord.split(" ");
//     const [firstNote, secondNote, thirdNote] = chordNotes; //assign a name to each element in the array chordNotes
  
//     const firstInterval = getInterval(firstNote, secondNote); //calculate first interval and store in variable
//     const secondInterval = getInterval(secondNote, thirdNote);// calculate second interval and store in variable
  
//     const isTriad = chordNotes.length === 3; //check if there are 3 elements in the argument and store the boolean in a variable
//     const isMinor = firstInterval === 3 && secondInterval === 4 && isTriad; //check if it is a minor chord and store the Boolean in a variable
//     const isMajor = firstInterval === 4 && secondInterval === 3 && isTriad;// check if it is a major chord and store the boolean in a variable
  
//     if (isMinor) return "Minor"; // output 
//     return isMajor ? "Major" : "Not a chord";
//   }

function minorOrMajor(chord){
    //create a function that calculates the difference between 2 notes
    const calculateInterval = (note1,note2) => { 
        const note1index = notes.findIndex((note)=>note.includes(note1))
        const note2index = notes.findIndex((note)=>note.includes(note2))
        const interval = note2index-note1index
        if (interval<0){
            return 12 + interval
        }
        return interval
        }
    
    //create an array containing the notes
    const notes = ["C",["C#", "Db"],"D",["D#", "Eb"],"E","F",["F#", "Gb"],"G",["G#", "Ab"],"A",["A#", "Bb"],"B",]
     
    //const chordNotes
    const chordNotes = chord.split(' ')
    const [firstNote, secondNote, thirdNote] = chordNotes

    const isTriad = chordNotes.length ===3
    const firstInterval = calculateInterval(firstNote,secondNote)
    const secondInterval = calculateInterval(secondNote,thirdNote)
    if (isTriad) {if(firstInterval ===3 && secondInterval===4){
        return "Minor"
    }else if (firstInterval === 4 && secondInterval === 3){
        return "Major"
    }else{
        return "not a chord"
    }
}
 
}