export function criminalCard(criminalObject) {
    return` 
        
        <div id="criminal-card">    
        <h6>${criminalObject.name}</h6>
        <li>Age: ${criminalObject.age}</li>
        <li>${criminalObject.conviction}</li>
        <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
        <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
        <button type="button" class="alibi-button" data-toggle="modal" data-target="#myModal" id="associates-${criminalObject.id}">
        Associates & Alibis</button>
     
    </div>
    `
}