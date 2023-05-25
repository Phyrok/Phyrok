// Get the search input, button, and results container elements
        var searchInput = document.getElementById("searchInput");
        var searchButton = document.getElementById("searchButton");
        var searchResults = document.getElementById("searchResults");

        // Add an event listener to the search button
        searchButton.addEventListener("click", function () {
            var query = searchInput.value;
            searchWebsite(query);
        });

        // Function to search the website
        function searchWebsite(query) {
            if (query) {
                var resultCount = 0;
                if (window.find(query)) {
                    resultCount++;

                    // Highlight the found text
                    document.execCommand("hiliteColor", false, "yellow");
                }

                // Display the number of results found
                searchResults.textContent = resultCount + " result(s) found.";
            } else {
                // Clear the search results if the query is empty
                searchResults.textContent = "";
            }
        }