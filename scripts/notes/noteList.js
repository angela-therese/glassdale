import { noteEntry } from "./note.js";
import { getNotes, useNotes } from "./notesDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";


//INDICATES WHERE EVERYTHING WILL PRINT
let contentTarget = document.querySelector(".target-container")

export const noteList = () => {
    //11-16 WE NEED BOTH CRIMINAL DATA AND NOTES DATA TO BE ABLE TO MATCH THE ID IN THE NOTE WITH THE ID IN THE CRIMINALOBJECT
    getNotes()
    .then(getCriminals())
    .then(() => {

        let notes= useNotes();
        let criminals = useCriminals();
    //FOR EACH NOTE YOU HAVE CREATED, YOU WILL MAP THROUGH THE CRIMINALS ARRAY TO FIND THE CRIMINAL OBJECT WHOSE criminal.id MATCHES THE note.criminalId.  
        const arrayOfMatchingNotes = notes.map(note => {
       
            // Loop over criminals to FIND the criminal whose id is the same as the criminalId saved in the note; create relatedCriminal to store your result. You are doing this for every note; that is why it returns an ARRAY of results. You will have as many results as you have notes in your database.
           const relatedCriminal = criminals.find(criminal => criminal.id == note.criminalId); 
           const notesHTML = noteEntry(note, relatedCriminal)
            return notesHTML
        })

        //The array of matching notes that you created above will have its results separated by commas. .join will remove the commas for printing to the DOM. 
        const HTMLstring = arrayOfMatchingNotes.join("")

        contentTarget.innerHTML = `
        <article class="note-container">
        ${HTMLstring}
        </article>`

    })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    noteList()
     
 })







 
