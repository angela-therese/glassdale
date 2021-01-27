import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalCard } from './criminal.js'

let criminalContainer = document.querySelector(".target-container")


export const CriminalList = (crimeChosen) => {
    // console.log(crimeChosen)
    getCriminals().then(() => {
        let allCriminals = useCriminals();
        
        
        let criminalHTMLString = '';

        // if(crimeChosen){

            let criminals = allCriminals.filter(currentCriminalInLoop => {

                if(currentCriminalInLoop.conviction === crimeChosen){
                    return true
                }
                return false
            })
      
        

        for(const item of criminals){
            criminalHTMLString += criminalCard(item)
        }

        criminalContainer.innerHTML = `${criminalHTMLString}`
        
        
    })
   
}


document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})


