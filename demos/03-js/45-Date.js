const today = new Date(); // current date and time
console.log( today ); // 2022-06-29T14:18:39.320Z (ISO Date string format)

// Jan - 0, Dec - 11
const independenceDay = new Date( 1947, 7, 15 );
console.log( independenceDay ); // 1947-08-14T18:30:00.000Z
console.log( independenceDay.toLocaleDateString() );
console.log( independenceDay.toLocaleTimeString() );

console.log( today.getFullYear() );
console.log( today.getDay() ); // Sun - 0, Sat - 6

independenceDay.setDate( 10 );
console.log( independenceDay.toLocaleDateString() );

today.setDate( 31 );
console.log( today.toLocaleDateString() );

// 100 days from date held by variable today
today.setDate( today.getDate() + 110 );
console.log( today.toLocaleDateString() );

console.log( today.getTime() ); // number of milliseconds since Jan 1 1970

console.log( today.getTime() / 1000 / 60 / 60 / 24 / 365.25 );