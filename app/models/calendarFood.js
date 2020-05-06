import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var calendarFood = new Schema({
    title:{
        type:String,
        required:true
    },
    one:{
        type:String,
        required: true,
        default:'',
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
    },
    two:{
        type:String,
        required:true,
        default: '',
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
    },
    three:{
        type:String,
        required:true,
        default: '',
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
    },
    four:{
        type:String,
        required:true,
        default: '' ,
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
    },
    five:{
        type: String,
        required: true,
        default: '',
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
    },
    six:{
        type:String,
        default:'',
        summa:{
            type:String,
            default:''
        },
        grams:{
            type:String,
            default:""
        }
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
        one: CalendarFoodData.one,
        two:CalendarFoodData.two,
        three: CalendarFoodData.three,
        four: CalendarFoodData.four,
        five: CalendarFoodData.five,
        six: CalendarFoodData.six,
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