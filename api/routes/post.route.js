const express = require('express');
const postRoutes = express.Router();

var runWandbox = require('wandbox-api');

let Post = require('../models/post.model');

postRoutes.route('/add').post((req,res) => {
  let post = new Post(req.body)
  console.log(post)
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'})
    })
    .catch(() => {
      res.status(400).send('unable to save to database')
    })
})



postRoutes.route('/code').post((req,res) => { //
  let post = new Post(req.body)
  console.log(post)
  post.save()
    .then(() => {
      var lang
      var mode = post['mode']
      if(mode=='text/javascript'){
        lang = 'nodejs-head'
      }else if(mode=='go'){
        lang = 'go-1.13.4'
      }else if(mode=='text/x-java'){
        lang = 'openjdk-head'
      }else if(mode=='text/x-c++src'){
        lang = 'gcc-head'
      }else if(mode=='text/x-csrc') {
        lang = 'gcc-head-c'
      }else if(mode=='python') {
        lang = 'cpython-head'
      }else if(mode=='sql') {
        lang = 'sqlite-head'
      }else if(mode=='php') {
        lang = 'php-head'
      }else if(mode=='r') {
        lang = 'r-head'
      }
      runWandbox.fromString( post['text'], {'compiler':lang},function clbk(error, results){
        if(error){
          res.status(400).send(error.message)
          //throw new Error(error.message);
        }
        var response = JSON.parse(JSON.stringify(results));
        console.log('output:')
        console.log(response['program_message'])
        var result = {}
        result['status'] = response['status'];
        result['message'] = response['program_message']
        if (result['message'] === undefined) {
          result['message'] = response['compiler_message']
        }
        post['result'] = result;

        res.status(200).json(post)
      });
    })
    .catch(() => {
      res.status(400).send('unable to save to database')
    })
})

postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json(err)
    } else {
      res.json(posts)
    }
  })
})

postRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id
  Post.findById(id, (err, post) => {
    if (err) {
      res.json(err)
    } else {
      res.json(post)
    }
  })
})

postRoutes.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).send('data is not found')
    } else {
      post.title = req.body.title
      post.body = req.body.body
      post.save().then(() => {
        res.json('Update complete')
      })
      .catch(() => {
        res.status(400).send('unable to upate the database')
      })
    }
  })
})

postRoutes.route('/delete/:id').delete((req, res) => {
  Post.findByIdAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      res.json(err)
    } else {
      res.json('Successfully removed')
    }
  })
})

module.exports = postRoutes
