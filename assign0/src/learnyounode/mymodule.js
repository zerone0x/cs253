// TODO: Replace this with your solution.
var fs = require('fs')
var path = require('path')

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err)
        }
        var filtered = files.filter(function (file) {
            return path.extname(file) === '.' + extension
        })
        return callback(null, filtered)
    })
}