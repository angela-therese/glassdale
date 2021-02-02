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
        <table class="notes-table">
            <tr>
            <th class="table-category">Date</th>
            <th class="table-category">Suspect</th>
            <th class="table-category-notes">Notes</th>
            </tr>
        
            ${notesHTMLString}
        `


    })
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    noteList()
     
 })

 // <br>
//  ${notesHTMLString}