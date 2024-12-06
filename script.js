
// Example Data for the Search
const blogData = [
  { title: "Understanding JavaScript", category: "tech" },
  { title: "Healthy Lifestyle Tips", category: "lifestyle" },
  { title: "Building Modern Websites", category: "tech" },
  { title: "Meditation for Beginners", category: "lifestyle" },
];

// Functionality for the Search
document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-box').value.toLowerCase();
  const filter = document.getElementById('filter-dropdown').value;
  const resultsContainer = document.getElementById('results-container');

  // Filter Data
  const filteredResults = blogData.filter(blog => 
    (filter === 'all' || blog.category === filter) &&
    blog.title.toLowerCase().includes(query)
  );

  // Display Results
  resultsContainer.innerHTML = filteredResults.length
    ? filteredResults.map(blog => `<p>${blog.title}</p>`).join('')
    : '<p>No results found.</p>';
});
