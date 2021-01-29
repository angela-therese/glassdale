

import { CriminalList } from "./criminals/CriminalList.js";
// CriminalList()
import { officerList } from "./officers/OfficerList.js"
// officerList()
import { facilityList } from "./facilities/facilitiesList.js";
// facilityList()
import { useConvictions } from "./convictions/ConvictionProvider.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
ConvictionSelect()
import { OfficerSelect } from "./officers/OfficerSelect.js"
OfficerSelect()
import { witnessList } from "./witnesses/witnessList.js";
//witnessList() 
import { AssociatesList } from "./associates/associatesList.js"
// AssociatesList()







//DARK MODE EVENT//
const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })


