import { noteEntry } from "./note.js";
import { getNotes, saveNote, useNotes } from "./notesDataProvider.js";


export const noteList = () => {

    let notesContainer = document.querySelector(".target-container")
    let notesHTMLString ='';

    getNotes().then(() => {

        let notesArray = useNotes();
        console.log(notesArray)
       //could refactor using .map
        for(let singleNote of notesArray) {
            notesHTMLString += noteEntry(singleNote)
        };

        notesContainer.innerHTML = `
        <section class="note-container"> 
            ${notesHTMLString}
        </section>
        `

    })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    noteList()
     
 })

