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
// ___ shows
db.shows.find(
    {

    }
).count();


db.shows.find(
    {

    }
).count();