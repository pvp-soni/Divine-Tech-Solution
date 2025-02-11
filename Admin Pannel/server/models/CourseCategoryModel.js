import mongoose from "mongoose"

const CourseCategorySchema = mongoose.Schema({
    Image: String,
    Description: String,
    CategoryID: String,
    CategoryName: String,
    Topics: Array
})

const CourseCategoryModel = mongoose.model('CourseCategoryModel', CourseCategorySchema, 'CourseCategory');

export default CourseCategoryModel;