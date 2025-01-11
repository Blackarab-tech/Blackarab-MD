const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋 HEY ${pushname} THIS IS MY MENU 📍

*© OWNERS*  : Mᴀʟɪʙᴜ Tʜᴇᴇ Gʀᴇᴀᴛ
                      ᴀʟᴡᴀʏs ᴛʜᴇᴇ ɢʀᴇᴀᴛ
                      ᴛʜᴇ ᴡᴇᴀᴋ ᴍᴜsᴛ ғᴇᴀʀ
                      
*© SUPPORTER* : ɴᴇʟɴᴀᴛɪᴏɴ

*© NUMBERS* : +254712267225
                        
                        ᴛᴇxᴛ ᴡʜᴇɴ ɪɴ ɴᴇᴇᴅ
                        
*© SUPPORTER NUMBER* : +254712703241

╭──────────●●►
│📌 LIST MENU
╰──────────●●►

╭════════════⊷❍ 
┊ 1 || MAIN  MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .alive
┊ .menu
┊ .ping
┊ .system

╭════════════⊷❍ 
┊ 2 || DOWNLOAD MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .song
┊ .video
┊ .fb
┊ .mediafire

╭════════════⊷❍ 
┊ 3 || SEARCH MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .yts

╭════════════⊷❍ 
┊ 4 || GROUP MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .promote
┊ .demote
┊ .add
┊ .remove / .kick
┊ .setgoodbye
┊ .setwelcome
┊ .getpic


╭════════════⊷❍ 
┊ 5 || OWNER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .shutdown
┊ .setpp
┊ .block
┊ .unblock
┊ .clearchats
┊ .restart
┊ .broadcast

╭════════════⊷❍ 
┊ 5 || OTHER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .ai
┊ .news

 ʙʟᴀᴄᴋᴀʀᴀʙ-ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ🇰🇪


> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐀𝐋𝐈𝐁𝐔 🚩`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/dHilafW.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
