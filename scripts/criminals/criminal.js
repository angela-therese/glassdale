export function criminalCard(criminalObject) {
    return`
        <div class="criminal-card">
        <h3>${criminalObject.name}</h3>
        <li>Age: ${criminalObject.age}</li>
        <li>Conviction: ${criminalObject.conviction}</li>
        <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
        <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}
        </div>
    `
}