const express = require("express");
const router = express.Router();
const filters = require("../models/filters");

router.get("/addFilter", (req, res) => {
  var name = "Administration";
  var types = [
    "Academic Section",
    "HOD",
    "Program Coordinator",
    "Placements",
    "Hostel and Mess",
    "Co-Curricular",
    "Self Growth/Community Work",
    "Finance",
    "Student Mentorship Program",
  ];
  const filter = new filters({
    Tags: name,
    Types: types,
  });
  filter
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/AddFilters", (req, res) => {
  var name = "Batch";
  var types = "2021"
  filters
    .findOneAndUpdate({'Tags':name},{
      $push: {
        "Types": types,
      },
    })
    .then((result) => {
      res.send(result)
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
