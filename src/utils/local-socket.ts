// 使用本地套接字进行通信

import net from 'node:net'

export function write2socket(msg: string) {
  const client = net.createConnection('/tmp/moyu-chat.sock')
  client.write(msg)
  client.destroy()
}
