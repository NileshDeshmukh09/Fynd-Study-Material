// Find shows that are less than one hour duration (60 minutes)
db.shows.find(
    {
        runtime: {
            $lt: 60
        }
    }
);

db.shows.find(
    {
        runtime: {
            $lt: 60
        }
    }
).count();

// Find shows with runtime between 30 and 60 minutes
db.shows.find(
    {
        runtime: {
            $gt: 30,
            $lt: 60 
        }
    }
).count();

// Find shows with average rating at least 8 
// 112 shows
db.shows.find(
    {
        "rating.average": {
            $gte: 8
        }
    }
).count();

// Find shows with rating between 8 and 9 (both inclusive)
// 105 shows
db.shows.find(
    {
        "rating.average": {
            $gte: 8,
            $lte: 9
        }
    }
).count();

// Find shows in Horror genre
// Treat array-valued attributes as normal attributes when querying
// 23 shows
db.shows.find(
    {
        genres: 'Horror'
    }
).count();

// Find shows which have ONLY Drama as their genre 
db.shows.find(
    {
        genres: [
            'Drama'
        ]
    }
).count();

// $in can be applied on any field - array field / non-array field
// Find shows that have one of Drama or Horror as genres in them
// 159 shows
// genres is an array field
db.shows.find(
    {
        genres: {
            $in: [ 'Horror', 'Drama' ]
        }
    }
).count();

// 217 shows
// languages is a non-array field - string field
db.shows.find(
    {
        "network.country.code": {
            $in: [ 'US', 'UK' ]
        }
    }
).count();

// Find shows that are of type Animation or Reality 
// EXERCISE...
// 24 shows
db.shows.find(
    {
        type: {
            $in: [ 'Animation', 'Reality' ]
        }
    }
).count();

// Find shows that have neither Drama nor Horror as genres in them
// 81 shows (if $in selects a document, $nin will not select the document!, and vice-versa)
db.shows.find(
    {
        genres: {
            $nin: [ 'Drama', 'Horror' ]
        }
    }
).count();

// Find shows that are neither of type Animation, nor Reality 
// 216 shows
// EXERCISE..
db.shows.find(
    {
        type: {
            $nin: [ 'Animation', 'Reality' ]
        }
    }
).count();


// Find shows that are not running on the network HBO, nor FOX
// 202 shows
// EXERCISE..
db.shows.find(
    {
        "network.name": {
            $nin: [ 'HBO', 'FOX' ]
        }
    }
).count();

// Find shows that have one of Drama or Horror as genres in them (try this  without using $in) 
// logical operators are above the conditions (top-level)
// 159 shows
// syntax - { $or: [ condition1, condition2, condition3, ... ] }
db.shows.find(
    {
        $or: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count();

// Find shows that have neither Drama nor Horror as genres in them (try this with $not and $in)
// // syntax - { $and: [ condition1, condition2, condition3, ... ] }
db.shows.find(
    {
        $and: [
            {
                genres: {
                    $not: {
                        $eq: 'Drama'
                    }
                }
            },
            {
                genres: {
                    $not: {
                        $eq: 'Drama'
                    }
                }
            }
        ]
    }
).count();

// Find shows that have BOTH Drama and Horror as their genre 
// 17 shows
// EXERCISE...
db.shows.find(
    {
        $and: [
            { genres: 'Drama' },
            { genres: 'Horror' },
        ]
    }
).count();

// Find shows that have genre Drama but not Horror. Again, find shows that have genre Horror but not Drama.
// 142 shows
db.shows.find(
    {
        $or: [
            {
                $and: [
                    {
                        genres: 'Drama'
                    },
                    {
                        genres: {
                            $ne: 'Horror'
                        }
                    }
                ]
            },
            {
                $and: [
                    {
                        genres: 'Horror'
                    },
                    {
                        genres: {
                            $ne: 'Drama'
                        }
                    }
                ]
            }
        ]
    }
).count();

// Find shows that have a "externals.imdb" property 
// 0 shows
db.shows.find(
    {
        "externals.imdb": {
            $exists: false
        }
    }
).count();

// Find shows that have a webChannel with a country field within
db.shows.find(
    {
        "webChannel.country": {
            $exists: true
        }
    }
).count();

// Find shows which have a web channel (not null, but an object)
// 10 shows
db.shows.find(
    {
        "webChannel": {
            $type: "object"
        }
    }
).count();

// Find all shows whose name contains the word “Last” (case-insensitive)
db.shows.find(
    {
        name: /Last/i
    }
).count();

db.shows.find(
    {
        name: {
            $regex: /Last/,
            $options: 'i'
        }
    }
).count();

// Find all shows whose weight is more than 10 times their average rating
// weight > 10 * rating.average
db.shows.find(
    {
        $expr: {
            $gt: [
                "$weight",
                {
                    $multiply: [
                        10,
                        "$rating.average"
                    ]
                }
            ]
        }
    }
).count();

// Find shows that have BOTH Drama and Horror as their genre. Use $all.
// We did this earlier with $and
// 17 shows
db.shows.find(
    {
        genres: {
            $all: [ 'Drama', 'Horror' ]
        }
    }
).count();

// Find shows that are scheduled on both "Monday" and "Tuesday"
// 4 shows
db.shows.find(
    {
        "schedule.days": {
            $all: [ 'Monday', 'Tuesday' ]
        }
    }
).count();

// Create a collection to store scores of students in various subjects. Include name of 
// students in one field, and scores in another (between 0 – 100). Scores is an array of 
// document, each with the subject name and score. Insert some documents so that some 
// subjects are shared among students and some subjects are specific to a student (elective 
// subjects). Now do the following. 
use examsdb;

db.scores.insertMany(
    [
        {
            name: 'John Doe',
            scores: [
                { subject: 'History', score: 91 },
                { subject: 'Geography', score: 85 },
                { subject: 'English', score: 79 }
            ]
        },
        {
            name: 'Jane Doe',
            scores: [
                { subject: 'History', score: 84 },
                { subject: 'Maths', score: 97 },
                { subject: 'Geography', score: 67 }
            ]
        },
        {
            name: 'Mark Smith',
            scores: [
                { subject: 'Maths', score: 85 },
                { subject: 'Physics', score: 99 },
                { subject: 'Chemistry', score: 82 }
            ]
        }
    ]
)

// i) Find all students who have a score of more 95% in some subject and have taken up history 
// Result -> Only 1 student (Jane)
db.scores.find(
    {
        "scores.subject": "History",
        "scores.score": {
            $gte: 95
        }
    }
);

// ii) Find all students who have a score of more than 90% in history 
// result -> Only 1 student (John)
db.scores.find(
    {
        scores: {
            $elemMatch: {
                subject: 'History',
                score: {
                    $gte: 90
                }
            }
        } 
    }
);

// iii) Find all students who have taken up exactly 2 subjects
// EXERCISE: Add 2 new students with only 2 subjects each
db.scores.insertMany(
    [
        {
            name: 'Mary Smith',
            scores: [
                { subject: 'Maths', score: 100 },
                { subject: 'Physics', score: 78 },
            ]
        },
        {
            name: 'David Lane',
            scores: [
                { subject: 'Maths', score: 90 },
                { subject: 'Physics', score: 85 },
            ]
        }
    ]
);


db.shows.find(
    {
        
    }
).count();