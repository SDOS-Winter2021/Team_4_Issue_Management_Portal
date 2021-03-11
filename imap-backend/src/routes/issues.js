//tanya
const express=require('express')
const router=express.Router();
const issues=require('../models/issues');

router.get('/addIssue',(req,res) => {

	var studID=1
	var title="Midsem break"
	var desc="Extend Midsem break please"
	var likeArr=[1,3,21]
	var comArr=[2,3,21]
	var comments=["+1","Yes same issue","Dont Agree"]
	var batch=["2018","2019"]
	var dept=[]
	var prog=["Btech"]
	var public=true
	var resolved=false
    const issue=new issues({
    	IssueID:1,
    	StudentID: studID,
    	Desc:desc,
    	IssueTitle:title,
    	Likes: {studID:likeArr},
	    Comments:{
	        userID:comArr,
	        comment:comments
	    },
	    Filter:{
	    	Batch:batch,
	    	Dept: dept,
	    	ProgType:prog,
	    	// concernedDept:String,
	    },
	    Tags:{
	    	Public: public,
	    	Resolved: resolved
	    },
    	Archived:false
    })
    issue.save()
    .then((result)=>{
    	res.send(result)
    })
    .catch((err)=>{
    	console.log(err);
    });
});

router.get('/GetAllIssue',(req,res) => {
    issues.find().sort({createdAt:-1})
    .then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    })
});

router.get('/GetAllIssue/:id',(req,res)=>{
	issues.findByIdAndDelete(req.params.id)
	.then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/Issue',(req,res) => {
    issues.find({StudentID:2})
    .then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/LikedIssue',(req,res) => {
    issues.find({'Likes.studID':2})
    .then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/CommentedIssue',(req,res) => {
    issues.find({'Comments.userID':2})
    .then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/FilteredIssue',(req,res) => {
    issues.find({'Filter.Batch':{$in:['2019','2018']},'Filter.ProgType':'Btech'}).sort({createdAt:-1})
    .then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    })
});

router.get('/LikedIssue/:id',(req,res)=>{
	var lid=8
	issues.findByIdAndUpdate(req.params.id,{ $push: {'Likes.studID':lid}})
	.then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/CommentedIssue/:id',(req,res)=>{
	var c="Agreed yes."
	var cid=8
	issues.findByIdAndUpdate(req.params.id,{ $push: {'Comments.comment':c ,'Comments.userID':cid }})
	.then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

router.get('/ResolveIssue/:id',(req,res)=>{
	issues.findByIdAndUpdate(req.params.id,{'Tags.Resolved':true})
	.then((result)=>{
    	res.send(result)
    	//res.render('page_name',{issues:result})
    })
    .catch((err)=>{
    	console.log(err);
    }) 
});

module.exports=router