const db = require("../models");

module.exports = {
    findOne: function(req,res) {
        db.Address
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        db.Address
            .create(req.body)
            .then(function(dbAddress) {
                return db.User.findOneAndUpdate({}, { $push: { address: dbAddress._id} }, {new:true});
            })
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Address
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}