const express = require('express')
const postRoutes = express.Router()

let Post = require('./post.model')

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
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'})
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
