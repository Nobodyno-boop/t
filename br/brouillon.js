const AbstractCommand =  require("../src/AbstractCommand")
module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("bvn", AbstractCommand.Roles().LAPIN_SUPREME, AbstractCommand.Roles().MODITINOU_DE_QUALITEY, AbstractCommand.Roles().LE_LIEVRE_DE_FEVRIER)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        if(this.havePerm()){
            return true
        } else {
            this._().warnAdmin()
            this._().noPerm()
            return false;
        }

        
    }

    action(message) {
      var texte = "Salut à toi et bienvenue sur le Clapier !\rMerci d'avoir rejoins notre discord. Tout d’abord je te demanderai de lire les règles qui se trouvent dans « les lois de smoky rabbit » .\rEnsuite, comme tu peux le voir tu n’as accès pour le moment qu’à une petite partie du serveur. Pour avoir accès à l'entièreté du discord, il va falloir te présenter :\rNous ne demandons aucunes informations personnelles, tu peux dire ce que tu veux, mais on en demande un minimum : ce que tu fais dans la vie et tes passions. (Une bonne présentation est toujours appréciée).\rUne fois que le staff aura lu ta présentation, celui-ci te donnera la possibilité d'avoir accès à tout le serveur. N'hésite pas à mentionner @Hrodvitnir_Fenrir si aucun membre du staff ne te répond."
      const embed = this.DiscordEmbed()
        .setColor("#ff0000")
        .addField("Salut  à toi et bienvenue sur le Clapier!", texte)
      message.guild.channels.find("name", "peppy-hare-vous-surveille").send(embed)

    }
    
}