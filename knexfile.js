require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    }
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    }
  },
};