import { ipcRenderer, contextBridge } from 'electron'

import { IpcChannelType, Website } from './types'

export const ContextBridge = {
  setWebsite(url: string): Promise<void> {
    return ipcRenderer.invoke(IpcChannelType.SET_WEBSITE, url)
  },
  getWebsites(): Promise<Website[]> {
    return ipcRenderer.invoke(IpcChannelType.GET_WEBSITES)
  },
}

contextBridge.exposeInMainWorld('api', ContextBridge)
