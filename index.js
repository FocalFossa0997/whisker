const { app, BrowserWindow } = require("electron");

//app.whenReady().then(createWindow);

app.on('ready', function () {
    const win = new BrowserWindow({
        width: 555,
        height: 465,
        resizable: false,
        icon: __dirname + '/whisker.png',
    });

    win.loadFile("./index.html");
    win.setMenu(null)

    win.on('close', function(e) {
        const choice = require('electron').dialog.showMessageBoxSync(this,
          {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Hold on a second!',
            message: 'Are you sure you want to quit Whisker? Any unsaved changes will be destroyed!'
          });
        if (choice === 0) {
          win.destroy()
        }
      });

    });