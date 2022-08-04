const mongoose = require( 'mongoose' );

const workshopSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [ 'frontend', 'backend' ]
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    startTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    },
    endTime: {
        hours: {
            type: Number,
            required: true,
            min: 0,
            max: 23
        },
        minutes: {
            type: Number,
            default: 0,
            min: 0,
            max: 59
        }
    }
});

// Model is a class that has various methods to query and update the workshops collection
/*const Workshop = */mongoose.model( 'Workshop', workshopSchema/*, 'workshops' */ );