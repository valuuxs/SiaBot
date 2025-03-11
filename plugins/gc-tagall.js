let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `🪄IG: @Clanlive.ff ${pesan}`
  let teks =`CLAN LIVE'S✨\n\n${oi}\n\n*𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨*\n`
  for (let mem of participants) {
  teks += `⚜️•@${mem.id.split('@')[0]}\n`}
  teks += `◥ 𝑪𝒍𝒂𝒏 𝑳𝒊𝒗𝒆 ◤`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','n <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos)$/i
  handler.admin = true
  handler.group = true
  export default handler
