const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="benjaminerick551@gmail.com"
global.location="Dar es salaam,Tanzania."


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "null"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/Erickbenright/Benright-MD-V2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajWBCv3QxS8gM0I260Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajWBCv3QxS8gM0I260Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.bing.com/images/create/computer-hacker27s-which-shows-on-display-a-word-22b/1-673c5628a4c745afae44a4d9f22a9341?id=rCjByZtPfxTpOazLqv7jyw%3d%3d&view=detailv2&idpp=genimg&thId=OIG1.ZALOhJ4PhKrlKW0h.bsh&skey=qr2TesG7mOSukqSa347o_o0XjiFoalQnb18oBCxOKgk&FORM=GCRIDP" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© BenrightTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "255711384026";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711384026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-BXMD.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://benright-XMD-V2-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "BENRIGHT-MD-V2_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieHcxNmZuNDA0elpUV1BLYytmUFkyU3UxWlFvQkhxWFF4OFIwVmREU0dUTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3MTEzODQwMjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFODU5N0Y4MERCQjFEMzVGODc5QTUyMzE2QzM2OEU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTg3NTExMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyalZQR1h2eVJlRzA0LTNMSXhVVG5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMTllMDRlLTFhOGEtNDc2Yi04MDg2LTg3MDI1YmNlODkyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNjksXG4gICAgICA2MSxcbiAgICAgIDU1LFxuICAgICAgMTk0LFxuICAgICAgMzcsXG4gICAgICAyMTQsXG4gICAgICAzLFxuICAgICAgMTAxLFxuICAgICAgMTk4LFxuICAgICAgMjQ2LFxuICAgICAgODcsXG4gICAgICA0MyxcbiAgICAgIDQ3LFxuICAgICAgMTU0LFxuICAgICAgMjI3LFxuICAgICAgMTMwLFxuICAgICAgNzksXG4gICAgICA1LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDIyNyxcbiAgICAgIDQzLFxuICAgICAgMzksXG4gICAgICAyNDEsXG4gICAgICAyMzksXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICA5NCxcbiAgICAgIDY1LFxuICAgICAgMTMxLFxuICAgICAgNjgsXG4gICAgICAxNTgsXG4gICAgICAyNixcbiAgICAgIDg4LFxuICAgICAgMjIwLFxuICAgICAgMTk5LFxuICAgICAgNzQsXG4gICAgICAxMjQsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVBGRjRaUFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxMTM4NDAyNjo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDgwNjU0NjU1ODU4Nzg6ODRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwifkxlZW1jIHJpY2t5IPCfh7/wn4em8J+Hv/Cfh6ZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL1cyNUVHRUp5aTZia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ0cVl2c1U1WUtxSmp5MkJBa2xTMTZHa1BldUdqbi9SbnhLTVlWcjlpRjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkc5TitmZkFxSTFzUUdSQVlBcE9DbjB2U0VkWi81ZHdQWS9ReXVwSUtMem1yMlFST3JzM0lMNFNvaFY3cUtrdUgvSnM5RWtrbUhGRmJ1Qi90aHJqQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjY0N0o0OFZPZmtlZkFTWHU0MTJLeDRPM3BpTjdVZzU1ZThKOTZDeGNVMUh0NEl5RHRtbG9uRHY5anZCeVdwNXdPbzY4bkFUT0hiMGpDVG54MnJVZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExMzg0MDI2Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODc1MTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWxYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbFguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFWFROWVA2WVZmTzdzRHB4VnI3VkJzNFBsM09IYkdHRVlWbGs4ZERnck1VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDc3NjYyODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTg3NTEwNjg2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ BenrightTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/Trendingbenrightonline"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Benright-XMD-V2",
  ownername:process.env.OWNER_NAME|| "Benright XMD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "BENRIGHT MD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
