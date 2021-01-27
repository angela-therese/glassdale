
import { CriminalList } from "../criminals/CriminalList.js"
CriminalList()
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
getCriminals()
console.log(useCriminals())
import { useConvictions, getConvictions } from "./ConvictionProvider.js"


const contentTarget = document.querySelector("#filters-crime");

export const ConvictionSelect = () => {
getConvictions().then(() => {

    const convictions = useConvictions()
    console.log(convictions)
    render(convictions)
    
})


};

const render = convictionsCollection => {
  
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime.</option>
            ${convictionsCollection.map((currentCrimeInLoop)=> {
                    const nameOfCrime = currentCrimeInLoop.name
                    return `<option>${nameOfCrime}</option>`
            })}
        </select>
       `
    }


// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("main")

eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the main container")
    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)
console.log(eventObject)
  

    if(eventObject.target.id === "filters-crime"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        const selectedCrime = eventObject.target.value;
        // Your code goes here!
           /*
           - When we select a crime, we need to filter the criminals in CriminalList.


        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
       CriminalList(selectedCrime)
    }
})

 
