const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  startCapture: (options) => ipcRenderer.invoke('start-capture', options),
  stopCapture: () => ipcRenderer.invoke('stop-capture'),
});