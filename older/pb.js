const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{

    static match (message){
        if(message.content.startsWith('/pb') && message.channel.type != 'dm'){
            if(message.member.roles.some(r=>["Le lievre de Fevrier 🐰⌛", "Moditinou  de qualitey 🐰👌📌", "LAPIN SUPREME🐰🍕👑"].includes(r.name))){
                return true
            }else{
                message.member.createDM().then(function(channel){
                        return channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
                    }).catch(console.error)
                    var msg = message.member.toString() + "une personne a essayer de faire la commande /pb !"
                    message.guild.channels.find(x => x.name === "log-staff").send(msg)
                    message.delete()
                return false
            }
        }
        return false
    }
    static action (message){
        var membre = message.mentions.members.first()
        membre.removeRole(message.guild.roles.find("name", 'Les lapereaux apeurés 🐰😟'))
        membre.removeRole(message.guild.roles.find("name", 'Les Ptijinous !🐰👦'))
        membre.removeRole(message.guild.roles.find("name", 'Les carottores🐰🍅'))
        membre.removeRole(message.guild.roles.find("name", 'Lapinou poutou🐰💋'))
        membre.removeRole(message.guild.roles.find("name", 'Lapin obéissants🐰🎓'))
        membre.removeRole(message.guild.roles.find("name", 'Le sage kiko🐰😇'))
        membre.removeRole(message.guild.roles.find("name", 'Oswald le vrai🐰🍀'))
        membre.removeRole(message.guild.roles.find("name", 'Marvin rouge🐰🚨'))
        membre.removeRole(message.guild.roles.find("name", 'Toto le lapin🐰👘'))
        membre.removeRole(message.guild.roles.find("name", 'Le Jackolope🐰🦌'))
        membre.removeRole(message.guild.roles.find("name", 'Nanabozo🐰👻'))
        membre.removeRole(message.guild.roles.find("name", 'Dévouée à la cause lapine🐰🙏'))
        membre.addRole(message.guild.roles.find("name", "Lapin dissident🐰💀"))
    }
}