// Field update operators - $inc, $min, $max, $mul, $rename, $set, $unset 

// i. Find all shows that are in English and have network -> country code as US, and set 
// the language as English (US) instead. Also add a new field locale and set it to “en-US” 

// $set will update the field if it already exists
// $set will create the field if it does not exist
db.shows.updateMany(
    {
        language: "English",
        "network.country.code": "US"
    },
    {
        $set: {
            locale: 'en-US',
            "network.country.code": "USA"
        }
    }
)

// ii. Find the first show that has a weight of less than 40 and rating more than 7 and increase weight by 10. Also set a new field “criticsChoice” to true. 
db.shows.findOne(
    {
        weight: {
            $lt: 40
        },
        "rating.average": {
            $gt: 7
        }
    }
);

db.shows.updateOne(
    {
        weight: {
            $lt: 40
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $inc: {
            weight: 10
        },
        $set: {
            criticsChoice: true
        }
    }
)

// iii. Find the first show that has a weight of more than 80 and rating less than 6 and decrease weight by 10. Also set a new field “criticsChoice” to false. 
db.shows.findOne(
    {
        weight: {
            $gt: 80
        },
        "rating.average": {
            $lt: 6
        }
    }
);

db.shows.updateOne(
    {
        weight: {
            $gt: 80
        },
        "rating.average": {
            $lt: 6
        }
    },
    {
        $inc: {
            weight: -10
        },
        $set: {
            criticsChoice: false
        }
    }
);

// iv. Find all shows that have a weight of less than 50 and rating more 7 and increase weight to maximum( 50, current value ). 
db.shows.find(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    }
);

db.shows.updateMany(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $max: {
            weight: 50
        }
    }
);

// query back to check the update
db.shows.findOne( { name: /Hellsing/ } )

// v. Find all shows that have a weight of less than 60 and rating more 8 and multiply the weight by 1.333333 
db.shows.findOne(
    {
        weight: {
            $lt: 60
        },
        "rating.average": {
            $gt: 8
        }
    }
)

db.shows.updateMany(
    {
        weight: {
            $lt: 60
        },
        "rating.average": {
            $gt: 8
        }
    },
    {
        $mul: {
            weight: 1.333333
        }
    }
);

db.shows.findOne(
    {
        _id: ObjectId("62e3e05afa79d4fcd6b9e36d")
    }
);

// vi. Rename criticsChoice field as cc in all documents
db.shows.updateMany(
    { },
    {
        $rename: {
            criticsChoice: 'cc'
        }
    }
)

db.shows.find(
    {
        cc: {
            $exists: true
        }
    }
);

// vii. Remove field cc (criticsChoice) from all documents 
db.shows.updateMany(
    { },
    {
        $unset: {
            cc: true
        }
    }
)

// 0 documents matched
db.shows.find(
    {
        cc: {
            $exists: true
        }
    }
);

// viii. Try finding a document with a show name that does not exist (also use language : “English” while finding). Set the rating and genres for it. Use the upsert option and check that the upserted documented has fields that are part of the filter clause, as well as the update clause. 



// b) Array update operators - $, $push, $each, $sort, $slice, $pull, $pop, $addToSet 
// i) Update all shows that have a scheduled screening on “Monday”, and replace the 
// item “Monday” with “monday” (lowercase). Hint: Use $ operator. 
// ii) Update all shows with genre “Horror” by adding another genre “Supernatural” 
// iii) Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and 
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used 
// in this case. 
// iv) Remove the genre Supernatural from the first matching document 
// v) Remove the last genre from every document 
// vi) Add genre Supernatural to all documents of genre Horror. However the 
// Supernatural genre should not be added if it already exists as a genre in the 
// document. 