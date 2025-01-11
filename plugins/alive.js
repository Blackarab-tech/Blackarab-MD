const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*𝐇𝐞𝐲 𝐡𝐮𝐦𝐚𝐧* ${pushname}\n *𝐈 𝐚𝐦 𝐛𝐥𝐚𝐜𝐤𝐚𝐫𝐚𝐛-𝐦𝐝 𝐚𝐦 𝐚𝐥𝐢𝐯𝐞 𝐧𝐨𝐰 𝐡𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮....! 🖐🏻*

╭════════════⊷❍ 
┊
┊FOR MORE DETAILS  ,   TYPE ( *.menu*) 🔐
┊
╰════════════⊷❍

*- IA AM BLACKARAB - MD V1 WHATSAPP USER BOT 🇰🇪*


> POWERED BY MALIBU THEE GREAT 🚩`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/dHilafW.jpeg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
