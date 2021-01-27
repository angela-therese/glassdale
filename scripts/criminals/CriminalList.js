import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalCard } from './criminal.js'

let criminalContainer = document.querySelector(".target-container")


export const CriminalList = (crimeChosen) => {
    // console.log(crimeChosen)
    getCriminals().then(() => {
        let criminals = useCriminals();
        console.log(useCriminals())
        
        let criminalHTMLString = '';

        if(crimeChosen){

            criminals = // write your filter here
      
          }

        for(let item of criminals){
            criminalHTMLString += criminalCard(item)
        }

        criminalContainer.innerHTML = `${criminalHTMLString}`
        
        
    })
   
}


document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})


