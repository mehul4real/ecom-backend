const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    port:3306,
    user: 'sql12609039',
    password: '9lCjec5xld',
    database: 'sql12609039',
    insecureAuth : false
})