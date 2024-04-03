document.addEventListener("DOMContentLoaded", function () {
  var container = document.createElement("div");
  container.id = "widget-container";
  document.body.appendChild(container);

  var script = document.createElement("script");
  script.src = "http://localhost:3000/api/widget";
  document.body.appendChild(script);
});
