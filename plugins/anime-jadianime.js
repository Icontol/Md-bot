import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime2'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zeltoria.my.id/api/other/toanime?url=${url}&apikey=${global.ivan}`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan', m)
	
}
handler.help = ['jadianime']
handler.tags = ['anime', 'ai']
handler.command = /^(jadianime)$/i
handler.limit = true

export default handler