import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const expirationTime = 36000 * 1000;
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
    director:{
        type: String,
    }
});




const AccesToken = mongoose.model('AccesTokenDirector', accesToken);


const create = (token, directorLogin) =>{
    const newAccesToken = new AccesToken({
        value: token,
        director: directorLogin
    })
    return newAccesToken.save();
}


const findByValue = (value) => {

    return AccesToken.findOne({value:value}, {});
}
const deleteByDirectorLogin =(directorlogin)=>{
    return AccesToken.deleteOne({director: directorlogin},{});
}


export{
    findByValue,
    create,
    deleteByDirectorLogin,

}