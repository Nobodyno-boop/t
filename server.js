const http = require('http')
const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express')
const Bot = require("./src/App")
const app = express()
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received")
  response.sendStatus(200)
})
app.listen(process.env.PORT)
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
}, 280000)


// const bvn = require('./commands/gibiet')
// const role = require('./commands/role')
// const pb = require('./commands/pb')
// const endpb = require('./commands/endpb')
// const helpstaff = require('./commands/helpstaff')
// const hug = require('./commands/hug')
// const bn = require('./commands/bn')
// const kiss = require('./commands/kiss')
const hug = require("./src/commands/Hug")
const kiss = require("./src/commands/kiss")
const bn = require("./src/commands/Bn")
const pb = require("./src/commands/Pb")
const endpb = require("./src/commands/EndPb")
const helpstaff = require("./src/commands/HelpStaff")
const gibier = require("./src/commands/Gibier")



let bot = new Bot("$")
bot.addCommand(new hug(), new kiss(), new bn(), new pb, new endpb(), new helpstaff(), new gibier())


client.login(process.env.DISCORD_LOGIN)

client.on('message', function(message){ // ||hug.parse(message)
  bot.parse(message)
})
//	let commandUsed = bvn.parse(message)||role.parse(message)||pb.parse(message)||endpb.parse(message)||helpstaff.parse(message)||bn.parse(message)||kiss.parse(message)


