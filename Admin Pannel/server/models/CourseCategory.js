const mongoose = require('mongoose')

const CourseCategorySchema = new mongoose.Schema({
    Image: String,
    Description: String,
    CategoryId: String,
    CategoryName: String
})

const CourseCategoryModel = mongoose.model("CourseCategory", CourseCategorySchema)

module.exports = CourseCategoryModel