export const IpcChannelType = {
  SET_WEBSITE: 'SET_WEBSITE',
  GET_WEBSITES: 'GET_WEBSITES',
}

export type Website = {
  url: string
  name?: string
  favicon?: string
  last_visited?: number
}
