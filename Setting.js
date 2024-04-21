/**

* @project_name : SIGMA-MD
* @Developer : Maher-Zubair
* @Version : v.1.5.3
* @license : Apache-2.0

This Project Is Under Apache-2.0 License.
So, No One Have Permission To Copy This Project,
Reupload, Reversed Engineering And Any Kind Of Deobfuscation.
Otherwise, A Legal Github Copyright Action Will Be Taken Against You
Which Result In Removing The Copied Project And Permanently Banning Of Your Account.
* @Copyright_owner : Maher-Zubair

**/

const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//=========================[DEVELOPER'S VARIABLES, DON'T TOUCH]===================
global.port  = process.env.PORT  || 5000  ;
global.Gname = process.env.GNAME || "";
global.waUrl = process.env.WAURL || "";
global.audio = '' ; 
global.video = '' ;
global.lol   = 'GataDios'
global.cali  = `lykoUzNh`
global.devs  = "923466319114";
global.inrl_key = `inrl-bot-mdaqz3ks6md7`;
global.inrl_api = `https://upper-romy-inrl-bot.koyeb.app/`;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email     = 'support@maher-zubair.tech' ; 
global.github    = 'https://github.com/Maher-Zubair/SIGMA-MD' ;
global.location  = 'Lahore, Pakistan' ;
global.website   = 'https://maher-zubair.tech' ; 
global.maher_api = process.env.MAHER_API || `https://api.maher-zubair.tech/` ; // MY OWN OFFICIAL API WEBSITE, YOU CAN USE IT IN YOUR BOT OR PROJECT
//=================================================================================


//===========================[COMPULSORY VARIABLES]================================
global.owner = process.env.OWNER_NUMBER  || '923466319114' ;  // ADD YOUR NUMBER WITHOUT +
global.mongodb = process.env.MONGODB_URI || "" ;            // PUT MONGODB KEY HERE, WITHOUT MONGODB YOUR BOT WILL NOT RUN
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi' // ADD CORRECT TIMEZONE OR LEAVE IT SAME , OTHERWISE YOU GET ERRORS
//=================================================================================


//======================[YOUR CHOICE, CHANGE OR LEAVE IT SAME]=====================
global.sudo  =  process.env.SUDO || "923466319114" ;          // DON'T REMOVE
global.mztit = process.env.MZTIT ||"🅼♥︎❚❚♥︎🆉",               // ADD YOUR TITLE, ONE WORD WILL BE MORE BETTER
global.gurl  = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/03e49e6e2057568db8926.jpg' ;
//=================================================================================


module.exports = {

  //==============================[COMPULSORY]=====================================
  sessionName: '21_04_2024_SIGMA_MD_iSqZPMvC_MAHER_ZUBAIR',              // PUT YOUR SESSION ID
  botname: 'sɪɢᴍᴀ-ᴍᴅ',         // ADD YOUR BOT NAME
  ownername:  'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ', // ADD YOUR NAME
  HANDLERS: '.',              // ADD YOUR BOT PREFIX
  WORKTYPE: 'public',      // IF PRIVATE ONLY YOU CAN USE YOUR BOT, IF PUBLIC EVERYONE CAN USE YOUR BOT
  //================================================================================


  //==============================[WHAT'SAPP FEATURES]==============================
  author:  'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ',      // ADD YOUR STICKER AUTHOR NAME
  status_view : 'false',    // IF IT TRUE IT AUTOMATICALLY VIEWS YOUR STATUSES
  status_saver : 'false', // IF TRUE IT AUTOMATICALLY DOWNLOADS YOUR STATUSES AND SEND IN YOUR INBOX
  packname:  'sɪɢᴍᴀ-ᴍᴅ' ,          // ADD YOUR STICKER PACKNAME
  autoreaction: 'false',    // IF TRUE IT WILL REACT TO YOUR MESSAGES
  readmessage: 'false',      // IF TRUE IT WILL SEEN ALL YOUR MESSAGES
  disablepm: "false",        // IF TRUE IT WILL DISABLE THE BOT IN YOUR PM
  //=================================================================================


  //===========================[YOUR CHOICE, CHANGE OT LEAVE IT SAME]================
  warncount : 2,                 // WARN LIMITS
  MsgsInLog: 'false',            // IF TRUE IT WILL SHOW YOUR MESSAGES IN LOGS
  pmMsgsInLog: 'false',          // IF TRUE IT WILL SHOW YOUR PM MESSAGES IN LOGS
  antifake :   '212',            // ANTIFAKE NUMBER CAN'T JOIN GROUPS
  levelupmessage: 'true',        // SENDS A LEVEL UP MESSAGE WHEN SOMEONE'S RANK INCREASE
  antilink_values: 'https://,chat.whatsapp.com,youtube.com,instagram.com,tiktok.com,vt.tiktok.com,wa.me,facebook.com', // ANTILINKS VALUES, IT WILL TAKE ACTION WHO SEND THESE LINKS
  promote_demote_messages : 'false' ,     // IF TRUE IT WILL SEND AN ALERT MESSAGE WHEN SOMEONE PROMOTED/DEMOTED IN GROUPS
  antibadwords_values: 'Fuck,porn,sex,xxx,fucker,asshole,fuck you,fuck off',   // IT WILL TAKES ACTIONS WHO SENDS THESE BAD WORDS
  OPENAI_API_KEY: '',    // ADD YOUR OPEN AI KEY IF YOU HAVE
  REMOVE_BG_KEY: "1YueQDSbfnexBFK9ai86T1JX",    // ADD YOUR REMOVE BG KEY IF YOU HAVE
  //=================================================================================


  //=============================[DEVELOPER'S VARIABLES DON'T TOUCH]=================
  afk:  false,
  BRANCH: 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption : "*• ѕιgмα-м∂ мυℓтι-∂єνι¢є*\n*• ωнαтѕαρρ вσт* ",
  LANG: "SIGMA_MD",
  VERSION: '𝚅.𝟷.𝟻.𝟹'
  //=================================================================================
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
