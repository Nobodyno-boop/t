const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("helpstaff", AbstractCommand.Roles().LE_LIEVRE_DE_FEVRIER, AbstractCommand.Roles().MODITINOU_DE_QUALITEY, AbstractCommand.Roles().LAPIN_SUPREME)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        if(this.havePerm()){
            return true;
        } else {
            this._().noPerm();
            this._().warnAdmin()
            return false;
        }
    }

    action(message) {
        var texte = "Pour commencer il y a : \r /bvn pour souhaiter la bienvenue aux nouveaux membres.Après la commande, vous pouvez mettre ce que vous voulez\r /role suivi de la mention de la personne en question pour pouvoir lui donner son grade 'Les lapereaux apeurés 🐰😟' et retirer 'Gibier de potence🐰🍖'\r les commande /pb et /endpb qui ajoute un role a la personne que vous aurez mentionner pour lui donner accés a un chanel (réglage de compte) pour régler une situation ou un problème et non a la vue de tous /pb pour lui donenr le role et /endpb pour lui rettirer"
        const embed = this.DiscordEmbed()
          .setColor("#ED7F10")
          .addField("Voici les commande que vous pouvez utiliser", texte)
        message.guild.channels.find("name", "le-staf-de-roger-rabbit").send(embed)
    }
    
}