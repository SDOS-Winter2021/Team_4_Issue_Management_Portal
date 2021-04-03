const express = require("express");
const router = express.Router();
const filters = require("../models/filters");

router.get("/addFilter", (req, res) => {
  
  var name = "Administration";
  var types = ["Academic Section","HOD","Program Coordinator","Placements","Hostel and Mess","Co-Curricular","Self Growth/Community Work","Finance","Student Mentorship Program"];
  const filter = new filters({
    
    Tags: name,
    Types:types
   
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



module.exports = router;
