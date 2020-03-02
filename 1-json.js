const fs = require('fs')
/*
const book = { 
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) 



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

*/



const nameJSON = fs.readFileSync('1-json.json')
const dataJSON = nameJSON.toString()
const data = JSON.parse(dataJSON)
data.name = "tuc"
data.age = 25
const tucJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',tucJSON)