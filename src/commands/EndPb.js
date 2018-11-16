const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("endpb", AbstractCommand.Roles().LE_LIEVRE_DE_FEVRIER, AbstractCommand.Roles().MODITINOU_DE_QUALITEY, AbstractCommand.Roles().LAPIN_SUPREME)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        if(this.havePerm()){
            if(this.getFirstMentionMember() != null){
                return true;
            }
        } else {
            this._().noPerm();
            this._().warnAdmin()
            return false;
        }
    }

    action(message) {
        var membre = this.getFirstMentionMember()
        membre.removeRole(message.guild.roles.find("name", 'Lapin dissident🐰💀'))
        membre.addRole(message.guild.roles.find("name", "Les lapereaux apeurés 🐰😟"))
    }
    
}