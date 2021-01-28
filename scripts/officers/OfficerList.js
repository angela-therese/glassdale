import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getOfficers, useOfficers } from './OfficerProvider.js'
import { officerCard } from './Officer.js'


let officerContainer = document.querySelector(".target-container")

let criminalArrestedByO = document.querySelector(".target-container")



export const officerList = (officerChosen) => {
    
  
    
    getOfficers().then(() => {
        let allOfficers = useOfficers();


    //create a conditional statement so that if a parameter of officerChosen is passed through, it will filter into a new array all of the criminals who were arrested by that officer
   
    if(officerChosen){
    
        getCriminals().then(() => {
            let allCriminals = useCriminals()

        allCriminals = allCriminals.filter(currentCriminalInLoop => {
            return currentCriminalInLoop.arrestingOfficer === officerChosen
        })

        let criminalArrestedByOfficerHTML = ''

        for(const current of allCriminals){
            criminalArrestedByOfficerHTML += `
            <li>${current.name}</li>
            `
        }
     
        criminalArrestedByO.innerHTML = `
        <h3> Criminals Arrested by ${officerChosen}:</h3>
        ${criminalArrestedByOfficerHTML}
        `
    })

}
        let officerHTMLString = '';

        for(let currentOfficer of allOfficers){
            officerHTMLString += officerCard(currentOfficer)
        }

        officerContainer.innerHTML = `${officerHTMLString}`

        // Now that you have the data, what component should be rendered?
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
})