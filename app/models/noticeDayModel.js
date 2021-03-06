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
        },
        login: {
            type: String,
            required: true,
        },
        ticket: {
            type: String,
            required: true,
        }
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
        user: noticeData.user,
        date: noticeData.date,
        adminLogin: noticeData.adminLogin,
        flag: noticeData.flag
    })
    return newNoticeDayModel.save();
}

const UpdateNotice = (list) => {
    return NoticeDayModel.updateOne({ user: list.user, date: list.date }, { user: list.user, flag: list.flag, adminLogin: list.adminLogin }, { upsert: false, multi: true })
}

const findAllNoticeUsers = (login) => {
    return NoticeDayModel.find({ Login: login }, { __v: 0, _id: 0 })
}
const findNoticeUser = (list) => {
    return NoticeDayModel.findOne({ user: list.user, date: list.date }, { __v: 0, _id: 0, user: 0, adminLogin: 0, date: 0 })
}

const findAllNoticeAdmin = (adminlogin, date) => {
    return NoticeDayModel.find({ adminLogin: adminlogin, date: date }, { __v: 0, _id: 0 })
}


export {
    createNotice,
    findAllNoticeUsers,
    findAllNoticeAdmin,
    UpdateNotice,
    findNoticeUser
}