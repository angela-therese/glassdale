import { getFacilities, useFacilities } from './facilitiesProvider.js'
import { facilityCard } from './facilities.js'


let facilityContainer = document.querySelector(".target-container")


export const facilityList = () => {
    getFacilities().then(() => {
        let facilities = useFacilities();

        let facilityHTMLString = '';

        for(let item of facilities){
            facilityHTMLString += facilityCard(item)
        }

        facilityContainer.innerHTML = `${facilityHTMLString}`

        // Now that you have the data, what component should be rendered?
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    facilityList()
})