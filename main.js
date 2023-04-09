const { app, BrowserWindow } = require("electron")

const isMac = process.platform === "darwin"
const isDevEnv = process.env.NODE_ENV === "development"

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "TodosApp",
    width: 1000,
    height: 700
  })

  if (isDevEnv) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.loadURL("http://localhost:5173")
}

app.whenReady().then(() => {
  createMainWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on("window-all-close", () => {
  if (!isMac) {
    app.quit()
  }
})
