import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var directorModel = new Schema({
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





const DirectorModel = mongoose.model('DirectorModel', directorModel);


const createDirector = (directorData) =>{
    const newDirectorModel = new DirectorModel({
        surname: directorData.surname,
        name: directorData.name,
        patronymic: directorData.patronymic,
        login: directorData.login,
        passwordHash: directorData.passwordHash,
        salt: directorData.salt,
    })
    return newDirectorModel.save();
}


const findDirectorByLogin = (login) => {

    return DirectorModel.findOne({login: login}, {__v:0});
}
const deleteDirectorByLogin =(login)=>{
    return DirectorModel.deleteOne({login: login},{});
}


export{
    findDirectorByLogin,
    createDirector,
    deleteDirectorByLogin,

}