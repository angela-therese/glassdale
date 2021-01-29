export function criminalCard(criminalObject) {
    return` 
        
        <div id="criminal-card">    
        <h3>${criminalObject.name}</h3>
        <li>Age: ${criminalObject.age}</li>
        <li>${criminalObject.conviction}</li>
        <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
        <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
        <button id="associates-${criminalObject.id}"class="alibi-button">Associate Alibis</button>
     
    </div>
    `
}