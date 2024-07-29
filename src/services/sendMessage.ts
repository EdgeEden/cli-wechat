import { log } from 'wechaty'
import type { Wechaty } from 'wechaty'
import { FileBox } from 'file-box'

export async function sendContactMsg(bot: Wechaty, content: string, alias?: string, name?: string) {
  let query: Record<string, string> = {}
  if (alias)
    query = { alias }
  else if (name)
    query = { name }

  try {
    const contact = await bot.Contact.find(query)

    if (contact)
      contact.say(content)
  }
  catch (error) {
    log.error('发送联系人信息错误')
  }
}

export async function sendRoomMsg(bot: Wechaty, content: string, topic: string) {
  const query: Record<string, string> = {
    topic,
  }
  try {
    const room = await bot.Room.find(query)

    if (room)
      room.say(content)
  }
  catch (error) {
    log.error('发送群信息错误')
  }
}

export async function sendRoomImage(bot: Wechaty, img_path: string, topic: string) {
  const query: Record<string, string> = {
    topic,
  }
  try {
    const room = await bot.Room.find(query)

    if (room) {
      const img = FileBox.fromFile(img_path)
      room.say(img)
    }
    return 0
  }
  catch (error) {
    log.error('发送群图片错误')
    return 1
  }
}
