const fs = require('fs')

function fsReadStream(filePath, callback) {
    const read = fs.createReadStream(filePath, 'utf-8')
    let res = ''
    read.on('data', function(data) {
        console.log('fs read stream data:', data);
        res += data
    })
    read.on('end', function() {
        console.log('fa read stream end');
        callback && callback(res)
    })
    read.on('error', function(err) {
        console.log('fs read stream err:', err);
    })
}

function fsWriteStream(filePath, data, callback) {
    const write = fs.createWriteStream(filePath, 'utf-8')
    write.write(data)
    write.end(callback)
}

function fsPipe(filePath1, filePath2, otherData, callback) {
    try {
        const read = fs.createReadStream(filePath1)
        const write = fs.createWriteStream(filePath2)
        read.pipe(write, { end: !otherData })
        !otherData && callback && callback()
        otherData && read.on("end", function() {
                write.write(otherData)
                write.end(callback)
            })
    } catch (err) {
        callback && callback(-1)
    }
}

module.exports = {
    fsReadStream,
    fsWriteStream,
    fsPipe
}