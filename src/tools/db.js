const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: null,

  get() {
    return this.connection;
  },

  close() {
    this.connection.close();
    this.connection = null;
  },

  connect(dbname, callback) {
    const self = this;

    const cacheConnection = (error, db) => {
      self.connection = db;
      callback(error);
    };

    try {
      MongoClient.connect(dbname, cacheConnection);
    } catch (exception) {
      cacheConnection(exception);
    }
  },
};
