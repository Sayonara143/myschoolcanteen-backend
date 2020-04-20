import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var calendarFood = new Schema({
    title:{
        type:String,
        required: true
    },
    first:{
        type:String,
        required:true,
        default: '0'
    },
    second:{
        type:String,
        required:true,
        default: '0'
    },
    third:{
        type:String,
        required:true,
        default: '0' 
    },
    fourth:{
        type: String,
        required: true,
        default: '0'
    },
    adminClass:{
		type: String,
		required: true,
    },
    summa:{
        type: String,
        default: '0'
    },
	date: {
		type: Date,
		default: Date.now
	}
});





const CalendarFoodModel = mongoose.model('CalendarFoodModel', calendarFood);


const createCalendarFood = (CalendarFoodData) =>{
    const newCalendarFoodModel = new CalendarFoodModel({
        title: CalendarFoodData.title,
        first:CalendarFoodData.first,
        second: CalendarFoodData.second,
        third: CalendarFoodData.third,
        fourth: CalendarFoodData.fourth,
        adminClass: CalendarFoodData.adminClass,
        date: CalendarFoodData.date,
        summa: CalendarFoodData.summa,
    })
    return newCalendarFoodModel.save();
}


const findAllCalendarFoodClass = (adminClass) =>{
    return CalendarFoodModel.find({adminClass: adminClass},{__v0:0})
}

const findAllCalendarFood = () =>{
    return CalendarFoodModel.find({},{__v0:0})
}

export{ 
    findAllCalendarFoodClass,
    createCalendarFood,
    findAllCalendarFood,
}