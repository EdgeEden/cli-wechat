import { write2pipeline } from '../utils/pipeline.ts'
import { write2socket } from '../utils/local-socket.ts'

export const robotConfig = {
  whiteRoomList: [
    'test',
  ],
}

export function IPC(msg: string) {
  const IPCtool = 'pipeline' // 'pipeline' or 'socket', but there are some error with socket
  if (IPCtool === 'pipeline')
    write2pipeline(`${msg}\n`)
  else if (IPCtool === 'socket')
    write2socket(`${msg}\n`)
  else
    throw new Error('Invalid IPC config')
}
