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
    admin:{
        type: String,
    }
});




const RefreshToken = mongoose.model('RefreshTokenAdmin', refreshToken);


const create = (token, adminLogin) =>{
    const newRefreshToken = new RefreshToken({
        value:token,
        admin: adminLogin
    })
    return newRefreshToken.save();
}


const findByValue = (value) => {

    return RefreshToken.findOne({value:value}, {});
}
const deleteByAdminLogin =(login)=>{
    return RefreshToken.deleteOne({admin: login},{})
}
export{
    findByValue,
    deleteByAdminLogin,
    create,
}