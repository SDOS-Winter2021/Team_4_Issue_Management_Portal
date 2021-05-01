require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { response } = require("express");
const client = new OAuth2Client(process.env.GOOGLE_OAUTH);
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "no-reply-issuemanagement@iiitd.ac.in",
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});

exports.googlelogin = (req, res) => {
  const tokenId = req.body.tokenId;
  client
    .verifyIdToken({ idToken: tokenId, audience: process.env.GOOGLE_OAUTH })
    .then((response) => {
      const { email_verified, name, email, hd } = response.payload;
      if (email_verified && hd == "iiitd.ac.in") {
        User.findOne({ email }).exec((error, user) => {
          if (error) {
            return res.json({
              message: "Something went wrong!",
            });
          } else {
            if (user) {
              console.log("existing user:", user);
              res.json({ message: "Successful", user: user });
            } else {
              const n_user = new User({ name, email });
              n_user.save((error, data) => {
                if (error) {
                  console.log(error);
                  return res.json({
                    message: "Something went wrong!",
                  });
                }

                if (data) {
                  console.log("new user:", data);
                  res.json({ message: "Successful", user: data });
                }
              });
            }
          }
        });
      } else if (hd != "iiitd.ac.in") {
        console.log("Use iiitd account...!");
        return res.json({
          message: "Use IIIT-D account!",
        });
      }
    });
  console.log();
};

exports.updateRole = (req, res) => {
  const newRole = req.body.newRole;
  User.findOneAndUpdate({ email: req.body.email }, { role: newRole })
    .then((result) => {
      var mail = {
        from: "no-reply-issuemanagement@iiitd.ac.in",
        to: req.body.email.trim(),
        subject: "User Access Updated - IMAP",
        text:
          "Hi there,\n Your role has been updated to " +
          newRole +
          " by the admins." +
          " \n\n ------------------------ \n Issue Management Portal (IMAP)",
      };

      transport.sendMail(mail, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("email send: " + info.response);
        }
      });
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
