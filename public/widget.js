// public/widget.js
document.addEventListener("DOMContentLoaded", function () {
  // Create widget container
  var container = document.createElement("div");
  container.id = "widget-container";
  document.body.appendChild(container);

  // Load widget content
  var script = document.createElement("script");
  script.src = "http://localhost:3000/api/widget";
  document.body.appendChild(script);
});
