const express = require('express')
const path=require('path')
const router = express.Router()
const blogs=require('../data/blogs')

router.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname,'../templates/index.html'))
  res.render('home');
})
router.get('/blog', (req, res) => {
 // blogs.forEach(e=>{
   // console.log(e.title);
  //});
  //res.sendFile(path.join(__dirname,'../templates/index.html'))
  res.render('bloghome',{blogs:blogs});
})
router.get('/blogpost/:slug', (req, res) => {

  myblog=blogs.filter((e)=>{
   return e.slug==req.params.slug
  })
  console.log(myblog)
  //res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
  res.render('blogpage',{
    title:myblog[0].title,
    content:myblog[0].content,
  });
})

module.exports = router