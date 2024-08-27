let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝐌𝐞𝐧𝐬𝐚𝐣𝐞:* ${pesan}`
  let teks = `𝐕𝐞𝐧𝐭𝐚𝐬 𝐝𝐞 𝐛𝐨𝐭𝐬,𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬,𝐬𝐞𝐧𝐬𝐢𝐬,𝐜𝐮𝐞𝐧𝐭𝐚𝐬 wa.me/51992621601
  *⺀EN MIS TIEMPOS YO TE HUBIERA COMPRADO ATI 🙆🏿‍♂️⺀*\n\n🌩️ ${oi}\n\n⚽ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚:*\n`
  for (let mem of participants) {
  teks += `▌🎠 @${mem.id.split('@')[0]}\n`}
  teks += `◥ 𝐁𝐥𝐮𝐞 𝐋𝐨𝐜𝐤 ◤`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler