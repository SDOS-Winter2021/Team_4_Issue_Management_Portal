const express = require("express");
const router = express.Router();
const filters = require("../models/filters");

router.post("/addFilter", (req, res) => {
  
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

router.post("/GetFilters", (req, res) => {
  filters
    .find()
    .then((result) => {
      
      for(var i=0;i<result.length;i++){
        if(result[i].Tags=="Batch"){
          batch=result[i].Types
        }
        else if(result[i].Tags=="Department"){
          department=result[i].Types
        }
        else if(result[i].Tags=="Programs"){
          programs=result[i].Types
        }
        else{
          administration=result[i].Types
        }
      }
      res.json({
        batch:batch,
        department:department,
        programs:programs,
        administration:administration
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
