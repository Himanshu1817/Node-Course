/*const book ={
    title:"Ego is the enemy",
    author:"ryan holiday"
}

const bookJSON = JSON.stringify(book)
//OBJECT TO STRING
console.log(bookJSON)

const parseData=JSON.parse(bookJSON)
//string to object

console.log(parseData.author)
*/

//CREATING JSON FILE
/*
const fs =require('fs')
const book ={
    title:"Ego is the enemy",
    author:"ryan holiday"
}

const bookJSON = JSON.stringify(book)
//making the new file and adding the string to it
fs.writeFileSync('1-json.json',bookJSON)
*/
const fs =require('fs')
/*
const dataBuffer = fs.readFileSync('1-json.json')
//getting data in binary form
const dataJSON = dataBuffer.toString()
//converting it into the string
const data = JSON.parse(dataJSON)
//passing the string into the javascript standard object
console.log(data.title)
//we are getting the title
*/

//CHALLANGE
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name="rahul"
user.age=34

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)







