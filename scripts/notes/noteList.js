import { noteEntry } from "./note.js";
import { getNotes, saveNote, useNotes } from "./notesDataProvider.js";


export const noteList = () => {

    let notesContainer = document.querySelector(".target-container")
    let notesHTMLString ='';

    getNotes().then(() => {

        let notesArray = useNotes();
        console.log(notesArray)
       
        for(let singleNote of notesArray) {
            notesHTMLString += noteEntry(singleNote)
        };

        notesContainer.innerHTML = `
        <br>
        ${notesHTMLString}
        `


    })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    noteList()
     
 })