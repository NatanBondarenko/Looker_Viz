looker.plugins.visualizations.add({
    options: {
        name: {
            type: "string",
            label: "Dashboard Name",
            default: "Target Dashboard",
        },
        url: {
            type: "string",
            label: "Dashboard URL",
            default: "https://pagayainvestments.looker.com/dashboards/4052",
        },
    },
    // Set up the initial state of the visualization
    create: function (element, config) {
        this._frame = element;
    },
    // Render in response to the data or settings changing
    updateAsync: function (data, element, config, queryResponse, details, done) {
        // Clear any errors from previous updates
        this.clearErrors();

        var dashboardName = config.name;
        var dashboardURL = config.url;

        // Extract filters from the current dashboard URL
        var currentFilters = window.location.search;

        // Create a clickable link to the specified dashboard with filters
        var link = document.createElement("a");
        link.href = dashboardURL + currentFilters;
        link.target = "_blank"; // Open the link in a new tab
        link.textContent = dashboardName;

        // Append the link to the visualization frame
        this._frame.innerHTML = "";
        this._frame.appendChild(link);

        done();
    },
});
