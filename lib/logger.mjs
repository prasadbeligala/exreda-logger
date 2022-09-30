import path from 'path'
import fs from 'fs'

async function log(msg, type) {

    const logTime = new Date().toLocaleString()
    const __dirname = path.resolve()
    const logPath = path.join(__dirname, '/logs')

    if (!fs.existsSync(logPath)) {
        fs.mkdir(logPath, (e) => {
            if (e) { console.log(e) }
        })
    }

    fs.writeFile(`${__dirname}/logs/${type}.log`, `[${logTime}] "${msg}" \n`, { flag: 'a+' }, (err) => {
        if (err) { console.log('File write error: ', err) }
    })
}

//Log info messages
const info = (msg) => {
    log(msg, 'info')
}

//Log warn messages
const warn = (msg) => {
    log(msg, 'warn')
}

//Log error messages
const error = (msg) => {
    log(msg, 'error')
}

export default { info, warn, error }
