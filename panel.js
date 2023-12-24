looker.plugins.visualizations.add({
  options: {
    metricValue: {
      type: "number",
      label: "Metric Value",
      default: 0,
    },
    metricLabel: {
      type: "string",
      label: "Metric Label",
      default: "Custom Metric",
    },
    additionalInfo: {
      type: "string",
      label: "Additional Information",
      default: "",
    },
  },
  // Set up the initial state of the visualization
  create: function (element, config) {
    this._element = element;
    this.updateContent(config);
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // Update the content with the new configuration
    this.updateContent(config);

    done();
  },
  // Function to update the content of the custom metric card
  updateContent: function (config) {
    // Create HTML content for the custom metric card
    var htmlContent = `
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; text-align: center;">
        <h3>${config.metricLabel}</h3>
        <p style="font-size: 24px; font-weight: bold;">${config.metricValue}</p>
        <p>${config.additionalInfo}</p>
      </div>
    `;

    // Set the HTML content to the visualization element
    this._element.innerHTML = htmlContent;
  },
});
