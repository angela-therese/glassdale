let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {

    return fetch("https://criminals.glassdale.us/criminals")
        /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
    
}