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
		required: true
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
    user:{
        type: String,
        
    }
});




const AccesToken = mongoose.model('AccesTokenUser', accesToken);


const create = (token, userLogin) =>{
    const newAccesToken = new AccesToken({
        value:token,
        user: userLogin
    })
    return newAccesToken.save();
}


const findByValue = (value) => {

    return AccesToken.findOne({value:value}, {});
}
const deleteByUserLogin =(login)=>{
    return AccesToken.deleteOne({user: login},{});
}


export{
    findByValue,
    create,
    deleteByUserLogin,

}