import express,{json} from "express"
import mongoose from 'mongoose';
import cors from 'cors';
import CourseCategoryModel from './models/CourseCategoryModel.js'

const app = express();
app.use(express.json());
app.use(cors());

const Dburl = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/DivineTechSolutions";
mongoose.connect(Dburl)
.then(()=>{
    console.log('Connected Successfully');
})
.catch((err)=>{
    console.log(err);
});

app.get('/course-category', async (req, res)=>{
    const courseCategoryData = await CourseCategoryModel.find();
    res.json(courseCategoryData);
})

app.post('/add-course-category', async (req, res)=>{
    console.log(req.body);
    const insertedData = addData(req.body);
    res.json(insertedData)
})


app.listen('8888',()=>{
    console.log('Server is running on port 8888');
})

// Add Data 

function addData({newCategoryName, newCategoryDes}){
    const courseCategoryData = new CourseCategoryModel({
        Image: "",
        Description: newCategoryDes,
        CategoryID: "",
        CategoryName: newCategoryName,
        Topics: []
    })
    courseCategoryData.save();

    return courseCategoryData;

    console.log("Text: ", courseCategoryData);
    
}

// addData();
