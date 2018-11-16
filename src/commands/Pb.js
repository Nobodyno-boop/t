const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("pb", AbstractCommand.Roles().LE_LIEVRE_DE_FEVRIER, AbstractCommand.Roles().MODITINOU_DE_QUALITEY, AbstractCommand.Roles().LAPIN_SUPREME)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        if(this.havePerm()){
            if(this.getFirstMentionMember()!= null){
                return true
            }
        } else {
            this._().noPerm()
            this._().warnAdmin()
            return false;
        }
    }

    action(message) {
        var membre = this.getFirstMentionMember()
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