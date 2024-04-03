import ReactDOMServer from "react-dom/server";
import HelloWorld from "../../components/HelloWorld";

export default function handler(req, res) {
  const html = ReactDOMServer.renderToString(<HelloWorld />);

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
