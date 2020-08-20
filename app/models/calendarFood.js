import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var calendarFood = new Schema({
    eat: {
        type: Array,
        required: true,
    },
    adminClass: {
        type: String,
        required: true,
    },
    summa: {
        type: String,
        default: '0'
    },
    date: {
        type: Date,
        default: Date.now
    }
});





const CalendarFoodModel = mongoose.model('CalendarFoodModel', calendarFood);


const createCalendarFood = (CalendarFoodData) => {
    const newCalendarFoodModel = new CalendarFoodModel({
        eat: CalendarFoodData.eat,
        adminClass: CalendarFoodData.adminClass,
        date: CalendarFoodData.date,
        summa: CalendarFoodData.summa,
    })
    return newCalendarFoodModel.save();
}


const findAllCalendarFoodClass = (adminClass) => {
    return CalendarFoodModel.find({ adminClass: adminClass }, { __v0: 0 })
}

const findAllCalendarFoodClassNoInfa = (adminClass) => {
    return CalendarFoodModel.find({ adminClass: adminClass }, { __v0: 0 })
}

const findAllCalendarFood = () => {
    return CalendarFoodModel.find({}, { __v0: 0 })
}
const findCalendarFoodByDateAndAdmin = (date, adminClass) => {
    return CalendarFoodModel.findOne({ adminClass: adminClass, date: date }, { upsert: false })
}

const UpdateCalendarFood = (list) => {
    return CalendarFoodModel.updateMany({ adminClass: list.adminClass, date: list.date }, { eat: list.eat, summa: list.price }, { upsert: false })
}

export {
    findAllCalendarFoodClass,
    createCalendarFood,
    findAllCalendarFood,
    findAllCalendarFoodClassNoInfa,
    UpdateCalendarFood,
    findCalendarFoodByDateAndAdmin
}