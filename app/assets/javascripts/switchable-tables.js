//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function toggleTables(panelId) {
  var graphPanel = document.querySelector(`#${panelId} .app-show-hide-panel[data-panel-label="graph"]`);
  var tablePanel = document.querySelector(`#${panelId} .app-show-hide-panel[data-panel-label="table and accessible"]`);

  if (graphPanel && tablePanel) {
    graphPanel.classList.toggle("app-show-hide-panel__hidden");
    tablePanel.classList.toggle("app-show-hide-panel__hidden");
  } else {
    console.error("Graph panel or table panel not found.");
  }
}

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  // You can keep other code inside this function if needed
})
