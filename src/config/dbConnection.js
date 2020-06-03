const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9344260',
    password: 'CFZAhxC4iC',
    database: 'sql9344260'
  });
}