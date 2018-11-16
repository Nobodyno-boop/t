const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{
  static match (message){
    if(message.content.startsWith('/bn') && message.channel.type != 'dm'){
        return true
    }
  }
  static action (message){

  }
}