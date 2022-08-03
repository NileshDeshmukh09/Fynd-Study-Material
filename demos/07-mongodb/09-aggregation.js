use showsDB;

// aggregation pipeline

// a) Using $match to get a collection with a filtered set of documents 

// i) Find all shows that have Drama as a genre 
// 145 shows
db.shows.aggregate(
    [
        {
            $match: {
                genres: 'Drama'
            }
        }
    ]
).toArray().length;
    
// ii) Find all shows on HBO
// 15 shows
db.shows.aggregate(
    [
        {
            $match: {
                "network.name": "HBO"
            }
        }
    ]
).toArray().length;

// Using $group to group documents by field values and produce a new collection representing groups 

// i) Group shows by the name of network they are running on, and also find the number of shows in each network
// [ { "_id" : "Disney XD", "numShows" : 1 }, { ...}, ... ]
db.shows.aggregate(
    [
        {
            $group: {
                _id: "$network.name",
                numShows: {
                    $count: {}
                }
            }
        },
        { // add a pipeline stage that results in a collection of networks with at least 10 shows
            $match: {
                numShows: {
                    $gte: 10
                }
            }
        }
    ]
)

// ii)  Group shows by name of network and country they are running in, and also find the 
// number of shows, and average runtime of shows in each group (network+country 
// combination)
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: "$runtime"
                }
            }
        }
    ]
)

// iii)  Repeat the above query but create a new field called “stats” in the output 
// documents. The “stats” field should have number of shows, and average runtime of 
// shows for the group. 
/**
 * { "_id" : { "network" : "BBC Two", "country" : "GB" }, "numShows" : 1, "avgRuntime" : 60 }
 * 
 * { "_id" : { "network" : "BBC Two", "country" : "GB" }, statistics: { "numShows" : 1, "avgRuntime" : 60 } }
 */
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: "$runtime"
                }
            }
        },
        {
            $project: {
                _id: "$_id",
                statistics: {
                    numShows: "$numShows",
                    avgRuntime: "$avgRuntime"
                }
            }
        }
    ]
)

// iv)  Just like we can transform document to form new fields with subdocuments while 
// projecting, we can also create a new array. Using the $push operator in $group stage, 
// we can create a new array with one item per document in the group! This is a special 
// feature of MongoDB with no equivalent in SQL (you can calculate only aggregate 
// values like sum, average etc. there). Repeat the above exercise, and create an 
// additional field “names” that is an array of names of all shows in the group.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: "$runtime"
                },
                shows: {
                    $push: "$name"
                }
            }
        }
    ]
)


// v)  Select all shows that are in English (“language” value), and then group them by their 
// type. The output should have the names of the group in the type field, along with 
// the number of shows in each group. 
db.shows.aggregate(
    [
        {
            $match: {
                language: 'English'
            }
        },
        {
            $group: {
                _id: "$type",
                numShows: {
                    $count: {}
                }
            }
        }
    ]
)

// c) Using $match to filter grouped documents 
// SQL has a WHERE clause to filter records before grouping, and a HAVING clause 
// after grouping (which filters the grouped records based on some aggregate value 
// usually). In MongoDB, $match fulfils both these requirements. 


// i) Repeat the exercise grouping shows by network name and country. The final results 
// should show only the grouped documents of networks that have at least 5 shows. 
// ALREADY DONE

// ii)  Repeat the same but show only groups with average runtime less than 50. 
// EXERCISE
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.code"
                },
                avgRuntime: {
                    $avg: "$runtime"
                }
            }
        },
        {
            $match: {
                avgRuntime: {
                    $lt: 50
                }
            }
        }
    ]
)

// d)  Using $sort to sort documents 
// i) Group shows by name of network and country they are running in, and also find the 
// number of shows, and average runtime of shows in each group (network+country 
// combination). Now sort them by the number of shows (group with highest number 
// of shows appears first). If 2 networks are tied on number of shows, the one with the 
// lower average runtime appears first. 
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: "$runtime"
                }
            }
        },
        {
            $sort: {
                numShows: -1,
                avgRuntime: 1
            }
        }
    ]
);

// ii)  Repeat the above exercise, but make sure groups are formed only on shows that are 
// “Running

db.shows.aggregate(
    [
        {
        }
    ]
).toArray().length;