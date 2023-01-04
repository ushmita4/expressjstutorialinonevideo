const express = require('express')
const path=require('path')
const router = express.Router()
const blogs=require('../data/blogs')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/blog', (req, res) => {
 // blogs.forEach(e=>{
   // console.log(e.title);
  //});
  res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/blogpost/:slug', (req, res) => {

  myblog=blogs.filter((e)=>{
   return e.slug==req.params.slug
  })
  console.log(myblog)
  res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})

module.exports = router