import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { saveNote } from "../notes/notesDataProvider.js";

// export const CriminalSelect = () => {
//     getCriminals().then(() => {
    
//         const criminals = useCriminals()
//         console.log(criminals)
//         renderCriminalDropdown(criminals)
        
//     })
  
// }

// const contentTarget = document.querySelector(".noteFormContainer")
// //RENDERING A DROPDOWN WITH THE CRIMINALS' NAMES

// const renderCriminalDropdown = criminalCollection => {

//     contentTarget.innerHTML = `
    
//     <fieldset class="notes-form">
//     <h6>Enter notes here.</h6>
//     <select class="dropdown" id="criminal-select">
//     <option value="0">Please select a suspect.</option>
//    ${criminalCollection.map((currentCriminal)=> {
//             const criminalName = currentCriminal.name
//             return `<option value="${currentCriminal.id}">${criminalName}</option>`
//     })}
// </select>
    
//     <input class ="notes-form-flex" type="date" id="entry-date"></input>
//     <input class="notes-form-flex" type="text" placeholder="Type entry here." id="note-text"></input>
//     <button class="save-button" id="saveNote">Save Note</button>
//     </fieldset>
   
//    `
// }


const eventHub = document.querySelector("main")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // let criminalID = 
        let dateInput = document.getElementById("entry-date").value;
        // let nameInput = document.getElementById("suspect-name").value;
        let textInput = document.getElementById("note-text").value;
        const newNote = {
            "id": '',
            "date": dateInput,
            "entryText": textInput
            // Key/value pairs here

        }
        console.log(newNote)

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})






//EVENT LISTENER TO RESPOND TO A CHANGE IN THE DROPDOWN

// const eventHub = document.querySelector("main")

eventHub.addEventListener("change", (changeEvent) => {
    

    if(changeEvent.target.id === "criminal-select"){
        const selectedCriminal = changeEvent.target.value
        console.log(selectedCriminal)


    }
        
    //     const selectedCrime = eventObject.target.value;
    //     // Your code goes here!
    //        /*
    //        - When we select a crime, we need to filter the criminals in CriminalList.


    //     - Start by importing the CriminalList component at the top of this file.
    //     - Then call CriminalList, and pass in information about the crime that was chosen
    //     */
    //    CriminalList(selectedCrime)
    // }
})

