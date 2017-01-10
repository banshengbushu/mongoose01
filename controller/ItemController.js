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

  insertItem(req, res, next) {
    const name = req.body.name;
    const password = req.body.password;
    items.create({name, password}, (err, item) => {
      if (err) {
        next(err)
      }
      res.sendStatus(201);
    })
  }

  removeItem(req, res, next) {
    const id = req.params.id;
    items.findOneAndRemove({_id: id}, (err, item) => {
      if (err) {
        next(err)
      }
      res.sendStatus(204);
    })
  }

  updateItem(req, res, next) {
    const id = req.params.id;
    const item = {$set: {name: req.body.name, password: req.body.password}};
    items.update({_id: id}, item, (err, item) => {
      if (err) {
        next(err)
      }
      res.sendStatus(204);
    });

  }
}
