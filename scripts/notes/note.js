export function noteEntry(noteObject, criminalObject){

    return `
    <section class="notes-card">
        <p><b>Suspect:</b> ${criminalObject.name}</p>
        <p><b>Note: </b>${noteObject.text}</p>
    </section>
`

}


