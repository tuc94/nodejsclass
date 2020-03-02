const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote  = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
    saveNotes(notes)
    console.log('New note added!')
    } else{
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e){
        return [];
    }
}

const removeNotes = (title) => {
    
    const notes = loadNotes()
    const updatednotes = notes.filter((note) => note.title !== title)

    saveNotes(updatednotes);
    
    if (updatednotes.length !== notes.length) {
        console.log(chalk.green('Note Removed!'))  
        saveNotes(updatednotes);
    } else{
    console.log(chalk.red('No Note Removed!'))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    for(var i = 0; notes.length > i; i++){
        console.log(chalk.blue.inverse(notes[i].title))  
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)

    if (readNote) {
        console.log("Reading Note!")
        console.log(chalk.blue.inverse(readNote.title)) 
        console.log(readNote.body)
        } else{
        console.log('No Note to Read!')
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}