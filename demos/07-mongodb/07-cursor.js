use showsDB;

let cursor2 = db.shows.find( {}, { name: true } );

// if there is a next document, let us pull it from the server and display it
while( cursor2.hasNext() ) {
    printjson( cursor2.next() );
}

// SORT, SKIP & LIMIT (methods on cursor) 
// sort(), skip() and limit() are called on cursors and also return cursors. The shell iterates 
// through the cursor that is finally returned from the chain of calls to these methods – The 
// order of the calls hence DOES NOT affect the results. 

// i) Retrieve all shows and sort by rating – first ascending (1) and then descending (-1)
db.shows.find( {}, { name: true, rating: true } ).sort(
    {
        "rating.average": -1,
        name: 1
    }
);

// ii) Retrieve all shows and sort by rating  first, and runtime when ratings are the same 
db.shows.find( {}, { name: true, rating: true, runtime: true } ).sort(
    {
        "rating.average": -1,
        runtime: 1
    }
);

// iii) Retrieve all shows and sort by rating  first, and runtime when ratings are the same. 
// This time skip 20 documents and retrieve only 10 documents. 
db.shows.find( {}, { name: true, rating: true, runtime: true } ).sort(
    {
        "rating.average": -1,
        runtime: 1
    }
).skip( 20 ).limit( 40 );