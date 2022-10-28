const { ipcRenderer, contextBridge } = require('electron');


contextBridge.exposeInMainWorld('electron', {
  notificationApi: { //include object that has the properties we want in our browser window
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  batteryApi: {

  },
  pdfApi: {
    saveAsPdf(){
        ipcRenderer.send('print-to-pdf');
    }
   },
   pdfPathApi:{
    
   }
   }
)