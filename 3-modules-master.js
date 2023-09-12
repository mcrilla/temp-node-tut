
// this file is the main for files 4 thru 7

// CommonJS - every file is module (by default)
// Modules - encapsulated code (only share minimum)

const names = require('./4-names-modules')
const sayHi = require('./5-utils-modules')
const data = require('./6-alt-modules')

require('./7-mindgrenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
