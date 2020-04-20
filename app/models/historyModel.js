import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var historyModel = new Schema({
    login:{
		type: String,
		required: true,
    },
    balance:{
        type: Number,
        default: 0
    },
    adminLogin:{
        type: String,
        required: true,
    },
	data: {
		type: Date,
		default: Date.now
	}
});





const HistoryModel = mongoose.model('HistoryModel', historyModel);


const createHistory = (historyData) =>{
    const newHistoryModel = new HistoryModel({
        login: historyData.login,
        balance: historyData.balance,
        adminLogin: historyData.adminLogin
    })
    return newHistoryModel.save();
}


const findAllHistory = (login) =>{
    return HistoryModel.find({adminLogin: login},{__v:0,_id:0})
}


export{ 
    createHistory,
    findAllHistory,
}