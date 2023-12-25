looker.plugins.visualizations.add({
  options: {},
  // Set up the initial state of the visualization
  create: function (element, config) {
    this._element = element;
    this._createCollapsibleSections();
  },
  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // You can perform additional updates if needed

    done();
  },
  // Function to create collapsible sections
  _createCollapsibleSections: function () {
    var sections = [
      { title: "Section 1", content: "Content for Section 1..." },
      { title: "Section 2", content: "Content for Section 2..." },
      // Add more sections as needed
    ];

    sections.forEach(function (section) {
      var collapsibleSection = document.createElement("div");
      collapsibleSection.className = "collapsible-section";

      var button = document.createElement("button");
      button.className = "collapsible-btn";
      button.textContent = section.title;

      var content = document.createElement("div");
      content.className = "collapsible-content";
      content.innerHTML = "<p>" + section.content + "</p>";

      button.addEventListener("click", function () {
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });

      collapsibleSection.appendChild(button);
      collapsibleSection.appendChild(content);

      this._element.appendChild(collapsibleSection);
    }, this);
  },
});
