import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var noticeDayModel = new Schema({
    login:{
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
    },
    flag: {
        type: Boolean,
        requred: true
    }
});





const NoticeDayModel= mongoose.model('NoticeDayModel', noticeDayModel);


const createNotice = (noticeData) =>{
    const newHistoryModel = new HistoryModel({
        login: noticeData.login,
        date: noticeData.date,
        adminLogin: noticeData.adminLogin,
        flag: noticeData.flag
    })
    return newHistoryModel.save();
}


const findAllNoticeUsers = (login) =>{
    return HistoryModel.find({Login: login},{__v:0,_id:0})
}
const findAllNoticeAdmin = (adminlogin,date) =>{
    return HistoryModel.find({adminLogin: adminlogin, date: date},{__v:0,_id:0})
}


export{ 
    createNotice,
    findAllNoticeUsers,
    findAllNoticeAdmin
}