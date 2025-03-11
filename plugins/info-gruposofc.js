

const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}

${tradutor.texto1[1]}*➣ 𝙸𝚗𝚜𝚝𝚊 𝙾𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎𝚕 𝙱𝚘𝚝*
1.- https://www.instagram.com/clanlive.ff?igsh=N2xsb3VsdTk1b2pk`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/clanlive.ff?igsh=N2xsb3VsdTk1b2pk`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝙷𝚎𝚕𝚕𝚘  𝚆𝚘𝚛𝚕𝚍 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/clanlive.ff?igsh=N2xsb3VsdTk1b2pk',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': `*𝙴𝚕 𝚖𝚎𝚓𝚘𝚛 𝚋𝚘𝚝 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙*`,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/clanlive.ff?igsh=N2xsb3VsdTk1b2pk'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
