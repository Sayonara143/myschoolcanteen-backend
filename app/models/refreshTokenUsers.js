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
    user:{
        type: String,
        
    }
});




const RefreshToken = mongoose.model('RefreshTokenUser', refreshToken);


const create = (token, userLogin) =>{
    const newRefreshToken = new RefreshToken({
        value:token,
        user: userLogin
    })
    return newRefreshToken.save();
}


const findByValue = (value) => {

    return RefreshToken.findOne({value:value}, {});
}
const deleteByUserLogin =(login)=>{
    return RefreshToken.deleteOne({user: login},{})
}
export{
    findByValue,
    deleteByUserLogin,
    create,
}