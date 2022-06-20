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