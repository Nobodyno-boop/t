const Commands = require('./commands')
const Discord = require('discord.js')

module.exports = class Test extends Commands{

    static match (message){
        if(message.content.startsWith('/bvn') && message.channel.type != 'dm'){
          // hey test //
            if(message.member.roles.some(r=>["Le lievre de Fevrier 🐰⌛", "Moditinou  de qualitey 🐰👌📌", "LAPIN SUPREME🐰🍕👑"].includes(r.name))){
                return true
            }else{
                message.member.createDM().then(function(channel){
                        return channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
                    }).catch(console.error)
                    var msg = message.member.toString() + "une personne a esseyer de faire la commande /bvn !"
                    message.guild.channels.find(x => x.name === "log-staff").send(msg)
                    message.delete()
                return false
            }
        }
        return false
    }

    static action (message){
      var membre = message.mentions.members.first()
      var texte = "Salut à toi et bienvenue sur le Clapier !\rMerci d'avoir rejoins notre discord. Tout d’abord je te demanderai de lire les règles qui se trouvent dans « les lois de smoky rabbit » .\rEnsuite, comme tu peux le voir tu n’as accès pour le moment qu’à une petite partie du serveur. Pour avoir accès à l'entièreté du discord, il va falloir te présenter :\rNous ne demandons aucunes informations personnelles, tu peux dire ce que tu veux, mais on en demande un minimum : ce que tu fais dans la vie et tes passions. (Une bonne présentation est toujours appréciée).\rUne fois que le staff aura lu ta présentation, celui-ci te donnera la possibilité d'avoir accès à tout le serveur. N'hésite pas à mentionner @Hrodvitnir_Fenrir si aucun membre du staff ne te répond."
      const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Salut  à toi et bienvenue sur le Clapier!", texte)
      message.guild.channels.find("name", "peppy-hare-vous-surveille").send(embed)
    }
}