const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: 𝐌𝐚𝐥𝐢𝐛𝐮 𝐭𝐡𝐞𝐞 𝐠𝐫𝐞𝐚𝐭*
🔥 *ɴᴜᴍʙᴇʀ* -: 254712267225
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ɢʀᴏᴜᴘ-:* https://chat.whatsapp.com/CNZlSoRwP1eFOte9SvJFkD

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋᴀʀᴀʙ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/dHilafW.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
