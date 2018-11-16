const http = require('http')
const express = require('express')
const app = express()
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received")
  response.sendStatus(200)
})
app.listen(process.env.PORT)
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
}, 280000)


const Discord = require("discord.js");
const client = new Discord.Client();
const bvn = require('./commands/gibiet')
const role = require('./commands/role')
const pb = require('./commands/pb')
const endpb = require('./commands/endpb')
const helpstaff = require('./commands/helpstaff')
const hug = require('./commands/hug')
const bn = require('./commands/bn')
const kiss = require('./commands/kiss')
const o = require("./dev/t")

client.login(process.env.DISCORD_LOGIN)

client.on('message', function(message){ // ||hug.parse(message)
  o.parse(message)
	let commandUsed = bvn.parse(message)||role.parse(message)||pb.parse(message)||endpb.parse(message)||helpstaff.parse(message)||bn.parse(message)||kiss.parse(message)
})


