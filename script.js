document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', function () {
      const searchInput = document.getElementById('search-input').value;
      
      // Perform search logic here, e.g., filter products based on searchInput
      // Display search results in the main section of the page
      
      // Example: You can console.log the search term for now
      console.log('Search term:', searchInput);
    });
  });