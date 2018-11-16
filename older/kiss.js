const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{
  static match (message){
    if(message.content.startsWith('/kiss') && message.channel.type != 'dm'){
        return true
    }
  }
  static action (message){
    var membre = message.mentions.members.first()
    var msg = []
    msg.push(" embrasse ")
    msg.push(" colle ses lèvres à ")
    var aleatoire = Math.floor(Math.random() * Math.floor(msg.length)) 
    var images = []
    images.push("https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif")
    images.push("https://media.giphy.com/media/Z2sivLSfN8FH2/giphy.gif")
    images.push("https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif")
    images.push("https://media.giphy.com/media/tZmWHlQT36oZW/giphy.gif")
    var ale = Math.floor(Math.random() * Math.floor(images.length))
    var embed = new Discord.RichEmbed()
        .setImage( images[ale] )
        .setColor("#0000FF")
        .setDescription(message.member.toString() + msg[aleatoire] + membre.toString()) 
    message.channel.send(embed)
  }
}