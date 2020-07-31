import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var superAdminModel = new Schema({
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





const SuperAdminModel = mongoose.model('SuperAdminModel', superAdminModel);


const createSuperAdmin = (SuperAdminData) =>{
    const newSuperAdminModel = new SuperAdminModel({
        surname: SuperAdminData.surname,
        name: SuperAdminData.name,
        patronymic: SuperAdminData.patronymic,
        login: SuperAdminData.login,
        passwordHash: SuperAdminData.passwordHash,
        salt: SuperAdminData.salt,
    })
    return newSuperAdminModel.save();
}


const findSuperAdminByLogin = (login) => {

    return SuperAdminModel.findOne({login: login}, {__v:0});
}
const deleteSuperAdminByLogin =(login)=>{
    return SuperAdminModel.deleteOne({login: login},{});
}


export{
    findSuperAdminByLogin,
    createSuperAdmin,
    deleteSuperAdminByLogin,

}