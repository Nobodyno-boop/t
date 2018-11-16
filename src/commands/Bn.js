const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("bn", AbstractCommand.Roles().ALL)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        return true;
    }

    action(message) {
        var msg = [" part se coucher il(elle) vous dit bonne nuit ", " est parti(e) pour une bonne nuit de someil ", " est parti(e) pour une bonne nuit de someil "]
        msg.push(" est parti(e) pour une bonne nuit de someil ")
        msg.push(" est déjà parti compter les moutons ")
        msg.push(" chuuut ne le(la) révéiller pas demain il(elle) a une grosse journée de travail ")
        msg.push(" vous souhaite une bonne nuit ")
        msg.push(" est parti(e) au fond de ses drap ")
        msg.push(" s'endort debout il est temps pour lui(elle) d'aller se coucher ")
        var aleatoire = Math.floor(Math.random() * (msg.length - 1) + 1)
        var images = []
        images.push("https://media.giphy.com/media/40a35B9FrdgIWZuMzm/giphy.gif")
        images.push("https://cdn.discordapp.com/attachments/423134940876636180/512413101728202762/Sleep.gif")
        images.push("https://media.giphy.com/media/2Y7m0VNRsvcMItVzty/giphy.gif")
        images.push("https://media.giphy.com/media/4072gdroNKzVN21Xgv/giphy.gif")
        images.push("https://media.giphy.com/media/fjxOIPP3JwnBneiReU/giphy.gif")
        images.push("https://media.giphy.com/media/Y4qzbSTwprWVRIyZoc/giphy.gif")
        images.push("https://media.giphy.com/media/21QJ47gUcwxqbUK6k6/giphy.gif")
        images.push("https://media.giphy.com/media/1IdgpWwMFqedPlBlUE/giphy.gif")
        images.push("https://media.giphy.com/media/9G1oDle3Dab84wZ9q6/giphy.gif")
        images.push("https://media.giphy.com/media/1j8nQsJmeXv18mJHbZ/giphy.gif")
        images.push("https://media.giphy.com/media/7OXm7uDojGavUSB0hQ/giphy.gif")
        images.push("https://media.giphy.com/media/3WuYqchrvNUSqqbFWq/giphy.gif")
        images.push("https://media.giphy.com/media/5kF1QQNZ8NXwFV96Ba/giphy.gif")
        images.push("https://media.giphy.com/media/lIUaE4biLYxtiNobRl/giphy.gif")
        images.push("https://media.giphy.com/media/ZgRy29G28vLOUvBfWk/giphy.gif")
        var ale = Math.floor(Math.random() * (images.length - 1) + 1)
        var embed = this.DiscordEmbed()
            .setImage( images[ale] )
            .setColor("#0000FF")
            .setDescription(message.member.toString() + msg[aleatoire] ) 
        message.channel.send(embed)
    }
    
}