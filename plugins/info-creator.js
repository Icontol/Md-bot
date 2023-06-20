import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; FallZx\nNICKNAME: FallZx\nORG: FallZx\nTITLE:\nitem1.TEL;waid=6285876830674:+62 858 7683 0674\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://chat.whatsapp.com/LvFWJkJHanHLRAPB0MgmCO\nitem2.EMAIL;type=INTERNET: ivantheo159@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku FallZx, Dia Lagi Need Kontak Cewek`)
}
if (command == 'creator') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; FallZx\nNICKNAME: FallZx\nORG: FallZx\nTITLE:\nitem1.TEL;waid=6285809011357:+62 858 0901 1357\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://chat.whatsapp.com/LvFWJkJHanHLRAPB0MgmCO\nitem2.EMAIL;type=INTERNET: 6285876830674\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hai Kak Itu Nomor Developerku Yang Memprogram Aku >,<`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler