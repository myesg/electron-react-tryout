'use strict';

var E = require('electron')

var mainWindow = null;

E.app.on('ready', function() {
    mainWindow = new E.BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.webContents.openDevTools();
});
