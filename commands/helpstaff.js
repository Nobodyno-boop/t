const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{

    static match (message){
        if(message.content.startsWith('/helpstaff') && message.channel.type != 'dm'){
            if(message.member.roles.some(r=>["Le lievre de Fevrier 🐰⌛", "Moditinou  de qualitey 🐰👌📌", "LAPIN SUPREME🐰🍕👑"].includes(r.name))){
                return true
            }else{
                message.member.createDM().then(function(channel){
                        return channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
                    }).catch(console.error)
                    var msg = message.member.toString() + "une personne a essayer de faire la commande /helpstaff !"
                    message.guild.channels.find(x => x.name === "log-staff").send(msg)
                    message.delete()
                return false
            }
        }
        return false
    }

    static action (message){
      var texte = "Pour commencer il y a : \r /bvn pour souhaiter la bienvenue aux nouveaux membres.Après la commande, vous pouvez mettre ce que vous voulez\r /role suivi de la mention de la personne en question pour pouvoir lui donner son grade 'Les lapereaux apeurés 🐰😟' et retirer 'Gibier de potence🐰🍖'\r les commande /pb et /endpb qui ajoute un role a la personne que vous aurez mentionner pour lui donner accés a un chanel (réglage de compte) pour régler une situation ou un problème et non a la vue de tous /pb pour lui donenr le role et /endpb pour lui rettirer"
      const embed = new Discord.RichEmbed()
        .setColor("#ED7F10")
        .addField("Voici les commande que vous pouvez utiliser", texte)
      message.guild.channels.find("name", "le-staf-de-roger-rabbit").send(embed)
    }
}