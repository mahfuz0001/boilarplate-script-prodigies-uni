// pages/api/widget.js
import ReactDOMServer from "react-dom/server";
import HelloWorld from "../../components/HelloWorld";

export default function handler(req, res) {
  // Render the component into HTML string
  const html = ReactDOMServer.renderToString(<HelloWorld />);

  // Return a script that injects the component HTML into the widget-container
  res.setHeader("Content-Type", "text/javascript");
  res.send(`
    var container = document.getElementById('widget-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'widget-container';
      document.body.appendChild(container);
    }
    container.innerHTML = '${html}';
  `);
}
