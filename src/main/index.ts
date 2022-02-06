import { app, BrowserWindow, ipcMain } from 'electron'
import { Database } from 'sqlite3'
import { IpcChannelType } from '../preload/types'
import { DB } from './db'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const db = new Database('./db.sqlite')
const dbInstance = new DB(db)

if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      contextIsolation: true,
    },
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  dbInstance.close()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle(IpcChannelType.SET_WEBSITE, async (event, url: string) => {
  console.log('SET_WEBSITE', url)
  db.run(`INSERT INTO websites (url) VALUES ('${url}')`)
})

ipcMain.handle(IpcChannelType.GET_WEBSITES, async () => {
  return await dbInstance.all('SELECT * FROM websites')
})
