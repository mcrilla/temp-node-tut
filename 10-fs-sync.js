const {readFileSync,writeFileSync} = require('fs')
console.log('start')
// const fs = require('fs')      <- this is the same thing, the line above was just destructured 
// fs.readFileSync

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // this appends rather than overwrite
    )
console.log('done with this task')
console.log('starting the next one')

