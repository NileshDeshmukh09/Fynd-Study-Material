const mongoose = require( 'mongoose' );
const timeSchema = require( './Time' );

/**
 * In MongoDB, the documents can store related information together
 * For example, we can store, the topics for a particular workshop, in the workshop document as an array, say "topics".
 */

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
    },
    // prefer this as far as possible
    // topics: {
    //     type: [
    //         topicSchema
    //     ]
    // }
});

// Model is a class that has various methods to query and update the workshops collection
/*const Workshop = */mongoose.model( 'Workshop', workshopSchema/*, 'workshops' */ );