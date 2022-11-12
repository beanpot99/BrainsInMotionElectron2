const { app, BrowserWindow, ipcMain, Notification, shell, webContents } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;
const fs = require('fs'); //fs module provides api for interacting with file system
const os = require('os'); //os module gives utility methods and we use this to create temp location to store pdf file
//const { electron } = require('process');
 //handles asyc and sync messages sent from renderer aka webpage
//const shell = electron.shell; //provides functions related to desktop integration 
//const win= require('electron').BrowserWindow;
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
       worldSafeExecuteJavaScript: true,
       contextIsolation: true,
       enableRemoteModule:true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
}

if (isDev) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
  }
  
app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message) => { //underscore if you aren't using the event parameter anywhere, if you use e it grays out
    new Notification({title: 'Notification', body: message}).show();
  })

  ipcMain.on('app-quit', () => {
    app.quit();
  })
  

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

// ipcMain.on('print-to-pdf', event =>{
//     const pdfPath = path.join(os.homedir(), 'Desktop', 'some-pdf.pdf'); //stores pdf file in temp location using os module and windows to get contents of the window
//     const windows= BrowserWindow.fromWebContents(event.sender);
//     windows.webContents.printToPDF({},(error,data)=>{ //converts content to pdf and pritns windows webpage as pdf
//         if(error) return console.log(error.message);
//         fs.writeFile(pdfPath, data, err =>{ //writes the pdf file
//             if(err) return console.log(err.message);
//             shell.openPath('file://' + pdfPath);
//             event.sender.send('wrote-pdf', pdfPath); //will be handles in renderer.js
//         })
//     })
// })

// ipcMain.on('wrote-pdf', (event, path)=>{
//     const message =`Wrote pdf to : ${path}`;
//     console.log(message);
//     //document.getElementById('pdf-path').innerHTML = message;
// })

ipcMain.on('print-to-pdf',()=>{
   const win =BrowserWindow.getFocusedWindow();
   const currentDate= new Date();
   const myDate = currentDate.getDate(); //return the day of the month
    const myHour = currentDate.getHours(); //return the hours
    const myMin = currentDate.getMinutes(); //return the minutes
    const pdfTitle = myDate.toString() + myHour.toString() + myMin.toString();
    const pdfPath = path.join(os.homedir(), 'Desktop', `${pdfTitle}.pdf`)
    win.webContents.printToPDF({}).then(data => {
        fs.writeFile(pdfPath, data, (error) => {
          if (error){throw error} else{
          console.log(`Wrote PDF successfully to ${pdfPath}`)
          }
        })
      }).catch(error => {
        console.log(`Failed to write PDF to ${pdfPath}: `, error)
      })
//e underscore signifies that this api is coming from an electron environemnt
})