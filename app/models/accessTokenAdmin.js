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
    admin:{
        type: String,
    }
});




const AccesToken = mongoose.model('AccesTokenAdmin', accesToken);


const create = (token, adminLogin) =>{
    const newAccesToken = new AccesToken({
        value: token,
        admin: adminLogin
    })
    return newAccesToken.save();
}


const findByValue = (value) => {

    return AccesToken.findOne({value:value}, {});
}
const deleteByAdminLogin =(login)=>{
    return AccesToken.deleteOne({admin: login},{});
}


export{
    findByValue,
    create,
    deleteByAdminLogin,

}