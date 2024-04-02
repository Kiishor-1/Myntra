function formatSearchQuery(query) {
    // Split the query into individual words
    const words = query.split(" ");
  
    // If there is only one word, return the query as is
    if (words.length === 1) {
        return query;
    }
  
    // If there are multiple words, join them with hyphens
    return words.join("-");
}

export default formatSearchQuery;
