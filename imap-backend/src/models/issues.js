//tanya
const mongoose=require('mongoose')

const issueSchema = new mongoose.Schema({
    IssueID: {
        type :Number,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    StudentID: {
        type :Number,
        required:true,
        trim:true,
        index:true
    },
    Desc:{
    	type:String,
    	trim:true,
    	required:true
    },
    IssueTitle:{
        type:String,
        trim:true,
        required:true
    },
    Likes: {
        studID:[{type:Number}]
    },
    Comments:{
        userID:[{type:Number}],
        comment:[{type:String,unique:false}]
    },
    Filter:{
        Batch:[{type:String}],
        Dept: [{type:String}],
        ProgType:[{type:String}]
            // concernedDept:String,
    },
    Tags:{
        Public: Boolean,
        Resolved: Boolean
    },
    Archived:{
    	type:Boolean
    }

}, {timestamps:true});

module.exports = mongoose.model('Issue', issueSchema);
