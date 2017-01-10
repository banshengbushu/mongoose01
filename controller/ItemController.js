var items = require('../models/items');

export default class ItemController {
  getAll(req, res, next) {
    items.find({}, (err, items) => {
      if (err) {
        return next(err);
      }
      res.send({items});
    });
  }
}
