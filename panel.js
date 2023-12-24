looker.plugins.visualizations.add({
  options: {},
  // Set up the initial state of the visualization
  create: function (element, config) {
    // Add a button to trigger the display of the current URL
    var button = document.createElement("button");
    button.textContent = "Display Current URL";
    button.onclick = this.displayCurrentURL.bind(this);
    element.appendChild(button);

    // Add a paragraph element to display the current URL
    this.displayElement = document.createElement("p");
    this.displayElement.textContent = "Current URL: ";
    element.appendChild(this.displayElement);
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // You can perform additional updates if needed

    done();
  },
  // Function to display the current URL
  displayCurrentURL: function () {
    // Get the current URL from the browser's location object
    var currentURL = window.location.href;

    // Display the current URL on the page
    this.displayElement.textContent = "Current URL: " + currentURL;
  },
});
