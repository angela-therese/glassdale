import { officerList } from "./OfficerList.js"
import { getOfficers, useOfficers } from "./OfficerProvider.js";





const dropdownOfficersTarget = document.querySelector("#filters-officers")

export const OfficerSelect = () => {
    getOfficers().then(() => {
    
        const officers = useOfficers()
        renderOfficerDropdownMenu(officers)
        
    })
    
};



const renderOfficerDropdownMenu = officerCollection => {

    dropdownOfficersTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer.</option>
       ${officerCollection.map((currentOfficerInLoop)=> {
                const officerName = currentOfficerInLoop.name
                return `<option>${officerName}</option>`
        })}
    </select>
   `
}


const eventHub = document.querySelector("main")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "filters-officers") {
     
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        console.log(changeEvent.target.value)
        
        officerList(selectedOfficer)

    }
})