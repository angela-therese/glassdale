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


let associatesContainer = document.querySelector(".associates-container")
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
                    <h4>Criminal: ${singleCriminal.name}</h4>
                    <p><li>Associate: ${associate.name}</li>
                    <br>
                    <li>Alibi: ${associate.alibi}<li>
                    </div>
                    `
                })
                
                name = singleCriminal.name
                console.log(name)
                let newWin = window.openlet newWin = window.open("about:blank", "hello", "width=200,height=200");
            }
            
        }
        associatesContainer.innerHTML = `
        
       ${associatesHTMLstring} 
       
        
        `

    })
    

}
   
