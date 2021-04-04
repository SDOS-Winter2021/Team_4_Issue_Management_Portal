const express = require("express");
const router = express.Router();
const issues = require("../models/issues");

router.post("/addIssue", (req, res) => {
  var email = req.body.studentEmailID;
  var title = req.body.title;
  var desc = req.body.description;
  var likeArr = [];
  var comArr = [];
  var comments = [];
  var batch = req.body.batch;
  var dept = req.body.department;
  var prog = req.body.programs;
  var admin = req.body.administration;
  var public = true;
  var resolved = false;
  const issue = new issues({
    userEmail: email,
    Desc: desc,
    Title: title,
    Likes: { studEmail: likeArr },
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
    Tags: {
      Public: public,
      Resolved: resolved,
    },
    Archived: false,
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

router.get("/GetAllIssue", (req, res) => {
  issues
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/GetAllIssue/:id", (req, res) => {
  issues
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/Issue", (req, res) => {
  issues
    .find({ StudentID: 2 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/LikedIssue", (req, res) => {
  issues
    .find({ "Likes.studID": 2 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/CommentedIssue", (req, res) => {
  issues
    .find({ "Comments.userID": 2 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/FilteredIssue", (req, res) => {
  issues
    .find({
      "Filter.Batch": { $in: ["2019", "2018"] },
      "Filter.ProgType": "Btech",
    })
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/LikedIssue/:id", (req, res) => {
  issues
    .findByIdAndUpdate(req.params.id, {
      $push: { "Likes.studEmail": req.body.userEmail },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/CommentedIssue/:id", (req, res) => {
  issues
    .findByIdAndUpdate(req.params.id, {
      $push: {
        "Comments.comment": req.body.userComment,
        "Comments.userEmail": req.body.userEmail,
      },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/ResolveIssue/:id", (req, res) => {
  issues
    .findByIdAndUpdate(req.params.id, { "Tags.Resolved": true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
