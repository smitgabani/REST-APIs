const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// strictly const as due to hoisting in other module the value may get changed
const debugCode = false;

function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err) {
            console.error(err)
        }
    })
}

// @desc Acts as bodyParser
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    debugCode,
    writeDataToFile,
    getPostData
}