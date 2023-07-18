//onst Filesystem = require('fs')
/*
//write the file
Filesystem.writeFileSync('notes.txt','created by node js') 
*/
//Append the file 
//Filesystem.appendFileSync('notes.txt','    \ni have append the file')
/*
const name = require('./utils.js')
console.log(name)
*/

/*
const name ='himanshu'
console.log(name)*/
/*
const add =require('./utils.js')
const sum= add(3,7)
console.log(sum)
*/

//CHALLANGE 2
/*
const getNotes = require('./utils.js')
const b= getNotes('hello')
console.log(b)
*/
// CHECKING EMAIL VALIDATOR 
/*
const validator = require('validator')
console.log(validator.isEmail('h.com'))
*/
//CHECKING URL VALIDATOR
/*
const validator =require('validator')
console.log(validator.isURL('htnodejs/'))
*/

//CHALK 
/*
const chalk = require('chalk')
console.log(chalk.red('Hello '))
*/

//  GLOBAL NPM MODULES AND NODEMON

//GETTING INPUT FROM USER 
/*
const chalk = require('chalk')
console.log(chalk.red('Hello '))

const command = process.argv[2]
console.log(process.argv)
if(command==='add'){
    console.log('adding notes')
}
else if(command=== 'remove'){
    console.log('removing')
}
*/

//YARGS
/*
const chalk = require('chalk')
const yargs = require('yargs')
console.log(chalk.red('Hello '))


console.log(process.argv)

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'note title'
        }
    },
    handler:function(argv){
        console.log('Adding note',argv)
    }
})

//  remove read list 
yargs.command({
    command:'remove',
    describe:'used for removing the note',
    handler:function(){
        console.log('removing notes',argv)
    }
})

yargs.command({
    command:'read',
    describe:'used for reading the note',
    handler:function(){
        console.log('reading the notes')
    }
})

yargs.command({
    command:'list',
    describe:'used to see the list',
    handler:function(){
        console.log('list of the notes')
    }
})
console.log(yargs.argv)

*/







