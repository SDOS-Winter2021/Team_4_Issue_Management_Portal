require('dotenv').config()
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const { response } = require('express');
const client = new OAuth2Client(process.env.GOOGLE_OAUTH);

exports.googlelogin = (req,res) => {

    const tokenId = req.body.tokenId;    
    client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_OAUTH}).then(response => {
        const {email_verified, name, email, hd} = response.payload;
        if(email_verified && hd == "iiitd.ac.in"){
            User.findOne({email}).exec((error, user) => {
                if(error){
                    return res.status(400).json({
                        message: "Something went wrong!"
                    })
                }
                else{
                    if(user){
                        console.log("existing user:",user)
                        res.json({user : user })
                    }
                    else{                          
                        const n_user = new User ({name,email});
                        n_user.save((error, data) => {
                            if(error){
                                console.log(error);
                                return res.status(400).json({
                                    message: error
                                });
                            }
                            
                            if(data){
                                console.log("new user:",data)
                                res.json({user : data })
                            }
                        })
                    }
                }
            })
        }
        else if (hd != "iiitd.ac.in"){
            console.log("Use iiitd account...!")
            return res.status(400).json({
                message: "Use iiitd account...!"
            });
        }
    });
    console.log();
}

exports.updateRole = (req,res) => {
    const newRole = req.body.newRole;
    const userId = req.body._id;
    User.findByIdAndUpdate(userId, {role: newRole})
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
    })
}

