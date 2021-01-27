import { getOfficers, useOfficers } from './OfficerProvider.js'
import { officerCard } from './Officer.js'


let officerContainer = document.querySelector(".target-container")


export const officerList = () => {
    getOfficers().then(() => {
        let officers = useOfficers();

        let officerHTMLString = '';

        for(let item of officers){
            officerHTMLString += officerCard(item)
        }

        officerContainer.innerHTML = `${officerHTMLString}`

        // Now that you have the data, what component should be rendered?
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
})