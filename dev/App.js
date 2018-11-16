module.exports =  class App {
    constructor(commandLabel){
        this.commands = [];
        this.commandLabel = commandLabel;
    }


    addCommand(...command){
        command.forEach(e => this.commands.push(e))
    }
    
    parse(message) {
        if(message.content.startsWith(this.commandLabel)){
            this.commands.forEach(e => e.parse(message, this.commandLabel))
        }
    }
}

