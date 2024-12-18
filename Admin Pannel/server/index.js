const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CourseCategoryModel = require('./models/CourseCategory')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/DivineTechSoutions")

app.get('/getCourseCategory', (req, res) => {
    CourseCategoryModel.find()
    .then(item => res.json(item))
    .catch(err => res.json(err))
    res.send(CourseCategoryModel.find().then((item)=> res.json(item)))
})

app.listen(3001, () => {
    console.log('Server is running');
    
})