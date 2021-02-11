import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { saveNote } from "../notes/notesDataProvider.js";
import { NoteList } from "../notes/noteList.js";


// //DESIGNATES LISTENING SPACE FOR CLICK EVENT (CLICKING SAVE BUTTON)
// const eventHub = document.querySelector("main")

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveNote") {

//         // let criminalID = 
//         let dateInput = document.getElementById("entry-date").value;
//         // let nameInput = document.getElementById("suspect-name").value;
//         let textInput = document.getElementById("note-text").value;
//         const newNote = {
//             "id": '',
//             "date": dateInput,
//             "entryText": textInput
//             // Key/value pairs here

//         }
//         console.log(newNote)

//         // Change API state and application state
//         saveNote(newNote)
//         .then(NoteList) // Refresh your list of notes once you've saved your new one
//     }
// })






// //EVENT LISTENER TO RESPOND TO A CHANGE IN THE DROPDOWN

// eventHub.addEventListener("change", (changeEvent) => {
    

//     if(changeEvent.target.id === "criminal-select"){
//         const selectedCriminal = changeEvent.target.value
//         console.log(selectedCriminal)


//     }
        
// })

