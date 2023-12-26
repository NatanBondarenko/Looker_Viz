// Ensure that Looker.plugins.visualizations.add is called after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  Looker.plugins.visualizations.add({
    create: function (element, config) {
      // Called when the visualization is first created
    },
    updateAsync: function (data, element, config, queryResponse, details, done) {
      // Called when the data or config is changed

      // Get the URL from the config
      const url = config.url;

      // Fetch HTML source code from the specified URL
      fetch(url)
        .then(response => response.text())
        .then(html => {
          // Display the HTML source code in the element
          element.innerHTML = `<pre>${html}</pre>`;
          done(); // Signal that the update is complete
        })
        .catch(error => {
          console.error('Fetch error:', error);
          done(); // Signal that the update is complete even in case of an error
        });
    }
  });
});
