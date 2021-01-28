import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalCard } from './criminal.js'

let criminalContainer = document.querySelector(".target-container")


export const CriminalList = (crimeChosen) => {
    
    getCriminals().then(() => {
        let allCriminals = useCriminals();
        

        if(crimeChosen){

            allCriminals = allCriminals.filter(currentCriminalInLoop => {

                return currentCriminalInLoop.conviction === crimeChosen
              
            })
      
        
       
        
        
        }

        let criminalHTMLString = '';
        for(const item of allCriminals){
            criminalHTMLString += criminalCard(item)
        }

        criminalContainer.innerHTML = `${criminalHTMLString}`
    })
   
}


document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
    
})


