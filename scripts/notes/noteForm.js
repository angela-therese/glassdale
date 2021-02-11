import { saveNote } from "./notesDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { noteList } from "./noteList.js"


export const CriminalSelect = () => {
    getCriminals().then(() => {
    
        const criminals = useCriminals()
        console.log(criminals)
        NoteForm(criminals)
        
    })
  
}

const contentTarget = document.querySelector(".noteFormContainer")
//RENDERING A DROPDOWN WITH THE CRIMINALS' NAMES
//LINE 32- ASSIGNING THE VALUE OF THE CRIMINAL OBJECT ID (FOUND IN THE CRIMINALS ARRAY/IMMUTABLE) TO THE OPTION VALUE. THIS MAKES IT POSSIBLE TO CONNECT TO THE SUSPECT'S DATA WHEN THEY ARE CHOSEN IN THE DROPDOWN

const NoteForm = criminalCollection => {

    contentTarget.innerHTML = `
    
    <fieldset class="notes-form">
    <h6>Enter notes here.</h6>
    <select class="dropdown" id="criminal-select">
    <option value="0">Please select a suspect.</option>
   ${criminalCollection.map((currentCriminal)=> {
       
            const criminalName = currentCriminal.name
            return `<option id="criminal-select" value="${currentCriminal.id}">${criminalName}</option>`
    })}
</select>
    <input class ="notes-form-flex" type="date" id="entry-date"></input>
    <input class="notes-form-flex" type="text" placeholder="Type entry here." id="note-text"></input>
    <button class="save-button" id="saveNote">Save Note</button>
    </fieldset>
   
   `
}


 
//52: ADDS AN EVENT LISTENER FOR THE SAVE BUTTON, TARGETING ID OF "saveNote" WHICH IS ASSIGNED TO THE BUTTON IN LINE 38
//55-62: CREATES STRUCTURE FOR NEW NOTE THAT WILL BE SAVED INTO THE JSON DB. IT TAKES THE INFORMATION IN THE DATE INPUT, THE INFORMATION IN THE TEXT INPUT, AND THE ID YOU DECLARED IN LINE 56. 
//64: CALLS SAVENOTE FUNCTION ON THE NEW NOTE JUST CREATED (SAVENOTE IS ON THE DATAPROVIDER.JS)
//71: FINALLY, RUNS NOTE LIST TO PRINT THE NOTES, INCLUDING THE NEW NOTE, TO THE DOM

const eventHub = document.querySelector("main")

eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
                
         let dateInput = document.getElementById("entry-date").value;
         let textInput = document.getElementById("note-text").value;
         let idInput = document.getElementById("criminal-select").value
            const newNote = {
                            "date": dateInput,
                            "text": textInput,
                            "criminalId": idInput
                            }

                        saveNote(newNote)
                        .then(noteList())
                        
        }
       
    })
    

   