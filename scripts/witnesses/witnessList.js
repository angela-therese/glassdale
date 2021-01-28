import { getWitnesses, useWitnesses } from "./witnessProvider.js";
import { witnessNotesCard } from "./witness.js";

let witnessContainer = document.querySelector(".target-container")

export const witnessList = () => {

    getWitnesses().then(() => {

        let witnessArray = useWitnesses(); 
       console.log(witnessArray)
        

    let witnessHTMLString = '';

    for(let singleWit of witnessArray) {
        witnessHTMLString += witnessNotesCard(singleWit)
    }; 

    witnessContainer.innerHTML = `
    <br>
    ${witnessHTMLString}

    `
 
})

}




document.querySelector("#witness-button").addEventListener("click", () => {
    witnessList()
     
 })
