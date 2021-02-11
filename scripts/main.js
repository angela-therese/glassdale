

import { CriminalList } from "./criminals/CriminalList.js";
import { officerList } from "./officers/OfficerList.js"
import { facilityList } from "./facilities/facilitiesList.js";
import { noteList } from "./notes/noteList.js"
import { witnessList } from "./witnesses/witnessList.js";
import { AssociatesList } from "./associates/associatesList.js"



import { useConvictions } from "./convictions/ConvictionProvider.js";
import { getNotes, useNotes} from "./notes/notesDataProvider.js"





//DROPDOWN MENUS
ConvictionSelect()
import { OfficerSelect } from "./officers/OfficerSelect.js"
OfficerSelect()
import { CriminalSelect } from "./notes/noteForm.js"
CriminalSelect()
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";






//DARK MODE EVENT//
const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })


