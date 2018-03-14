const fs = require('fs')

function fsRead(filePath, callback) {
    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log('fs read err');
        } else {
            console.log('fs read data:', data);
            callback && callback(data)
        }
    })
}

function fsReadSync(filePath) {
    try {
        return fs.readFileSync(filePath)
    } catch (err) {
        console.log('fs read sync err');
        return -1
    }
}

function fsWrite(filePath, data, callback) {
    fs.writeFile(filePath, data, 'utf-8', function(err) {
        if (err) {
            console.log('fs write err')
            callback && callback(-1)
        } else {
            console.log('fs write ok')
            callback && callback(1)
        }
    })
}

function fsWriteSync(filePath, data) {
    try {
        fs.writeFileSync(filePath, data, 'utf-8')
        console.log('fs write sync ok')
        return 1
    } catch (err) {
        console.log('fs write sync err')
        return -1
    }
}

function fsStat(filePath, callback) {
    fs.stat(filePath, function(err, stat) {
        if (err) {
            callback && callback(-1)
        } else {
            console.log('fs stat ok')
            callback && callback(stat)
        }
    })
}

function fsStatSync(filePath) {
    try {
        return fs.statSync(filePath)
    } catch (err) {
        console.log('fs stat sync err')
        return -1
    }
}

module.exports = {
    fsRead,
    fsReadSync,
    fsWrite,
    fsWriteSync,
    fsStat,
    fsStatSync
}