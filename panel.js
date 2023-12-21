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
            default: "https://your-looker-instance/dashboards/target_dashboard",
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

        // Create a clickable link to the specified dashboard
        var link = document.createElement("a");
        link.href = dashboardURL;
        link.target = "_blank"; // Open the link in a new tab
        link.textContent = dashboardName;

        // Append the link to the visualization frame
        this._frame.innerHTML = "";
        this._frame.appendChild(link);

        done();
    },
});
