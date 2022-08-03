use showsDB;

// aggregation pipeline

// a) Using $match to get a collection with a filtered set of documents 

// i) Find all shows that have Drama as a genre 
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