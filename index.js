const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('ignore-certificate-errors', true)

app.whenReady().then(() => {
  const win = new BrowserWindow({
    show: true
  })

  win.loadURL(`https://127.0.0.1:${process.env.PORT || 5000}`)
})
