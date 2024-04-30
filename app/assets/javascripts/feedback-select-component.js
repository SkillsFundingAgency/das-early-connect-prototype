//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  // You can keep other code inside this function if needed

  // Function to show the selected feedback panel and hide others within a specific group
  function showFeedbackPanel(selectedValue, group) {

  // Hide all feedback panels within the specified group
    var feedbackPanels = document.querySelectorAll('.govuk-tabs__panel-' + group);
    feedbackPanels.forEach(function(panel) {
      panel.classList.add('govuk-tabs__panel--hidden');
    });

  // Show the selected feedback panel
    var selectedPanel = document.getElementById(selectedValue);
    if (selectedPanel) {
      selectedPanel.classList.remove('govuk-tabs__panel--hidden');
    }
  }

  // Listen for changes in the select elements within each group
  var selectGroups = document.querySelectorAll('.feedback-group');
  selectGroups.forEach(function(group) {
    var selectElement = group.querySelector('select');
    var groupID = group.dataset.group;

  // Show the initial feedback panel within each group based on the default select value
    var initialSelectValue = selectElement.value;
    showFeedbackPanel(initialSelectValue, groupID);

  // Listen for changes in the select element
    selectElement.addEventListener('change', function(event) {
      var selectedValue = event.target.value;
      showFeedbackPanel(selectedValue, groupID);
    });
  });

  // Function to set the initial feedback panel for each group
function setInitialFeedbackPanel(group) {
  // Find the default select element within the group
  var defaultSelect = group.querySelector('select');
  if (defaultSelect) {
    // Get the value of the default select element
    var defaultValue = defaultSelect.value;

    // Show the corresponding feedback panel
    var selectedPanel = document.getElementById(defaultValue + '-' + group.dataset.group);
    if (selectedPanel) {
      selectedPanel.classList.remove('govuk-tabs__panel--hidden');
    }
  }
}

// Set the initial feedback panel for each group
var selectGroups = document.querySelectorAll('.feedback-group');
selectGroups.forEach(function(group) {
  setInitialFeedbackPanel(group);
});
})
