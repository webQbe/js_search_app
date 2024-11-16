
export const getSearchTerm = () => {

    // Select search input value & trim
    const rawSearchTerm = document.getElementById("search").value.trim();

    // Look for 2 or more repeated spaces within search phrase
    const regex = /[ ]{2,}/gi;

    // Replace repeated spaces with single space
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");

    // Returned refined search term
    return searchTerm;

}

// Export results array
export const retrieveSearchResults = async (searchTerm) => {

    // Pass search term to get search string
    const wikiSearchString = getWikiSearchString(searchTerm);

    // Pass search string to get search results
    const wikiSearchResults = await requestData(wikiSearchString);

    // Initialize resultArray
    let resultArray = [];

    // Skip if "query" property not available
    if(wikiSearchResults.hasOwnProperty("query")){

        // Pass pages from query to
        // get processed results
        resultArray = processWikiResults(wikiSearchResults.query.pages);
    }

    return resultArray;

}

const getWikiSearchString = (searchTerm) => {

    // Set max character length of response
    const maxChars = getMaxChars();

    // Define raw search string
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

    /* API REQUEST BREAKDOWN

    https://en.wikipedia.org/w/api.php? : Sending request to wikipedia API

    action=query                  : Performing a query

    &generator=search            : Generator search allows us to use more than one property
        &gsrsearch=${searchTerm} : Generators are prefixed with "gsr"
        &gsrlimit=20             : Result limit

    &prop=pageimages|extracts    : Generate results for Page Images and Extracts properties
        &exchars=${maxChars}     : Set character length
        &exintro                 : Multiple extractions
        &explaintext             : Request text
        &exlimit=max             : Max number of extracts (20)
    &format=json                 : JSON format
    &origin=*                    : * means unauthenticated, avoid CORS error
    
    */

    // Encode rawSearchString
    const searchString = encodeURI(rawSearchString);

    return searchString;

}

const getMaxChars = () => {

    // Get viewport width value
    const width = window.innerWidth || document.body.clientWidth;

    let maxChars;
    // Decide max characeters based on screen width
    if (width < 414) maxChars = 65;
    if (width >= 414 && width < 1400) maxChars = 100;
    if (width >= 1400 ) maxChars = 130;
    return maxChars;
}

const requestData = async (searchString) => {

    try {
        // Fetch response with searchString
        const response = await fetch(searchString);

        // Convert response to JSON
        const data = await response.json();

        return data;

    } catch(err) { // Handle errors

        console.error(err);

    }

}

const processWikiResults = (results) => {

    // Define local array
    const resultArray = [];

    Object.keys(results).forEach(key => {

        // Get current item key, title, text
        const id = key;
        const title = results[key].title;
        const text = results[key].extract;

        // Get image if available
        const img = results[key].hasOwnProperty("thumbnail") 
                    ? results[key].thumbnail.source
                    : null; 

        // Create item object
        const item = {
            id: id,
            title: title,
            img: img,
            text: text
        };
        // Add item to array
        resultArray.push(item);
    });

    // After looping through results
    return resultArray;

};