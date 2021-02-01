import { saveNote } from "./notesDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = `
        <fieldset class="notes-form">
        <label class="note-form-label">Date of Entry</label>
        <input class ="notes-form-flex" type="date" id="entry-date"></input>
        <label class="note-form-label">Suspect's Name</label>
        <input class="notes-form-flex" type="text" id="suspect-name"></input>
        <label class="note-form-label">Type Entry Here</label>
        <input class="notes-form-flex entry-box" type="text" id="note-text"></input>
        <button id="saveNote">Save Note</button>
        </fieldset>
    `
}


const eventHub = document.querySelector("main")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        let dateInput = document.getElementById("entry-date").value;
        let nameInput = document.getElementById("suspect-name").value;
        let textInput = document.getElementById("note-text").value;
        const newNote = {
            "date": dateInput,
            "suspectName": nameInput,
            "entryText": textInput
            // Key/value pairs here

        }
        console.log(newNote)

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})


