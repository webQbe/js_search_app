
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