import { ipcRenderer } from 'electron'

import { App } from '../config/types'
import { Hotkeys, Store as MainStore } from '../main/store'

export const APP_SELECTED = 'APP_SELECTED'
export interface OpenAppArguments {
  url: string
  appId: App['id'] | undefined
  isAlt: boolean
  isShift: boolean
}
export function selectApp(arguments_: OpenAppArguments): void {
  ipcRenderer.send(APP_SELECTED, arguments_)
}

export const HOTKEYS_UPDATED = 'HOTKEYS_UPDATED'
export const updateHotkeys = (hotkeys: Hotkeys): void =>
  ipcRenderer.send(HOTKEYS_UPDATED, hotkeys)

export const HIDE_WINDOW = 'HIDE_WINDOW'
export const hideWindow = (): void => {
  ipcRenderer.send(HIDE_WINDOW)
}

export const CHANGE_THEME = 'CHANGE_THEME'
export const changeTheme = (theme: MainStore['theme']): void =>
  ipcRenderer.send(CHANGE_THEME, theme)
