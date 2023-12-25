looker.plugins.visualizations.add({
  options: {
    // You can add any options you need for your visualization
  },
  // Set up the initial state of the visualization
  create: function (element, config) {
    this._element = element;
    this.renderButton();
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // You can perform additional updates if needed

    done();
  },
  // Render the button
  renderButton: function () {
    var button = document.createElement("button");
    button.textContent = "Open PDF to Excel Converter";
    button.onclick = this.triggerAction.bind(this);

    this._element.appendChild(button);
  },
  // Trigger the custom action
  triggerAction: function () {
    looker.plugins.sdk.ok(looker.plugins.sdk.getLookmlDashboardsApi().run_action({
      action_id: "pdf_to_excel_action", // Replace with the actual action ID from your LookML file
    }));
  },
});
