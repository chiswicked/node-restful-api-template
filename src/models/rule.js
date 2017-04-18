const db = require('../tools/db');
const ObjectId = require('mongodb').ObjectId;

class Rule {

  constructor(property, operator, value) {
    this.property = property;
    this.operator = operator;
    this.value = value;
  }

  static get collectionName() { return 'rule'; }

  static all(callback) {
    db.get().collection(Rule.collectionName).find().toArray(callback);
  }

  static get(taskId, callback) {
    db.get().collection(Rule.collectionName)
      .find({ _id: new ObjectId(taskId) }).limit(1)
      .next(callback);
  }

  static add(newTask, callback) {
    const found = function (err, task) {
      if (task) {
        callback(new Error('duplicate task'));
      } else {
        db.get().collection(Rule.collectionName).insertOne(newTask, callback);
      }
    };

    if (this.validate(newTask)) {
      db.get().collection(Rule.collectionName)
        .find(newTask).limit(1)
        .next(found);
    } else {
      callback(new Error('unable to add task'));
    }
  }

  static delete(taskId, callback) {
    const handleDelete = function (err, result) {
      if (result.deletedCount !== 1) {
        callback(new Error(`unable to delete task with id: ${taskId}`));
      } else {
        callback(null);
      }
    };

    db.get().collection(Rule.collectionName)
      .deleteOne({ _id: new ObjectId(taskId) }, Rule.collectionName);
  }
}

module.exports.Rule = Rule;
