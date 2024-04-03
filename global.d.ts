interface MyRemoteApp {
  mountWidget: (container: HTMLElement) => void;
}

declare global {
  interface Window {
    myRemoteApp: MyRemoteApp;
  }
}
