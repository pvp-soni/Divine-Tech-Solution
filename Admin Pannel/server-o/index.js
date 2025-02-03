import express, { json } from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/DivineTechSolutions?retryWrites=true&w=majority&appName=CourseCategory";
const CourseCategorySchema = mongoose.Schema({
    Image: String,
    Description: String,
    CategoryID: String,
    CategoryName: String,
    Topics: Array
})
const courseSchema = mongoose.Schema({
    CourseID: String,
    CourseName: String,
    Topics: Array
})
const contactSchema = mongoose.Schema({
    Email: String,
    Contact: Array,
    Address: String
})

// Connect MongoDB 
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected Successfully');
    
})
.catch((err)=>{
    console.log(err);
    
});


const CourseCategoryModel = mongoose.model('CourseCategoryModel',CourseCategorySchema,'CourseCategory');
const CourseModel = mongoose.model('CourseModel',courseSchema,'ShortTermCourses');
const contactModel = mongoose.model('contactModel',contactSchema,'Contact');

app.get('/course-category',async (req,res)=>{
    try {
        const data = await CourseCategoryModel.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
})
app.get('/course-category/:id',async (req,res)=>{
    try {
        const courseID = req.params.id;
        const data = await CourseCategoryModel.findById(courseID);
        res.json(data);
    } catch (error) {
        console.log(error+'<br>product not found');
    }
})
app.get('/contact', async (req, res)=>{
    try {
        const data = await contactModel.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
})


app.listen('8888', ()=>{
    console.log('server is running');
})