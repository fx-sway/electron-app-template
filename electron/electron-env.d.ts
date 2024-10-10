/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    APP_DIR: string;
    PUBLIC_DIR: string;
  }
}

interface Window {
  ipcRenderer: import("electron").IpcRenderer;
}
