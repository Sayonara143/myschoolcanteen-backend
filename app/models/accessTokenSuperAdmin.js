import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const expirationTime = 3600 * 1000;
const getExpirationTime = () => {
    return Date.now() + expirationTime ; 
}
// Schemas
var accesToken = new Schema({
	value: {
		type: String,
        required: true,
	},
	createdAt: {
		type: Date,
        required: true,
        default: Date.now,
        expires: expirationTime/1000,
    },
    expireSet:{
        type: Date,
        default: getExpirationTime
    },
    superAdmin:{
        type: String,
    }
});




const AccesToken = mongoose.model('AccesTokenSuperAdmin', accesToken);


const create = (token, superAdminLogin) =>{
    const newAccesToken = new AccesToken({
        value: token,
        superAdmin: superAdminLogin
    })
    return newAccesToken.save();
}


const findByValue = (value) => {

    return AccesToken.findOne({value:value}, {});
}
const deleteBySuperAdminLogin =(login)=>{
    return AccesToken.deleteOne({superAdmin: login},{});
}


export{
    findByValue,
    create,
    deleteBySuperAdminLogin,

}