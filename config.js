const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_59_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT1p0akUvWXkvdzNGWFYxWmszSGxXWHVPTEdoMnZSZFpCUGxzejBiNmdUWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3hlcUNlYnNTNEcwVEdUMUlnN0h5Z1wiLFxuICBcInBob25lSWRcIjogXCJjMGQzNjk3Ny05YWY5LTRiMGItYjEyNS1iODBkYjk4ZWY2NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMTUsXG4gICAgICAyNTEsXG4gICAgICAyNDgsXG4gICAgICAxMTEsXG4gICAgICAxOTksXG4gICAgICAzNSxcbiAgICAgIDcwLFxuICAgICAgMzIsXG4gICAgICAxMjQsXG4gICAgICAxODUsXG4gICAgICAyMTcsXG4gICAgICAxMDIsXG4gICAgICAxOTMsXG4gICAgICAzOSxcbiAgICAgIDY1LFxuICAgICAgMTIyLFxuICAgICAgNjQsXG4gICAgICA3MyxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDIzOSxcbiAgICAgIDQxLFxuICAgICAgMjIyLFxuICAgICAgMTQ1LFxuICAgICAgOCxcbiAgICAgIDgyLFxuICAgICAgNTIsXG4gICAgICAxMzMsXG4gICAgICAyMTUsXG4gICAgICA0OCxcbiAgICAgIDI1NSxcbiAgICAgIDIsXG4gICAgICAyNTUsXG4gICAgICAxNjksXG4gICAgICAyNDEsXG4gICAgICAzNCxcbiAgICAgIDIzNSxcbiAgICAgIDE5MixcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9nZzVZQkVKT0w4TG9HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxdVgyQXZVamtNSW9yZ1UrZHcxZ0xnemp0NGpxcytZeURwUm5yemVoVWtnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZFbzBqTXpKcGpSVllFRmQxNUEwU1VTeEhpdlFRSUd0dHYyQ0xpYUJna1lDait5blBGejJUZklVUGI0NmJPcEU3ODJPejk5cG1vSFJvTlUyOEVRNENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJ0ZURwcUJPOWtOc0J6aEErZmZ1WUFyWklUTXlXbWN3U1U0OWpMd29iM0dzQllmOEVaTlMvMFpkUEsxUFREVHVlb0pFdWY0cmZpalNiSkxlQmxiRURRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDgxNDczNDc3OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDUzMDYwMTA2Njc0NTo4MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4MTQ3MzQ3Nzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MDgzOTkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSi9QXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKX19GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMm5XRHhPYjluMVlXNkdyMEp1eklzRGdHbkxOa0FobGRjVXJ1ZEZLR1RjQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTQ2MjYxMTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpfX0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBY2FOVUp5a3ZLM3Jjb1hPYmxYdndBWVJGVGl0MVdvaHQ2L0NrTlZGNXJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYyMzcxNDExNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpfX0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFakk1dklHM01Gb2NWVkR0RS9aTFE5ekVrYUM1bW9PLzJBWDRLMXdvK3ZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjIzNzY1NjIyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSl9fSi5qc29uIjogIntcImtleURhdGFcIjpcImZaOVFCNXRyQUphOXhscXNVUHdURnovem9HemV2cGNBbGx6WjB4a2xtQ1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE0NjI2MTE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKX19LLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYnE5S3ZmUWxyd0dJY3MrRk1iTlA5WkRaQzFiamZZMFpqSUI0Tm9BOGJQbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTQ2MjYxMTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY1MzMxOTI2OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpfX00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0YmdjRE9kR1dKd0FGa1JzR2VjQWU4anRpcmp4UW00UUlnVUR3aXRNSXdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKX19OLmpzb24iOiAie1wia2V5RGF0YVwiOlwibGtWdXlQVVpkc0dDWGtSeFhlVisyUXRrRWpMbUtXM0pSdUpBR3V4MXRmND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTQ2MjYxMTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY2MDkyNzY4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpfX1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsOHdPUDJDSmJFU2N2S3ljejJOSTlHMGtUWERaQ1R3Nko1L1hRTHB1anN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjY0MTU1MzI4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSl9fUi5qc29uIjogIntcImtleURhdGFcIjpcInF4NXUrTlhPbWVrY3VCek5CSTZHRVlzcVgrMTZYZlVmQ1d5WVl0dUhZNGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE0NjI2MTE1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM4MTQzMzc4ODFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKX19ULmpzb24iOiAie1wia2V5RGF0YVwiOlwiOUpMZTNPZU00N3VSOFZSSUdDN1JoUG1KaHNqdVVDSlRzVmZnY1FPUWV3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTQ2MjYxMTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzg4MzMyMDkxNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTRBQUpfX0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2dWRqYUtQTGp1R2w5bitSOFU2bXFyZHhmVjlmNldHZld1M0J2ZGQzOFNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYyMzc4NDA0NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTRBQUpfX0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsUG5neXh6M0t3MzdaUTR3RzJhZGMwSjhVY255emtqVXYwY3lOSjRyTk80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY1MzMyNDg1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTRBQUpfX08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRRkVPc25mQkE3NjluaEJuNEZFRDBCNFJNeXRTSHRJMUgwNHJXaGZKbWpzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY2MDkzMjQ0OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTRBQUpfX1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpTmF4M1J5SUw3MDBJa2QzaWo4SEEzTURsY3dDYnlmSTlUZDJlQmFXTVZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzc5ODc4NDc2MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTRBQUpfX1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCOTl6WTFBU0hsaVplSGhDZkNSL0c3WXpLWC8waGt2RGh0a3gveXlERnFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNDYyNjExNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNzhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzg0MjE1MDc3N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
