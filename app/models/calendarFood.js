import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Schemas
var calendarFood = new Schema({
    eat: {
        type: Array,
        required: true,
    },
    ticket: {
        type: String,
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
        ticket: CalendarFoodData.ticket,
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
const findCalendarFoodByDateAndAdminAndTicket = (date, adminClass, ticket) => {
    return CalendarFoodModel.findOne({ adminClass: adminClass, date: date, ticket: ticket }, { upsert: false })
}

const UpdateCalendarFood = (list) => {
    return CalendarFoodModel.updateMany({ adminClass: list.adminClass, date: list.date, ticket: list.ticket }, { eat: list.eat, summa: list.price }, { upsert: false })
}

export {
    findAllCalendarFoodClass,
    createCalendarFood,
    findAllCalendarFood,
    findAllCalendarFoodClassNoInfa,
    UpdateCalendarFood,
    findCalendarFoodByDateAndAdminAndTicket
}