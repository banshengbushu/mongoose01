var items = require('../models/items');

export default class ItemController {
  getAll(req, res, next) {
    items.find({}, (err, items) => {
      if (err) {
        return next(err);
      }
      res.send(items);
    });
  }

  getItem(req, res, next) {
    items.findOne({name: "xiaowang"}, (err, item) => {
      if (err) {
        return next(err);
      }
      res.send(item);
    })
  }
}
