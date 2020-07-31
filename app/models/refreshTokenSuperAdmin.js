import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const expirationTime = 1209600 * 1000;
const getExpirationTime = () => {
    return Date.now() + expirationTime ; 
}
// Schemas
var refreshToken = new Schema({
	value: {
		type: String,
		required: true
	},
	createdAT: {
		type: Date,
        required: true,
        default: Date.now,
        expires: expirationTime/1000,
    },
    expireSet:{
        type: Date,
        value: getExpirationTime
    },
    superAdmin:{
        type: String,
    }
});




const RefreshToken = mongoose.model('RefreshTokenSuperAdmin', refreshToken);


const create = (token, superAdminLogin) =>{
    const newRefreshToken = new RefreshToken({
        value:token,
        superAdmin: superAdminLogin
    })
    return newRefreshToken.save();
}


const findByValue = (value) => {
    return RefreshToken.findOne({value:value}, {});
}
const deleteBySuperAdminLogin =(login)=>{
    return RefreshToken.deleteOne({superAdmin: login},{})
}
export{
    findByValue,
    deleteBySuperAdminLogin,
    create,
}