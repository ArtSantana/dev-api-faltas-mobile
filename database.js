const DataStore = require('nedb');

database = new DataStore({filename: './subject.db', autoload: true})

module.exports = database;