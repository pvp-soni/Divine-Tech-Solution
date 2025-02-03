import express,{json} from "express"
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const Dburl = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/";
const connectionString = mongoose.connect(Dburl, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema 

const CourseCategorySchema = mongoose.Schema({
    Image: String,
    Description: String,
    CategoryID: String,
    CategoryName: String,
    Topics: Array
})

// Models 

const CourseCategoryModel = mongoose.model('CourseCategoryModel',CourseCategorySchema,'CourseCategory');

CourseCategoryModel.

console.log('success', data);
