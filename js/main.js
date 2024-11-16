// Listen for changes in the document's readiness state
document.addEventListener("readystatechange", event => {

    // Check if the document has reached the complete state
    if (event.target.readyState === "complete"){

        /* readyState is a property of the document that represents its loading status.

           It can have the following values:
                loading: The document is still loading.
                interactive: The document has been loaded and parsed, 
                             but sub-resources (e.g., images, stylesheets) 
                             may still be loading.
                complete: The document and all its sub-resources have finished loading.

        */
        initApp();

    }

    /* The difference is that DOMContentLoaded fires earlier, as soon as the HTML is parsed,
       while readystatechange with complete waits for the entire page to load. */
});


const initApp = () => {

    // Set text input focus

    // Select form
    const from = document.getElementById("searchBar");

    // Listen for from submit
    from.addEventListener("submit",  submitTheSearch);

}





