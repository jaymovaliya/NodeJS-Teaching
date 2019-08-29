const fs  = require('fs') 
const data = require('./notes.json')
const method = process.argv[2]
debugger;

switch(method){
    case 'list':
        {
            console.log("Listing Notes....")
            data.forEach(notes=> console.log(notes))
            break;
        }
    case 'add':
        {
            console.log("Adding Notes....")
            const noteTitle = process.argv[3].split("=")[1]
            const description = process.argv[4].split("=")[1]
            const addedObject = {
                id:data.length+1,
                title:noteTitle,
                description:description
            }
            data.push(addedObject)
            fs.writeFileSync('notes.json',JSON.stringify(data))
            break;
        }
    case 'delete':
        {
            console.log("deleting Notes....")
            const noteKey = process.argv[3].split("=")[0]
            let filteredData
            if(noteKey == '--title'){
                const title = process.argv[3].split("=")[1]
                filteredData = data.filter(note=> note.title !== title)    
            }
            else{
                const id = process.argv[3].split("=")[1]
                filteredData = data.filter(note=> note.id !== parseInt(id))
            }
            fs.writeFileSync('notes.json',JSON.stringify(filteredData))
            break;
        }
    case 'update':
        {
            console.log("updating Notes....")
            const noteTitle = process.argv[3].split("=")[1]
            const description = process.argv[4].split("=")[1]
            const updatedData = data.map(note=>{
                if(note.title === noteTitle){
                    note.description = description
                }
                return note
            })
            fs.writeFileSync('notes.json',JSON.stringify(updatedData))
            break;
        }
    default:{
        console.log("No Method Found...")
        break;
    }
}




