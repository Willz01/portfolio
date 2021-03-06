const express = require('express')
const axios = require('axios')
const path = require('path')

const PORT = 5600

const app = express()
app.use(express.json())



// index, home, education, skills, ....
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'frontend', 'public')))



app.use('/', express.static(path.join(__dirname, 'frontend', 'public')))

app.use('/home', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/home.html'))
})

app.use('/interests', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/interests.html'))
})

app.use('/skills', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/skills.html'))
})

app.use('/about', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/about.html'))
})

app.use('/projects', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/projects.html'))
})
app.use('/education', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/frontend/public/views/education.html'))
})




app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
})