use showsDB;

let cursor2 = db.shows.find( {}, { name: true } );

// if there is a next document, let us pull it from the server and display it
while( cursor2.hasNext() ) {
    printjson( cursor2.next() );
}