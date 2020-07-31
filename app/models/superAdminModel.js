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


const createSuperAdmin = (SuperadminData) =>{
    const newSuperAdminModel = new SuperAdminModel({
        surname: SuperadminData.surname,
        name: SuperadminData.name,
        patronymic: SuperadminData.patronymic,
        login: SuperadminData.login,
        passwordHash: SuperadminData.passwordHash,
        salt: SuperadminData.salt,
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