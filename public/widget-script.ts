// public/widget-script.ts
(function () {
  const script = document.createElement("script");
  script.src =
    "https://boilarplate-script-prodigies-uni.vercel.app/_next/static/chunks/remoteEntry.js";
  script.async = true;
  script.onload = () => {
    const container = document.createElement("div");
    container.id = "my-widget-container"; // Change this ID as needed
    document.body.appendChild(container);
    const { mountWidget } = (window as any).myRemoteApp; // Casting window as any
    mountWidget(container);
  };
  document.body.appendChild(script);
})();
