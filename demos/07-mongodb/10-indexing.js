db.shows.find( { weight: { $gt: 90 } } );

db.shows.explain().find( { weight: { $gt: 90 } } );

db.shows.getIndexes();

// 1. simple index
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

// 2. compound index
db.shows.createIndex(
    { weight: 1, "rating.average": 1 },
    { name: "weight-rating-idx" }
)

db.shows.explain("executionStats").find(
    {
        weight: {
            $gt: 90
        },
        "rating.average": {
            $gt: 8
        }
    }
);

// Having both weight index and weight-rating index has no special benefit for the following query
// 90 document examined using weight-idx
db.shows.explain("executionStats").find( { weight: { $gt: 90 } } );

db.shows.dropIndex( "weight-idx" );

// 90 document examined using weight-rating-idx
db.shows.explain("executionStats").find( { weight: { $gt: 90 } } );

// COLLSCAN
db.shows.explain("executionStats").find( { "rating.average": { $gt: 8 } } );

// 3. UNIQUE index (created on fields with unique values) - name, officialSite etc. are unique
// if null value exists on the field, we can ask MongoDB to index only those satisfying a condition (eg. only those with officialSite as a string) 
db.shows.createIndex(
    { officialSite: 1 },
    { name: "site-index", unique: true, partialFilterExpression: { officialSite: { $type: "string" } } }
)

// COLLSCAN (not sure why???)
db.shows.explain("executionStats").find({
    officialSite: "http://www.channel4.com/programmes/utopia"
})

// we have 2 shows named Utopia - let us drop one so we can index by name
db.shows.deleteOne({
    "id" : 153
});

db.shows.createIndex(
    { name: 1 },
    { name: "name-index", unique: true }
)

// will use IXSCAN using name-index
db.shows.explain("executionStats").find({
    name: /Voice/
});

// 4. text index
// we get match
db.shows.find({
    summary: /British crime/i
})

db.shows.find({
    summary: /British knowledge/i
})

// Let us create a text index - we have many options when creating such an index (please explore)
db.shows.createIndex(
    { summary: 'text', name: 'text', language: 'text', genres: 'text' },
    { name: 'text-index', default_language: 'en', language_override: 'en' }
);

// Let us do a text search with the search key "British knowledge"
// does not rank well
db.shows.find({
    $text: {
        $search: "British knowledge"
    }
});

// let us rank it properly (sorting by ranking given by MongoDB, i.e. "score")
db.shows.find({
    $text: {
        $search: "British knowledge"
    }
}).sort({
    score: {
        $meta: "textScore"
    }
}).limit(3);

// search for documents which have British, but which DO NOT have the word knowledge
db.shows.find({
    $text: {
        $search: "British -knowledge"
    }
}).sort({
    score: {
        $meta: "textScore"
    }
}).limit(3);