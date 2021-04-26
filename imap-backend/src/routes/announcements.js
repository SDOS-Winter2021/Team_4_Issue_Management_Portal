const express = require("express");
const router = express.Router();
const announcements = require("../models/announcements");

router.post("/addAnnouncements", (req, res) => {
  var email = req.body.studentEmailID;
  var title = req.body.title;
  var desc = req.body.description;
  var comArr = [];
  var comments = [];
  var batch = req.body.batch;
  var dept = req.body.department;
  var prog = req.body.programs;
  var admin = req.body.administration;

  const issue = new announcements({
    userEmail: email,
    Desc: desc,
    Title: title,
    Comments: {
      userEmail: comArr,
      comment: comments,
    },
    Filter: {
      Batch: batch,
      Department: dept,
      Programs: prog,
      Administration: admin,
    },
  });
  issue
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/GetAllAnnouncements", (req, res) => {
  announcements
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/deleteAnnouncement/:id", (req, res) => {
  announcements
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/MyAnnouncements", (req, res) => {
  announcements
    .find({ AdminID: 2 })
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/CommentedAnnouncement", (req, res) => {
  announcements
    .find({ "Comments.userID": 2 })
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/FilteredAnnouncement", (req, res) => {
  batch = ["", "2018"];
  prog = ["", "Btech"];
  dept = ["", "CSE"];
  announcements
    .find({
      "Filter.Batch": { $in: batch },
      "Filter.Dept": { $in: dept },
      "Filter.ProgType": { $in: prog },
    })
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/CommentedAnnouncement/:id", (req, res) => {
  announcements
    .findByIdAndUpdate(req.params.id, {
      $push: {
        "Comments.comment": req.body.userComment,
        "Comments.userEmail": req.body.userEmail,
      },
    })
    .then((result) => {
      res.send(result);
      //res.render('page_name',{issues:result})
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
