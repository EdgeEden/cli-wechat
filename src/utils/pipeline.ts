// 使用pipeline文件通信
// 需提前使用mkfifo moyu-chat.pipe创建管道文件以供读写

import fs from 'node:fs'
import path from 'node:path'
import { log } from 'wechaty'

export function write2pipeline(msg: string) {
  const pipePath = path.resolve('/tmp/moyu-chat.pipe')
  fs.writeFile(pipePath, msg, (err) => {
    if (err)
      log.error('写入pipeline错误')
  })
}
