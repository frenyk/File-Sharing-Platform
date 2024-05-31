const mongoose = require('mongoose')

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        const db_string = `mongodb+srv://vasunageshri:vasunageshri@filesharing.p6kja7n.mongodb.net/?retryWrites=true&w=majority&appName=FileSharing`
        mongoose.connect(db_string)
            .then(() => {
                console.log('[*] Connection to DB successful')
            })
            .catch(err => {
                console.error('[!] Error connecting to DB: ', err)
            })
    }
}

module.exports = new Database()
