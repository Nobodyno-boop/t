const AbstractCommand =  require("../AbstractCommand")

module.exports =  class CommandTest extends AbstractCommand {
    constructor(){
        super("commandName", AbstractCommand.Roles().ALL)
    }

    parse(message, label){
        super.parse(message, label)
    }

    match(message) {
        
    }

    action(message) {

    }
    
}