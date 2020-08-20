import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var noticeDayModel = new Schema({
    user: {
        type: Object,
        required: true,
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        patronymic: {
            type: String,
            required: true,
        }
    },
    login: {
        type: String,
        required: true,
    },
    adminLogin: {
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





const NoticeDayModel = mongoose.model('NoticeDayModel', noticeDayModel);


const createNotice = (noticeData) => {
    const newNoticeDayModel = new NoticeDayModel({
        login: noticeData.login,
        date: noticeData.date,
        adminLogin: noticeData.adminLogin,
        flag: noticeData.flag
    })
    return newNoticeDayModel.save();
}


const findAllNoticeUsers = (login) => {
    return NoticeDayModel.find({ Login: login }, { __v: 0, _id: 0 })
}
const findAllNoticeAdmin = (adminlogin, date) => {
    return NoticeDayModel.find({ adminLogin: adminlogin, date: date }, { __v: 0, _id: 0 })
}


export {
    createNotice,
    findAllNoticeUsers,
    findAllNoticeAdmin
}