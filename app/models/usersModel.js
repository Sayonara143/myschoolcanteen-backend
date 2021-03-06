import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var usersModel = new Schema({
	surname: {
		type: String,
		required: true
	},
	name: {
		type: String,
        required: true,
    },
    patronymic:{
        type: String,
        required: true,
    },
    login:{
		type: String,
		required: true,

    },
    admin:{
        type: String,
        required: true,
    },
	passwordHash: {
		type: String,
		required: true
    },
    balance:{
        type: Number,
        default: 0
    },
	salt:{
		type: String,
		required: true,

    },
    ticket:{
        type:String,
        required:true,
    },
	date: {
		type: Date,
		default: Date.now
	}
});





const UsersModel = mongoose.model('UsersModel', usersModel);


const createUsers = (usersData) =>{
    const newUsersModel = new UsersModel({
        surname: usersData.surname,
        name: usersData.name,
        patronymic: usersData.patronymic,
        login: usersData.login,
        admin: usersData.admin,
        ticket: usersData.ticket,
        passwordHash: usersData.passwordHash,
        salt: usersData.salt,
    })
    return newUsersModel.save();
}


const findUserByLogin = (login) => {

    return UsersModel.findOne({login: login}, {});
}
const findAllUsers = (admin) =>{
    return UsersModel.find({admin: admin},{__v:0, passwordHash:0,salt:0})
}
const deleteUserByLogin =(login)=>{
    return UsersModel.deleteOne({login: login},{});
}
const UpdateUsersBalance = (login,balance) => {
	return UsersModel.updateOne({login:login},{balance:balance}, {upsert: false})
}

// settings change users
const UpdateUsersPasswordHashSalt = (login, passwordHash, salt) => {
	return UsersModel.updateOne({login:login},{passwordHash:passwordHash,salt:salt }, {upsert: false, multi: true})
}
const deleteUsersByLogin = (login) => {
    return UsersModel.deleteOne({login: login})
}



export{
    UpdateUsersBalance,
    findAllUsers,
    findUserByLogin,
    createUsers,
    deleteUserByLogin,
    //settings users change
    UpdateUsersPasswordHashSalt,
    deleteUsersByLogin
}