import { saveNote } from "./notesDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"


export const CriminalSelect = () => {
    getCriminals().then(() => {
    
        const criminals = useCriminals()
        console.log(criminals)
        NoteForm(criminals)
        
    })
  
}

const contentTarget = document.querySelector(".noteFormContainer")
//RENDERING A DROPDOWN WITH THE CRIMINALS' NAMES

const NoteForm = criminalCollection => {

    contentTarget.innerHTML = `
    
    <fieldset class="notes-form">
    <h6>Enter notes here.</h6>
    <select class="dropdown" id="criminal-select">
    <option value="0">Please select a suspect.</option>
   ${criminalCollection.map((currentCriminal)=> {
       
            const criminalName = currentCriminal.name
            return `<option value="${currentCriminal.id}">${criminalName}</option>`
    })}
</select>
    
    <input class ="notes-form-flex" type="date" id="entry-date"></input>
    <input class="notes-form-flex" type="text" placeholder="Type entry here." id="note-text"></input>
    <button class="save-button" id="saveNote">Save Note</button>
    </fieldset>
   
   `
}


const eventHub = document.querySelector("main")


eventHub.addEventListener("change", (changeEvent) => {

        if(changeEvent.target.id === "criminal-select"){
            const selectedCriminalId = changeEvent.target.value
            // console.log(selectedCriminal)
            eventHub.addEventListener("click", clickEvent => {
                    if (clickEvent.target.id === "saveNote") {
                
                        let dateInput = document.getElementById("entry-date").value;
                        let textInput = document.getElementById("note-text").value;
                        const newNote = {
                            "date": dateInput,
                            "text": textInput,
                            "criminalId": selectedCriminalId
                            }

                        saveNote(newNote)
                        // .then(noteList())
                        
        }
       
    })
    

        }
})
