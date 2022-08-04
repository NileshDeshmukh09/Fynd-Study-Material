const mongoose = equire( 'mongoose' );

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
            required: true
        },
        minutes: {
            type: Number,
            default: 0
        }
    },
    endTime: {
        hours: {
            type: Number,
            required: true
        },
        minutes: {
            type: Number,
            default: 0
        }
    }
});

// Model is a class that has various methods to query and update the workshops collection
mongoose.model( 'Workshop', workshopSchema/*, 'workshops' */ );