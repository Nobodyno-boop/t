const Message = require('./Message')
const Role = require("./Role")
const Discord = require("discord.js")
module.exports =  class AbstractCommand {
    /**
     * Role it's a var
     * @param {String} command 
     * @param  {...role} role  
     */
    constructor(command, ...role) {
        this.role = role;
        this.command = command;
        this.message = null;
        this.ids = [];
        this.names = []
        role.forEach(e => this.names.push(e["name"]));
        role.forEach(e => this.ids.push(e["id"]));
        this.label = null;
    }

    parse(message, label){
        this.message = message;
        this.label = label;
        this.msgc = new Message(this.message, this.command, this.label)
        if(message.content.startsWith(label+this.command) && message.channel.type != 'dm'){
            if(this.match(message)){
                this.action(message);
            }
        }
    }

    static match(message) {}

    static action(message) {}

    havePerm(){
        let pass = false
        let t = this;
        this.role.forEach(e => {
            let o = this.message.member.roles.find(p => p.id == e.id)
            if(e.name == AbstractCommand.Roles().ALL.name){
              pass = true
            }
            if(o != null){
              pass = true
            }
  
        })
        return pass
    }

    _(){
        return this.msgc;
    }

    getAuthor(){
        this._().getAuthor()
    }

    getFirstMentionMember(){
        let m = this.message.mentions.members.first()
        if(typeof m == "undefined"){
            return null;
        } else {
            return m;
        }
    }

    static Roles(){
        return Role;
    }

    DiscordEmbed(){
        return new Discord.RichEmbed();
    }


}