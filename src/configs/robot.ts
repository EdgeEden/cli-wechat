import { write2pipeline } from '../utils/pipeline.ts'
import { write2socket } from '../utils/local-socket.ts'

export const robotConfig = {
  whiteRoomList: [
    'test',
  ],
}

export function IPC(msg: string) {
  const IPCtool = 'pipeline' // 'pipeline' or 'socket'
  if (IPCtool === 'pipeline')
    write2pipeline(msg)
  else if (IPCtool === 'socket')
    write2socket(msg)
  else
    throw new Error('Invalid IPC config')
}
