const express = require("express");
const router = express.Router();
const filters = require("../models/filters");

router.post("/AddFilters", (req, res) => {
  var name = req.body.name;
  var types = req.body.types;
  filters
    .findOneAndUpdate(
      { Tags: name },
      {
        $push: {
          Types: types,
        },
      }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/DeleteFilters", (req, res) => {
  var name = req.body.name;
  var types = req.body.types;
  filters
    .findOneAndUpdate(
      { Tags: name },
      {
        $pull: {
          Types: types,
        },
      }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/GetFilters", (req, res) => {
  filters
    .find()
    .then((result) => {
      var filters = {};
      for (var i = 0; i < result.length; i++) {
        filters[result[i].Tags] = result[i].Types;
      }
      res.json(filters);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
