export function witnessNotesCard(witnessObject) {

    return `
    <div class="witness-card">
    <li> ${witnessObject.name}</li>
    <li> Witness Statement: "${witnessObject.statements}"</li>
    <br>
    </div>
    
    `


}








// export function criminalCard(criminalObject) {
//     return` 
        
//         <div id="criminal-card">    
//         <h3>${criminalObject.name}</h3>
//         <li>Age: ${criminalObject.age}</li>
//         <li>Conviction: ${criminalObject.conviction}</li>
//         <li>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
//         <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}
     
//     </div>
//     `
// }