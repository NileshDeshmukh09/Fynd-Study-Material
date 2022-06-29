// ES2015 -> ECMAScript (v6)
// arrays
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const mon = weekdays[0], tue = weekdays[1], fri = weekdays[4];
const [ mon, tue, , , fri = 'Shukravaar', sat = 'Saturday' ] = weekdays;

console.log( mon, tue, fri, sat );