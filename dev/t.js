//////
////// THIS FILE I'TS ONLY FOR THE TEST !
//////
//////

const App = require("./App")
const cmdTest = require("./CommandTest")
let o = new App("/");
o.addCommand(new cmdTest())

module.exports = o
