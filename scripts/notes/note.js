export function noteEntry(formObject){
    return `
    
   <div class="note-div">
    <li class="note-div-flex"><strong>${formObject.date}</strong>
    <li class="note-div-flex">${formObject.suspectName}</li>
    <li class="note-div-flex">${formObject.entryText}</li>
   </div>
    `

}