const express = require("express");
const router = express.Router();
const announcements = require("../models/announcements");

router.get("/addAnnouncements", (req, res) => {
  var adminID = 1;
  var title = "Midsem break";
  var desc = "Midsem break extended";
  var comArr = [2, 3, 21];
  var comments = ["Thanks", "+1", "+1"];
  var batch = ["2018", "2019"];
  var dept = [""];
  var prog = ["Btech"];

  const announcement = new announcements({
    AnnouncementID: 12,
    AdminID: adminID,
    Desc: desc,
    AnnouncementTitle: title,
    Comments: {
      userID: comArr,
      comment: comments,
    },
    Filter: {
      Batch: batch,
      Dept: dept,
      ProgType: prog,
      // concernedDept:String,
    },
  });
  announcement
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

router.get("/DeleteAnnouncements/:id", (req, res) => {
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

router.get("/CommentedAnnouncement/:id", (req, res) => {
  var c = "Agreed yes.";
  var cid = 8;
  announcements
    .findByIdAndUpdate(req.params.id, {
      $push: { "Comments.comment": c, "Comments.userID": cid },
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
