const express = require('express')
const path=require('path')
const app = express()
const port = 3000
/*const ushmitamiddleware=(req,res,next)=>{
    console.log(req);
    next();
}**/
app.use(express.static(path.join(__dirname,"public")))
//app.use(ushmitamiddleware)
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name)
})
app.get('/about', (req, res) => {
    //res.send('About Page!')
    //res.sendFile(path.join(__dirname, 'index.html'))
    //res.status(500)
    res.json({"ushmita":22});
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})