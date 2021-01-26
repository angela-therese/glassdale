import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalCard } from './criminal.js'

let criminalContainer = document.querySelector("#criminal-container")

export const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();

        let criminalHTMLString = '';

        for(let item of criminals){
            criminalHTMLString += criminalCard(item)
        }

        criminalContainer.innerHTML = `${criminalHTMLString}`

        // Now that you have the data, what component should be rendered?
    })
}




