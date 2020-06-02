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
    numberPhone:{
        type:String,
        required: true,
    },
    ticket:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        default:"image/usersmall.png"
    },
    email:{
        type:String,
        default: "Отсутствует"
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
        numberPhone: usersData.numberPhone,
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
const UpdateUsersEmail = (login,email) => {
	return UsersModel.updateOne({login:login},{email:email}, {upsert: false})
}
//const UpdateUsersName = (login,name) => {
	//return UsersModel.updateOne({login:login},{name: name}, {upsert: false})
//}
//const UpdateUsersSurname = (login,surname) => {
	//return UsersModel.updateOne({login:login},{surname:surname}, {upsert: false})
//}
//const UpdateUsersPatronymic = (login,patronymic) => {
	//return UsersModel.updateOne({login:login},{patronymic:patronymic}, {upsert: false})
//}
const UpdateUsersNumberPhone = (login, numberPhone) => {
	return UsersModel.updateOne({login:login},{numberPhone:numberPhone}, {upsert: false})
}
const UpdateUsersPath = (login,path) => {
	return UsersModel.updateOne({login:login},{path:path}, {upsert: false})
}
const UpdateUsersPasswordHashSalt = (login, passwordHash, salt) => {
	return UsersModel.updateOne({login:login},{passwordHash:passwordHash,salt:salt }, {upsert: false, multi: true})
}



export{
    UpdateUsersBalance,
    findAllUsers,
    findUserByLogin,
    createUsers,
    deleteUserByLogin,
    //settings users change
    UpdateUsersEmail,
    //UpdateUsersName,
    //UpdateUsersSurname,
    //UpdateUsersPatronymic,
    UpdateUsersNumberPhone,
    UpdateUsersPath, 
    UpdateUsersPasswordHashSalt
}