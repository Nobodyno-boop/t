
module.exports =  class Message {
    
    constructor(message, name, label){
        this.message = message;
        this.label = label;
        this.name = name;
        this.msg = {
            "noperm": "Vous n'avez pas la permission d'utiliser cette commande !",
            "command_try": "une personne a essayer de faire la commande {cmdLabel}{cmdName} !"
        }
    }

    warnAdmin(){
        let msg = this.msg.command_try.replace("{cmdLabel}", this.label).replace("{cmdName}",this.name)
        this.message.guild.channels.find(x => x.name === "log-staff").send(this.getAuthor().toString() +msg)
        this.message.delete()
    }

    getAuthor(){
        return this.message.member;
    }

    noPerm(){
        let e = this;
        this.getAuthor().createDM().then(function(channel){
            return channel.send(e.msg.noperm)
        }).catch(console.error)
    }


}
