const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qElWkaDJ#U_rxdQBvBHxKm39JtnHqWyKxXjs9WCge4uenwmW9rTo",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/dHilafW.jpeg",
ALIVE_MSG: process.env.ALIVE_IMG || "*𝐇𝐞𝐲 𝐡𝐮𝐦𝐚𝐧* ${pushname}\n *𝐈 𝐚𝐦 𝐛𝐥𝐚𝐜𝐤𝐚𝐫𝐚𝐛-𝐦𝐝 𝐚𝐦 𝐚𝐥𝐢𝐯𝐞 𝐧𝐨𝐰 𝐡𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "254712267225",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

