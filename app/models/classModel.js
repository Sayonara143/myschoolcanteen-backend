import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var classModel = new Schema({
    class:{
		type: String,
		required: true,
    },
    adminLogin:{
        type: String,
        required: true,
    },
	date: {
		type: Date,
		default: Date.now
    }
});





const ClassModel= mongoose.model('ClassModel', classModel);


const createClass = (classData) =>{
    const newClassModel = new ClassModel({
        class: classData.class,
        adminLogin: classData.adminLogin,
        date: classData.date
    })
    return newClassModel.save();
}


const findAllClass = () =>{
    return ClassModel.find({},{__v:0,_id:0})
}
const findClassByAdminLogin = () =>{
    return ClassModel.find({adminLogin: adminlogin},{__v:0,_id:0})
}
const findClassByClass = (numberClass) =>{
    return ClassModel.find({class: numberClass},{__v:0,_id:0})
}
const findAllNoticeAdmin = (adminlogin,date) =>{
    return ClassModel.find({adminLogin: adminlogin, date: date},{__v:0,_id:0})
}


export{ 
    createClass,
    findAllClass,
    findClassByAdminLogin,
    findClassByClass,
    findAllNoticeAdmin
}