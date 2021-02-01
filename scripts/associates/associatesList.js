import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"



//CREATES SPACE WHERE EVENT LISTENER WILL BE ACTIVE
const associatesButton = document.querySelector("main")


//TELLS THE EVENT LISTENER WHAT TO LISTEN FOR AND WHAT TO DO NEXT
associatesButton.addEventListener("click", (clickObject) => { 
    console.log(clickObject.target.id)
    const idString = clickObject.target.id;
    const idNumber = idString.split('-').pop();
    console.log(idNumber)
    AssociatesList(idNumber)
})

let associatesContainer = document.querySelector(".modal-body")

// let associatesContainer = document.querySelector(".target-container")
let name = ''

export const AssociatesList = (idNumber) => {

    getCriminals().then(() =>{
        let allCriminals = useCriminals();
       

        let associatesHTMLstring =''
        
        for(const singleCriminal of allCriminals){
            if(singleCriminal.id == idNumber){
                console.log(singleCriminal.id, idNumber)
                let knownAssociates = singleCriminal.known_associates;
                knownAssociates.forEach(associate => {

                    associatesHTMLstring += `
                    <div class="associate-div">
                    <ul class="alibis-list">
                    <li class="alibis-list-items">${associate.name}/${associate.alibi}</li>
                    <br>
                    </div>
                    `
                })
                
                name = singleCriminal.name
                console.log(name)
              
            }
            
        }
        associatesContainer.innerHTML = `
        <h5 class="modal-criminal-title">${name}'s Associates/Alibis</h5>
       ${associatesHTMLstring} 
       
    
       
        
        `

    })
    

}
   
