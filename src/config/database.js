const dotenv = require("dotenv")
dotenv.config()

// MySQL database configuration
const mysqlcon = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

// Connect to the database
mysqlcon.connect()
    .then(() => console.log('Database connected...'))
    .catch((err) => { console.log(err) })

module.exports = mysqlcon;