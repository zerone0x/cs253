// TODO: Replace this with your solution.

const fs = require('fs')

var filename = process.argv[2]


fs.readFile(filename, function(err, contents){
    if (err){
        return console.log(err)
    }
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})

