
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
        done();
      })
      .catch(error => {
        console.error('Fetch error:', error);
        done();
      });
  }
});
