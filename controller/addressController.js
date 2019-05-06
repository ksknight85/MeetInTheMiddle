const db = require("../models");

module.exports = {
    create: function(req,res) {
        db.Address
            .create(req.body)
            .then(function(dbAddress) {
                return db.User.findOneAndUpdate({_id: req.params.id}, { $push: { address: dbAddress._id} }, {new:true});
            })
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Address
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findAll: function(req,res) {
        db.User
            .findById({_id: req.params.id})
            .populate("address")
            .then(user => res.json(user.address))
            
    },
}