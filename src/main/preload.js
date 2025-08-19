// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// src/main/preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe, limited API to your React app
// This is the modern, secure way to allow your frontend
// to communicate with the Electron backend.
contextBridge.exposeInMainWorld('electronAPI', {
  // Example function: send a message from React to the main process
  sendMessage: (message) => ipcRenderer.send('my-message-channel', message),

  // Example function: receive a message from the main process
  onReply: (callback) => ipcRenderer.on('reply-channel', (_event, value) => callback(value)),
});

console.log('Preload script loaded successfully')