import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var adminModel = new Schema({
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
        required: true
    },
    login:{
		type: String,
		required: true,

	},
	passwordHash: {
		type: String,
		required: true
	},
	salt:{
		type: String,
		required: true,

	},
	data: {
		type: Date,
		default: Date.now
	}
});





const AdminModel = mongoose.model('AdminModel', adminModel);


const createAdmin = (adminData) =>{
    const newAdminModel = new AdminModel({
        surname: adminData.surname,
        name: adminData.name,
        patronymic: adminData.patronymic,
        login: adminData.login,
        passwordHash: adminData.passwordHash,
        salt: adminData.salt,
    })
    return newAdminModel.save();
}


const findAdminByLogin = (login) => {

    return AdminModel.findOne({login: login}, {__v:0});
}
const deleteAdminByLogin =(login)=>{
    return AdminModel.deleteOne({login: login},{});
}


export{
    findAdminByLogin,
    createAdmin,
    deleteAdminByLogin,

}