db.shows.find( { weight: { $gt: 90 } } );

db.shows.explain().find( { weight: { $gt: 90 } } );

db.shows.getIndexes();

db.shows.createIndex(
    { weight: 1 },
    { name: "weight-idx" }
)

// IXSCAN is the plan used
// query is not run
db.shows.explain().find( { weight: { $gt: 90 } } );

// runs the query
db.shows.explain("executionStats").find( { weight: { $gt: 90 } } );

db.shows.explain("executionStats").find( { "rating.average": { $gt: 8 } } );

db.shows.createIndex(
    { weight: 1, "rating.average": 1 },
    { name: "weight-rating-idx" }
)