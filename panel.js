looker.plugins.visualizations.add({
    options: {},
    // Set up the initial state of the visualization
    create: function (element, config) {
        this._frame = element;
    },
    // Render in response to the data or settings changing
    updateAsync: function (data, element, config, queryResponse, details, done) {
        // Clear any errors from previous updates
        this.clearErrors();

        // Get the current URL
        var currentUrl = window.location.href;

        // Display the current URL in the visualization frame
        this._frame.innerHTML = `<p style="font-size: 16px; margin: 10px 0;">Current URL: ${currentUrl}</p>`;

        done();
    },
});
