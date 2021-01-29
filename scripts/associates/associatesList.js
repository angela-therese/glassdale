import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

console.log('hola')

//CREATES SPACE WHERE EVENT LISTENER WILL BE TARGETED
const associatesButton = document.querySelector("main")

//TELLS THE EVENT LISTENER WHAT TO LISTEN FOR AND WHAT TO DO NEXT
associatesButton.addEventListener("click", (clickObject) => { 
    console.log(clickObject.target.id)
    const idString = clickObject.target.id;
    const idNumber = idString.split('-').pop();
    console.log(idNumber)
    AssociatesList(idNumber)
})



let associatesContainer = document.querySelector(".associates-container")
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
                    <li>Name: ${associate.name}</li>
                    <br>
                    <li>Alibi: ${associate.alibi}<li>
                    </div>
                    `
                })
               console.log(associatesHTMLstring)
            }
         
        }
        associatesContainer.innerHTML = `
        <h4>Associates and Alibis</h4>
      <p> ${associatesHTMLstring} </P>
        
        `

    })


}
   





    // getCriminals().then(() => {
     
    // }
    
    // }
// let allCriminals = useCriminals();

// allCriminals = allCriminals.filter(currentCriminal => {
//     return currentCriminal.id === 

// )





// })

