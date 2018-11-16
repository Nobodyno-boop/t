const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{

    static match (message){
        if(message.content.startsWith('/role') && message.channel.type != 'dm'){
            if(message.member.roles.some(r=>["Le lievre de Fevrier 🐰⌛", "Moditinou  de qualitey 🐰👌📌", "LAPIN SUPREME🐰🍕👑"].includes(r.name))){
                return true
            }else{
                message.member.createDM().then(function(channel){
                        return channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
                    }).catch(console.error)
                    var msg = message.member.toString() + "une personne a essayer de faire la commande /role !"
                    message.guild.channels.find(x => x.name === "log-staff").send(msg)
                    message.delete()
                return false
            }
        }
        return false
    }
    static action (message){
        var membre = message.mentions.members.first()
        membre.addRole(message.guild.roles.find("name", "Les lapereaux apeurés 🐰😟")).catch(console.error)
        membre.removeRole(message.guild.roles.find("name", 'Gibier de potence🐰🍖')).catch(console.error)
        const texte = "Te voilà un vrai petit lapin maintenant!  Profite bien du serveur! " + membre.toString()
        message.guild.channels.find("name", "papotage-avec-frank").send(texte)
    }
}