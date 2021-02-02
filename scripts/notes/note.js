export function noteEntry(formObject){

    return `
    <tr>
        <td class="table-data">${formObject.date}</td>
        <td class="table-data">${formObject.suspectName}</td>
        <td class="table-data">${formObject.entryText}
    </tr>

    

    `

}

// <div class="note-div">
//     <li class="note-div-flex"><strong>${formObject.date}</strong></li>
//     <li class="note-div-flex">${formObject.suspectName}</li>
//     <li class="note-div-flex">${formObject.entryText}</li>
//    </div>