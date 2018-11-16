const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("kiss", AbstractCommand.Roles().ALL)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        if(this.getFirstMentionMember() == null){
            message.reply("Tu dois m'entionner quelqu'un pour faire cette commande").catch(console.error)            
            return false;
        } else {
            return true;
        }
    }

    action(message) {
    var membre = this.getFirstMentionMember()
    var msg = [" embrasse ", " colle ses lèvres à "]
    var aleatoire = Math.floor(Math.random() * (msg.length - 1) + 1)
    var images = []
    images.push("https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif")
    images.push("https://media.giphy.com/media/Z2sivLSfN8FH2/giphy.gif")
    images.push("https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif")
    images.push("https://media.giphy.com/media/tZmWHlQT36oZW/giphy.gif")
    var ale = Math.floor(Math.random() * (images.length - 1) + 1)
    var embed = this.DiscordEmbed()
        .setImage( images[ale] )
        .setColor("#0000FF")
        .setDescription(message.member.toString() + msg[aleatoire] + membre.toString()) 
    message.channel.send(embed)

    }
    
}