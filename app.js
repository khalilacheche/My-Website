var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var BlogPost = require('./models/blogpost.model');
var postEdit={};
mongoose.connect('mongodb://khalilacheche:Macbook2012@ds135790.mlab.com:35790/blogcrud', function(err) {
  if (err) { throw err; }
});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


app.get('/',function (req,res) {
  BlogPost.find({})
  .exec(function(err, posts) {
    if(err) {
      res.send('error occured')
    } else {
      //console.log(posts);
      res.render('main',{posts:posts})
    }
  });
});

app.get('/newpost',function (req,res) {
      res.render('new')
});
app.get('/edit',function (req,res) {
  res.render('edit',{post:postEdit});
});

app.post('/insert',function (req,res) {
    var newpost = new BlogPost;
    newpost.title=req.body.title;
    newpost.content=req.body.content;
    newpost.save(function(err, post) {
  if(err) {
    res.redirect('/');
  } else {
    //console.log('Added: ');;
    //console.log(post);
  }
});
  res.redirect('/');
});
app.post('/delete/:id',function (req,res) {
  BlogPost.findOneAndRemove({
    _id: req.params.id
  }, function(err, post) {
    if(err) {
      res.redirect('/');
    } else {
      //console.log('Removed: ');
      //console.log(post);
    }
  });
  res.redirect('/');
});
app.post('/update/:id',function (req,res) {
  BlogPost.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { title: req.body.title, content:req.body.content }
  }, {upsert: true}, function(err, updatedPost) {
    if (err) {
      res.redirect('/');
    } else {
      //console.log(updatedPost);
    }
  });
  res.redirect('/');
});
app.post('/edit/:id',function (req,res) {
  BlogPost.findOne({_id: req.params.id})
  .exec(function(err, post) {
    if(err) {
      res.redirect('/');
    } else {
      console.log(post);
      postEdit= post;
      res.redirect('/edit');
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is ON!')
});
