const mongoose = require( 'mongoose' );
const timeSchema = require( './Time' );

const workshopSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        required: true,
        unique: true
    },
    speakers: {
        type: [ String ],
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
        type: timeSchema,
        required: true
    },
    endTime: {
        type: timeSchema,
        required: true
    }
});

// Model is a class that has various methods to query and update the workshops collection
/*const Workshop = */mongoose.model( 'Workshop', workshopSchema/*, 'workshops' */ );