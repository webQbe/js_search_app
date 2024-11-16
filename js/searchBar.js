// Export function
export const setSearchFocus = () => {

    // Select search input & focus
    document.getElementById("search").focus();
}

// Make Clear Text Button X Visible
export const showClearTextButton = () => {

    // Select text input
    const search = document.getElementById("search");

    // Select clear X button
    const clear = document.getElementById("clear");

    
    if(search.value.length){

        // Remove .none class from clear button
        clear.classList.remove("none");

        // Add .flex class
        clear.classList.add("flex");

    } else {

        clear.classList.add("none");
        clear.classList.remove("flex");
        
    }



};