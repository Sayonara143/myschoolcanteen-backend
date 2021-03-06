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
    return ClassModel.findOne({adminLogin: adminlogin},{__v:0,_id:0})
}
const findClassByClass = (numberClass) =>{
    return ClassModel.findOne({class: numberClass},{__v:0,_id:0})
}
const UpdateClassAdminLogin = (numberClass, adminLogin) => {
	return ClassModel.updateOne({class: numberClass},{adminLogin: adminLogin}, {upsert: false})
}
const deleteClassByClass = (numberClass) => {
    return ClassModel.deleteOne({class: numberClass})
}


export{ 
    createClass,
    findAllClass,
    findClassByAdminLogin,
    findClassByClass,
    UpdateClassAdminLogin,
    deleteClassByClass
}