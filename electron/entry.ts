import path from "node:path";
import { fileURLToPath } from "node:url";
import { app, BrowserWindow } from "electron";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_DIR = path.join(__dirname, "..");

export const REACT_OUTPUT = path.join(process.env.APP_DIR, "dist-react");
export const ELECTRON_OUTPUT = path.join(process.env.APP_DIR, "dist-electron");
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

process.env.PUBLIC_DIR = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_DIR, "public")
  : REACT_OUTPUT;

const initializeWindow = (width: number, height: number): void => {
  let window = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },

    autoHideMenuBar: true,
  });

  if (VITE_DEV_SERVER_URL) {
    window.loadURL(VITE_DEV_SERVER_URL);
  } else {
    window.loadFile(path.join(REACT_OUTPUT, "index.html"));
  }
};

app.whenReady().then(() => initializeWindow(1024, 768));
