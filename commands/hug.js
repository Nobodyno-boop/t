const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{
  static match (message){
    if(message.content.startsWith('/hug') && message.channel.type != 'dm'){
       if(typeof message.mentions.members.first() != "undefined"){
        return true
      }else{
          var embed = new Discord.RichEmbed()
          .setImage("https://media.giphy.com/media/3LGQOIQfV9xzJXwXZi/giphy.gif")
          .setColor("#FFDF01")
          .setDescription(message.member.toString() + "se fait un câlin seul(e) ")
        message.channel.send(embed)
        return false
        }
      }
      return false
  }
     
  static action (message){
    var membre = message.mentions.members.first()
    var msg = []
    msg.push(" fait un câlin à ")
    msg.push(" tombe dans les bras de ")
    msg.push(" prend dans ses bras ")
    msg.push(" se colle a ")
    msg.push(" se jette sur ")
    var aleatoire = Math.floor(Math.random() * Math.floor(msg.length))
    var images = []
    images.push("https://media.giphy.com/media/L1icatkT4ECAg/giphy.gif")
	images.push("https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif")
	images.push("https://i.gifer.com/embedded/download/OuSL.gif")
	images.push("https://media1.tenor.com/images/87feeff9cc8cf5c207081d136bc20522/tenor.gif?itemid=12879962")
	images.push("https://media.giphy.com/media/2A8wpqmaiM3bBWgNq8/giphy.gif")
	images.push("https://cdn.discordapp.com/attachments/497124139128193044/512341438907023365/Hug.gif")
	images.push("https://media.giphy.com/media/xUmU6i3QSuAoaXuqHV/giphy.gif")
	images.push("https://media.giphy.com/media/Qf6lspOy5FTGRiPFd2/giphy.gif")
	images.push("https://media.giphy.com/media/u47DKkWjepxPOIjcrY/giphy.gif")
	images.push("https://media.giphy.com/media/TDuWdoURycd9KUTIqZ/giphy.gif")
	images.push("https://media.giphy.com/media/3kHz1pSYGjPurmnCcs/giphy.gif")
	images.push("https://media.giphy.com/media/lpVUezAPBtmb8AEvr6/giphy.gif")
	images.push("https://media.giphy.com/media/w85PPjj9TqyM0lDl53/giphy.gif")
	images.push("https://media.giphy.com/media/4VU9CtgtcW0PlgF8ID/giphy.gif")
	images.push("https://media.giphy.com/media/2cehTEZeWHJGt1joxm/giphy.gif")
	images.push("https://media.giphy.com/media/2fNJEZjWL7vpzKyyqS/giphy.gif")
	images.push("https://media.giphy.com/media/25IjD0lzTF2Gr4QLDe/giphy.gif")
	images.push("https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif")
    var ale = Math.floor(Math.random() * (images.length - 1) + 1)
    var embed = new Discord.RichEmbed()
        .setImage( images[ale] )
        .setColor("#FFDF01")
        .setDescription(message.member.toString() + msg[aleatoire] + membre.toString())
    message.channel.send(embed)
  }
}
//Voilaaaa
//et pour limage ?
//Tu fais pareil : un tableau, sauf que tu met des liens à la place des "Phrase 1"mais comment il différencie entre les phrases et les images ?
//Tu crée un deuxième tableau un nouveau var euh ok ok je vais essyer au pire je test et si ca ne marche pas tu vois ca demain ^^
//D'accord ^^ merci beaucoup !! :)
//Bonne nuit du coup