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
    director:{
        type: String,
    }
});




const RefreshToken = mongoose.model('RefreshTokenDirector', refreshToken);


const create = (token, directorLogin) =>{
    const newRefreshToken = new RefreshToken({
        value:token,
        director: directorLogin
    })
    return newRefreshToken.save();
}


const findByValue = (value) => {

    return RefreshToken.findOne({value:value}, {});
}
const deleteByDirectorLogin =(directorlogin)=>{
    return RefreshToken.deleteOne({director: directorlogin},{})
}
export{
    findByValue,
    deleteByDirectorLogin,
    create,
}