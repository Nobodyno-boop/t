const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{

    static match (message){
        if(message.content.startsWith('/endpb') && message.channel.type != 'dm'){
            if(message.member.roles.some(r=>["Le lievre de Fevrier 🐰⌛", "Moditinou  de qualitey 🐰👌📌", "LAPIN SUPREME🐰🍕👑"].includes(r.name))){
                return true
            }else{
                message.member.createDM().then(function(channel){
                        return channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
                    }).catch(console.error)
                    var msg = message.member.toString() + "une personne a esseyer de faire la commande /endpb !"
                    message.guild.channels.find(x => x.name === "log-staff").send(msg)
                    message.delete()
                return false
            }
        }
        return false
    }
    static action (message){
        var membre = message.mentions.members.first()
        membre.removeRole(message.guild.roles.find("name", 'Lapin dissident🐰💀'))
        membre.addRole(message.guild.roles.find("name", "Les lapereaux apeurés 🐰😟"))
    }
}