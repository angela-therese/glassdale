export function noteEntry(formObject){

    return `
    <div class="notes-card">
    <p><b>ID:</b> ${formObject.criminalId}</p>    
    <p><b>Date:</b> ${formObject.date}</p>
    <p><b>Entry:</b> ${formObject.text}</p>
    </div>
    `

}

// <div class="note-div">
//     <li class="note-div-flex"><strong>${formObject.date}</strong></li>
//     <li class="note-div-flex">${formObject.suspectName}</li>
//     <li class="note-div-flex">${formObject.entryText}</li>
//    </div>